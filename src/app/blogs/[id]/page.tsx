
import { notFound } from "next/navigation";
import Image from "next/image";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PageProps {
  params: {
    id: string;
  };
}

export default async function BlogDetails({ params }: PageProps) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  if (!res.ok) return notFound();

  const post: Post = await res.json();

  return (
    <main className="container">
      <Image
        src={`https://picsum.photos/seed/${params.id}/800/600`}
        alt="Blog Image"
        width={800}
        height={600}
        className="w-full h-80 object-cover rounded-lg "
      />
      <div className="flex flex-col gap-4 mt-4">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-700 dark:text-gray-300">{post.body}</p>
      </div>
    </main>
  );
}
