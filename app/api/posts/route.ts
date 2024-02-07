import {NextResponse} from 'next/server';
import {posts} from './posts';

export async function GET(req: Request) {
  const {searchParams} = new URL(req.url);

  const query = searchParams.get('q');
  let currentPosts = posts;

  if (query) {
    currentPosts = posts.filter(post => post.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
  }

  return NextResponse.json(currentPosts);
  // return NextResponse.json({message:'hello'});
}

export async function POST(req: Request){
  const body = await req.json();

  return NextResponse.json({body});
}