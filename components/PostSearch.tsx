'use client';

import { getPostsBySearch } from "@/public/getPosts";
import { FormEventHandler, useState } from "react";

type TProps = {
  onSearch: (value: any[])=>void
}

const PostSearch = ({onSearch}: TProps) =>{
  const [search, setSearch] = useState('');

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event)=>{
    event.preventDefault();
    const posts = await getPostsBySearch(search);
    onSearch(posts);
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