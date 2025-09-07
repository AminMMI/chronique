import { client } from "@/sanity/lib/sanity";
import Link from "next/link";

async function getChapitres() {
  const query = `*[_type == "post"] | order(_createdAt asc){
    title,
    slug
  }`;
  return await client.fetch(query);
}

export default async function ChapitresPage() {
  const chapitres = await getChapitres();

  return (
    <main class="chapter-page">
      <h1 class="page-title">Tous les chapitres</h1>
      <ul class="chapters-list">
        {chapitres.map((c: any) =>
          c.slug?.current ? (
            <li key={c.slug.current} class="chapter-item">
              <Link href={`/chapitre/${c.slug.current}`} class="chapter-link">
                {c.title}
              </Link>
            </li>
          ) : null
        )}
      </ul>
    </main>
  );
}
