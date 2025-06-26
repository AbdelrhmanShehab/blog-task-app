import { Post } from "@/types/post";
import MainBlogCard from "@/components/MainBlogCard";
import BlogCard from "@/components/BlogCard";
export default async function PostsPage() {
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
      <MainBlogCard
        mainBlogTitle={posts[0].title}
        mainBlogBody={posts[0].body.slice(1, 600)}
      />
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 w-full mt-26">
        {posts.map((post) => (
          <BlogCard
            key={post.id}
            blogTitle={post.title}
            blogCategory={
              categories[Math.floor(Math.random() * categories.length)]
            }
            blogImage={`https://picsum.photos/seed/${post.id}/800/600`}
          />
        ))}
      </div>
    </main>
  );
}
