'use client'

import useSWR from "swr";
import Link from "next/link";
import { getAllPosts } from "@/public/getPosts";
// import {shallow} from 'zustand/shallow';
// import { usePost } from "@/store";
// import { useEffect, useState } from "react";


type TPost = {
  id: number;
  userId: number;
  title: string;
  body: string;
}

type TProps = {
  posts: Array<TPost>
}

const Posts = () =>{
 const {data: posts, isLoading} = useSWR('posts', getAllPosts)
  // const [posts, isLoading, getAllPosts] = usePost(state =>[
  //   state.posts, 
  //   state.isLoading, 
  //   state.getAllPosts],
  //   shallow
  //   );

  //   useEffect(()=>{
  //     getAllPosts();
  //     console.log('getAllPosts')
  //   },[])

    return (
    isLoading?
    (<h3>Loading...</h3>):
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