import { notFound } from "next/navigation";
import { type Metadata } from "next";
import Image from "next/image";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface BlogDetailsProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: BlogDetailsProps): Promise<Metadata> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  if (!res.ok) return {};

  const post: Post = await res.json();

  return {
    title: post.title,
    description: post.body.slice(0, 160),
    openGraph: {
      title: post.title,
      description: post.body.slice(0, 160),
      images: [`https://picsum.photos/seed/${params.id}/800/600`],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.body.slice(0, 160),
      images: [`https://picsum.photos/seed/${params.id}/800/600`],
    },
  };
}

export default async function BlogDetails({ params }: BlogDetailsProps) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  if (!res.ok) return notFound();

  const post: Post = await res.json();

  return (
    <main className="container py-10">
      <Image
        src={`https://picsum.photos/seed/${params.id}/800/400`}
        alt={post.title}
        width={800}
        height={400}
        className="rounded-lg mb-8 -mt-4 w-full"
      />
      <h1 className="text-3xl font-semibold mb-4">{post.title}</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300">{post.body}</p>
    </main>
  );
}
