import { Post } from "@/types/post";
import MainBlogCard from "@/components/MainBlogCard";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";

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

  console.log(posts.length);

  return (
    <>
      <main className="container">
        <MainBlogCard
          mainBlogTitle={posts[0].title}
          mainBlogBody={posts[0].body.slice(1, 600)}
        />

        <h2 className="mt-24 mb-6 text-2xl font-semibold">Recent Blogs</h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 w-full mb-14">
          {posts.slice(2, 11).map((post) => (
            <Link
              key={post.id}
              href={`/blogs/${post.id}`}
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
          <a href="/blogs">See All Blogs</a>
        </button>
        <div className="h-10"></div>
      </main>
    </>
  );
}
