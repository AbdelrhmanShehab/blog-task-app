import React from "react";
import Image from "next/image";
import blogimg from "../../public/assets/images/profile-pic.jpg";
interface MainBlogCardProps {
  mainBlogTitle: string;
  mainBlogBody: string;
}
export default function MainBlogCard({
  mainBlogTitle,
  mainBlogBody,
}: MainBlogCardProps) {
  return (
    <div className="mt-24">
      <article className="w-full relative mb-4 text-[#181A2A] cursor-pointer dark:text-white hover:text-[#4B6BFB]  hover:scale-105">
        <Image
          src="https://picsum.photos/seed/1000/800/600"
          alt="Better quality"
          width={800}
          height={600}
          className="w-full h-[480px] object-cover rounded-lg"
        />
        <figure className="absolute bg-white dark:bg-[#181A2A] dark:text-white w-[80%] md:w-[50%] h-[85%] md:h-[70%] lg:h-[60%] rounded-2xl bottom-[-60px] left-6 md:left-6 shadow-xl ">
          <div className="p-1 text-xs font-semibold text-[#4B6BFB] bg-blue-100 dark:bg-blue-900 dark:text-blue-300 rounded-lg flex items-center justify-center absolute top-6 left-6 md:left-6">
            <h3>Technology</h3>
          </div>
          <figcaption className="flex flex-col items-center justify-center h-full ">
            <div className="flex flex-col items-center justify-cenpxter pt-10 w-[86%] h-[80%] gap-4">
              <h1 className="text-2xl leading-6 font-semibold">
                {mainBlogTitle}
              </h1>
              <p className="leading-6">{mainBlogBody}</p>
            </div>
          </figcaption>
        </figure>
      </article>
    </div>
  );
}
