"use client";

import BlogCard from "@/components/BlogCard";
import { Post } from "@/types/post";
import Link from "next/link";
import { useEffect, useState } from "react";
import Pagination from "@/components/Pagination";
import Loading from "@/components/Loading";
import ErrorComponent from "@/components/ErrorComponent";

export default function Blogs() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "Technology",
    "Health",
    "Lifestyle",
    "Travel",
    "Food",
    "Education",
  ];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!res.ok) throw new Error("Failed to fetch posts");

        const data: Post[] = await res.json();
        setPosts(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Reset to page 1 on filters
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title
      .toLowerCase()
      .startsWith(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" ||
      post.id % categories.length === categories.indexOf(selectedCategory);

    return matchesSearch && matchesCategory;
  });

  const lastPost = currentPage * postsPerPage;
  const firstPost = lastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(firstPost, lastPost);

  return (
    <main className="container">
      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorComponent />
      ) : (
        <>
          <h1 className="flex justify-center items-center mb-12 text-2xl">
            All Blogs
          </h1>

          <div className="w-full flex justify-center items-center">
            <input
              className="w-[260px] mb-6 pl-3 h-12 border dark:border-white border-[#181A2A]  rounded-lg focus:outline-none focus:ring-1 focus:[#181A2A]"
              type="text"
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search blogs..."
            />
          </div>

          {/* Category filter buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {["All", ...categories].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm border cursor-pointer transition-all ${
                  selectedCategory === cat
                    ? "bg-[#181A2A] text-white dark:bg-white dark:text-[#181A2A]"
                    : "bg-transparent text-[#181A2A] dark:text-white border-[#181A2A] hover:bg-white hover:text-[#181A2A] dark:border-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full mb-14">
            {currentPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blogs/${post.id}`}
                className="min-h-[300px]"
              >
                <BlogCard
                  blogTitle={post.title}
                  blogCategory={
                    categories[Math.floor(post.id % categories.length)]
                  }
                  blogImage={`https://picsum.photos/seed/${post.id}/800/600`}
                />
              </Link>
            ))}
          </div>

          <Pagination
            totalPosts={filteredPosts.length}
            postsPerPage={postsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <div className="h-12" />
        </>
      )}
    </main>
  );
}
