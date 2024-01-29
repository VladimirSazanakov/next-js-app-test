import { Metadata } from "next";

type TProps = {
  params: {
    id: string;
  }
}

async function getData(id: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60
    }
  });

  if (!response.ok) { throw new Error("Unable to fetch posts") };
  return response.json();
}

export async function generateMetadata({ params: { id }
}: TProps): Promise<Metadata> {
  const post = await getData(id);
  return {
    title: post.title,
  }
}

export default async function Post({ params: { id } }: TProps) {
  const post = await getData(id);
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>

    </>
  )
}
