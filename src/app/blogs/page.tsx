"use client";

import BlogCard from "@/components/BlogCard";
import { Post } from "@/types/post";
import Link from "next/link";
import { useEffect, useState } from "react";
import Pagination from "@/components/Pagination";

export default function Blogs() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  const [posts, setPosts] = useState<Post[]>([]);

  let categories = [
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
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok) throw new Error("Failed to fetch posts");
        const data: Post[] = await res.json();
        setPosts(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPosts();
  }, []);

  const lastPost = currentPage * postsPerPage;
  const firstPost = lastPost - postsPerPage;
  const currentPosts = posts.slice(firstPost, lastPost);

  return (
    <main className="container">
      <h1 className="flex justify-center items-center mb-12 text-2xl">
        All Blogs
      </h1>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full mb-14">
        {currentPosts.map((post) => (
          <Link key={post.id} href={`/blogs/${post.id}`} className="min-h-[300px]">
            <BlogCard
              blogTitle={post.title}
              blogCategory={categories[Math.floor(Math.random() * categories.length)]}
              blogImage={`https://picsum.photos/seed/${post.id}/800/600`}
            />
          </Link>
        ))}
      </div>

      <Pagination
        totalPosts={posts.length}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <div className="h-12" />
    </main>
  );
}
