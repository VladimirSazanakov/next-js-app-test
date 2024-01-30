'use client';

import useSWR from "swr";
import { getPostsBySearch } from "@/public/getPosts";
// import { usePost } from "@/store";
import { FormEventHandler, useState } from "react";

type TProps = {
  onSearch: (value: any[])=>void
}

const PostSearch = () =>{
  const {mutate}=useSWR('posts')
  
  const [search, setSearch] = useState('');
  // const getPostsBySearch = usePost(state=>state.getPostsBySearch);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event)=>{
    event.preventDefault();
    const posts = await getPostsBySearch(search);
    mutate(posts);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="search" 
        placeholder="search" 
        value={search} 
        onChange={(event)=>setSearch(event.target.value)} 
      />
      <button type="submit">Search</button>
    </form>
  )
}

export {PostSearch};