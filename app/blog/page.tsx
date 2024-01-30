
import { PostSearch } from "@/components/PostSearch";
import { Posts } from "@/components/Posts";

import { Metadata } from "next";


// async function getData() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//     next: {
//       revalidate: 60
//     }
//   });
//   return response.json();
// }

export const metadata: Metadata = {
  title: "Blog | Next App",
};

export default function Blog() {
 
  return (
    <>
      <h1>Blog page</h1>
        <PostSearch />
        <Posts />   
    </>
  )
}
