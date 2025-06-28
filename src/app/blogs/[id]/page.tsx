// @ts-nocheck
import { notFound } from "next/navigation";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function BlogDetails({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) return notFound();

  const post = await res.json();
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
    </main>
  );
}
