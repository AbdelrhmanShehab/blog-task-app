"use client";
import right from "../../public/assets/icons/right-icon.svg";
import Image from "next/image";
interface PaginationProps {
  totalPosts: number;
  postsPerPage: number;
  setCurrentPage: (page: number) => void;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  const handlePageClick = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const pages: number[] = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="flex flex-wrap justify-between mt-8 gap-2">
      <button
        onClick={
          currentPage != 1 ? () => setCurrentPage(currentPage - 1) : undefined
        }
        className="flex justify-center items-center px-4 py-2 text-sm font-medium gap-3 cursor-pointer"
      >
        <Image
          width={20}
          height={20}
          src={right}
          alt="next icon"
          className="rotate-180"
        />
        PREV
      </button>
      <div>
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => handlePageClick(page)}
            className={`px-4 py-2 mr-2 text-sm font-medium border rounded-md transition duration-200 cursor-pointer ${
              page === currentPage
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100 dark:bg-[#1e1e2f] dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-700"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        onClick={
          currentPage != Math.ceil(totalPosts / postsPerPage)
            ? () => setCurrentPage(currentPage + 1)
            : undefined
        }
        className="flex justify-center items-center px-4 py-2 text-sm font-medium gap-3 cursor-pointer"
      >
        NEXT
        <Image width={20} height={20} src={right} alt="next icon" />
      </button>
    </div>
  );
};

export default Pagination;
