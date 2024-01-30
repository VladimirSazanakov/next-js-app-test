import Link from "next/link";

type TPost = {
  id: number;
  userId: number;
  title: string;
  body: string;
}

type TProps = {
  posts: Array<TPost>
}

const Posts = ({posts}: TProps) =>{
  return (
    <ul>
    {posts.map((post: any) => (
      <li key={post.id}>
        <Link href={`/blog/${post.id}`}>{post.title}</Link>
      </li>
    )
    )}
  </ul>
  )
}

export {Posts};