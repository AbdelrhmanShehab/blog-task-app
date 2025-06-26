import { Post } from "@/types/post";
import MainBlogCard from "@/components/MainBlogCard";
import BlogCard from "@/components/BlogCard";
export default async function PostsPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Failed to fetch posts");
  const posts: Post[] = await res.json();

  return (
    <main className="container">
      <div className="mt-8">
        <MainBlogCard
          mainBlogTitle={posts[0].title}
          mainBlogBody={posts[0].body.slice(1, 600)}
        />
        <div className="mt-26">
          <BlogCard
            blogTitle={posts[1].title}
            blogCategory="action"
            blogImage="https://picsum.photos/seed/42/800/600"
          />
        </div>
      </div>
    </main>
  );
}
