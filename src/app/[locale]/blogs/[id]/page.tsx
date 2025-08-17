// @ts-nocheck
import { notFound } from "next/navigation";
import Image from "next/image";
import BlogCard from "@/app/[locale]/components/BlogCard";
import Link from "next/link";
export const dynamic = "force-dynamic";

export default async function BlogDetails({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) return notFound();

  const post = await res.json();

  const allPostsRes = await fetch("https://jsonplaceholder.typicode.com/posts");
  const allPosts = await allPostsRes.json();
  const otherPosts = allPosts.filter((p) => p.id !== Number(params.id));
  const shuffled = otherPosts.sort(() => 0.5 - Math.random());
  const relatedPosts = shuffled.slice(0, 3);

  const categories = [
    "Technology",
    "Health",
    "Lifestyle",
    "Travel",
    "Food",
    "Education",
  ];

  return (
    <main className="container">
      <span className="text-xs -mt-4 font-semibold text-[#4B6BFB] mb-6 bg-blue-100 dark:bg-blue-900 dark:text-blue-300 px-4 py-3 rounded-full inline-block">
        Life Style
      </span>
      <Image
        src={`https://picsum.photos/seed/${params.id}/800/600`}
        alt="Blog Image"
        width={800}
        height={600}
        className="w-full h-110 object-cover rounded-lg"
      />
      <div className="flex flex-col gap-4 mt-4">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-700 dark:text-gray-300">{post.body}</p>
      </div>
      <h2 className="mt-30 mb-6 font-bold text-2xl">Related posts</h2>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full mb-20">
        {relatedPosts.map((post) => (
          <Link
            key={post.id}
            href={`/blogs/${post.id}`}
            className="min-h-[300px]"
          >
            <BlogCard
              blogTitle={post.title}
              blogCategory={categories[post.id % categories.length]}
              blogImage={`https://picsum.photos/seed/${post.id}/800/600`}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
