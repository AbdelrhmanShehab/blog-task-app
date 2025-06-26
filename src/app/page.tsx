import { Post } from "@/types/post";
import BlogCard from "@/components/BlogCard";
import BlogCardProps from "@/components/MainBlogCard";
import MainBlogCard from "@/components/MainBlogCard";
export default async function PostsPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Failed to fetch posts");
  const posts: Post[] = await res.json();

  return (
    <main className="container">
      <h1 className="text-3xl font-bold mb-4">All Blog Posts</h1>
      <MainBlogCard blogtitle={posts[0].title} blogbody={posts[0].body.slice(1,600)} />
    </main>
  );
}
