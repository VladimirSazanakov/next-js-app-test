'use client';

import { getPostsBySearch } from "@/public/getPosts";
import { usePost } from "@/store";
import { FormEventHandler, useState } from "react";

type TProps = {
  onSearch: (value: any[])=>void
}

const PostSearch = () =>{
  const [search, setSearch] = useState('');
  const getPostsBySearch = usePost(state=>state.getPostsBySearch);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event)=>{
    event.preventDefault();
    await getPostsBySearch(search);
    console.log(search);
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