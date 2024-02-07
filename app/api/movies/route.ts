import { NextRequest, NextResponse } from "next/server";


export async function GET(req: Request){
  const API_KEY = process.env.OMDB_SECRET;
  const {searchParams} = new URL(req.url);
  const query = searchParams.get('q');

  const movies = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`)
  .then (res=>res.json());

  return NextResponse.json(movies);
};
