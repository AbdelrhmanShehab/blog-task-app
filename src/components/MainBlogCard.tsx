import React from "react";
import Image from "next/image";
import blogimg from "../../public/assets/images/profile-pic.jpg";
interface MainBlogCardProps {
  blogtitle: string;
  blogbody: string;
}
export default function MainBlogCard({
  blogtitle,
  blogbody,
}: MainBlogCardProps) {
  return (
    <div className="">
      <article className="w-full relative mb-4">
        <Image
          src={blogimg}
          alt="Sort"
          className="w-full h-[480px] object-cover rounded-lg"
        />
        <figure className="absolute bg-white dark:bg-[#181A2A] w-[50%] h-[50%] rounded-2xl bottom-[-60px] left-12">
          <div className="w-[18%] h-[12%] bg-[#4B6BFB] rounded-lg flex items-center justify-center absolute top-6 left-8">
            <h3 className="text-white">Technology</h3>
          </div>
          <figcaption className="flex flex-col items-center justify-center h-full ">
            <div className="flex flex-col items-center justify-cenpxter pt-10 w-[86%] h-[80%] gap-4">
              <h1 className="text-2xl leading-6 font-semibold">{blogtitle}</h1>
              <p className="leading-6">{blogbody}</p>
            </div>
          </figcaption>
        </figure>
      </article>
    </div>
  );
}
