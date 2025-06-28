import BlogCard from "@/components/BlogCard";
import { Post } from "@/types/post";
import Link from "next/link";
export default async function Blogs() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Failed to fetch posts");
  const posts: Post[] = await res.json();
  let categories = [
    "Technology",
    "Health",
    "Lifestyle",
    "Travel",
    "Food",
    "Education",
  ];
  return (
    <main className="container">
      <h1 className="flex justify-center items-center mb-12 text-2xl">
        All Blogs
      </h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full mb-14 ">
        {posts.map((post) => (
          <Link href={`/blogs/${post.id}`} className="min-h-[300px]">
            <BlogCard
              key={post.id}
              blogTitle={post.title}
              blogCategory={
                categories[Math.floor(Math.random() * categories.length)]
              }
              blogImage={`https://picsum.photos/seed/${post.id}/800/600`}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
