"use client";

import Image from "next/image";

interface BlogCardProps {
  blogImage: string;
  blogCategory: string;
  blogTitle: string;
}

export default function BlogCard({
  blogImage,
  blogCategory,
  blogTitle,
}: BlogCardProps) {
  return (
    <article className="bg-white cursor-pointer w-full dark:bg-[#181A2A] h-full rounded-2xl shadow-xl overflow-hidden  border-b-blue-950 p-4 transition hover:shadow-lg hover:scale-105">
      <div className="relative w-full h-48 rounded-lg overflow-hidden hover:scale-105 transition-transform min-h-48">
        <Image
          src={blogImage}
          alt="Blog image"
          fill
          className="object-cover"
          sizes="100%"
        />
      </div>

      {/* Category */}
      <span className="text-xs font-semibold text-[#4B6BFB] bg-blue-100 dark:bg-blue-900 dark:text-blue-300 px-3 py-2 rounded-full inline-block mt-4">
        {blogCategory}
      </span>

      {/* Title */}
      <h2 className="text-lg font-bold text-[#181A2A] dark:text-white mt-2 leading-6">
        {blogTitle}
      </h2>
    </article>
  );
}
