"use client";

import { Post } from "@/app/[locale]/types/post";
import MainBlogCard from "@/app/[locale]/components/MainBlogCard";
import BlogCard from "@/app/[locale]/components/BlogCard";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { useEffect, useState } from "react";

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const t = useTranslations("Home-Page");
  const locale = useLocale(); // ✅ moved here

  // Fetch posts
  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok) throw new Error("Failed to fetch posts");
        const data: Post[] = await res.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPosts();
  }, []);

  // Categories translated
  const categories = [
    t("Technology"),
    t("Health"),
    t("Lifestyle"),
    t("Travel"),
    t("Food"),
    t("Education"),
  ];
  const tBlogs = useTranslations("blogs");

  return (
    <main className="container">
      <h1 className="text-4xl text-center font-bold text-indigo-600 dark:text-indigo-400">
        {t("welcome")}
      </h1>

      <h2 className="text-2xl mt-8 text-center w-full text-gray-700 dark:text-gray-300">
        {t("description")}
      </h2>

      <h2 className="text-2xl mt-8 text-center w-full text-teal-600 dark:text-teal-400 font-medium">
        {t("perefernce")}
      </h2>

      {/* Main blog card */}
      {posts.length > 0 && (
        <MainBlogCard
          mainBlogTitle={posts[0].title}
          mainBlogBody={posts[0].body.slice(1, 600)}
        />
      )}

      {/* Recent blogs */}
      <h2 className="mt-24 mb-6 text-2xl font-semibold">{t("Recent-blogs")}</h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 w-full mb-14">
        {posts.slice(2, 11).map((post) => (
          <Link
            key={post.id}
            href={`/${locale}/blogs/${post.id}`} // ✅ include locale
            className="min-h-[300px]"
          >
            <BlogCard
              blogTitle={post.title}
              blogCategory={
                categories[Math.floor(Math.random() * categories.length)]
              }
              blogImage={`https://picsum.photos/seed/${post.id}/800/600`}
            />
          </Link>
        ))}
      </div>

      <button className="text-white absolute translate-x-[-50%] left-[50%] flex justify-center items-center rounded-2xl text-lg w-[164px] mb-16 h-[56px] cursor-pointer text-center bg-blue-800 hover:bg-blue-700 transition-all duration-300 ease-in-out">
        <Link href={`/${locale}/blogs`}>{tBlogs("Blogs")}</Link>
      </button>

      <div className="h-10"></div>
    </main>
  );
}
