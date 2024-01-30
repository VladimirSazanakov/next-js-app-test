import { getAllPosts, getPostsBySearch } from "@/public/getPosts";
import {create} from "zustand";

type TUsePosts = {
  posts: any[];
  isLoading: boolean;
  getAllPosts: ()=>Promise<void>;
  getPostsBySearch: (value: string)=>Promise<void>;
}

export const usePost = create<TUsePosts>()((set)=>({
  posts:[],
  isLoading: false,
  getAllPosts: async ()=>{
    set({isLoading:true})
    const posts = await getAllPosts();
    set({posts, isLoading: false})
  },
  getPostsBySearch: async (search)=>{
    set({isLoading: true});
    const posts = await getPostsBySearch(search);
    set({posts, isLoading: false})
  }
}))