import Link from "next/link";
import { db } from "../server/db";
import { jioPosts } from "../server/db/schema";
import { eq } from "drizzle-orm";

export default async function HomePage() {
  const post = await db.select().from(jioPosts).where(eq(jioPosts.id,483))
  console.log(post)
  return (
    <main className="min-h-screen bg-white">
      <div key={post?.[0]?.id} dangerouslySetInnerHTML={{__html:post?.[0]?.postContent ?? <></>}}>
      </div>  
      
    </main>
  );
}
