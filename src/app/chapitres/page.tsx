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
    <main className="chapter-page">
      <h1 className="page-title">Tous les chapitres</h1>
      <ul className="chapters-list">
        {chapitres.map((c: any) =>
          c.slug?.current ? (
            <li key={c.slug.current} className="chapter-item">
              <Link href={`/chapitre/${c.slug.current}`} className="chapter-link">
                {c.title}
              </Link>
            </li>
          ) : null
        )}
      </ul>
    </main>
  );
}
