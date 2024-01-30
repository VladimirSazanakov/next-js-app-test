'use client';

import { PostSearch } from "@/components/PostSearch";
import { Posts } from "@/components/Posts";
import { getAllPosts } from "@/public/getPosts";
import { useEffect, useState } from "react";

// async function getData() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//     next: {
//       revalidate: 60
//     }
//   });
//   return response.json();
// }

// export const metadata: Metadata = {
//   title: "Blog | Next App",
// };

export default function Blog() {
  //const posts = await getData();
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    getAllPosts()
      .then(setPosts)
      .finally(()=>setIsLoading(false));

  },[]);
  return (
    <>
      <h1>Blog page</h1>
        <PostSearch onSearch={setPosts} />
      {(isLoading)
        ?(<h3>Loading...</h3>)
        :(<Posts posts={posts}/>
        )}    
    </>
  )
}
