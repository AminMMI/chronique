import { client } from "@/sanity/lib/sanity";
import Link from "next/link";

export const dynamic = "force-dynamic";

interface PageProps {
  params: {
    slug: string;
  };
}

async function getChapitre(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    body
  }`;
  return client.fetch(query, { slug });
}

async function getAllChapitres() {
  const query = `*[_type == "post"] | order(_createdAt asc){
    title,
    slug
  }`;
  return client.fetch(query);
}

export default async function ChapitrePage({ params }: PageProps) {
  const chapitre = await getChapitre(params.slug);
  if (!chapitre) return <p>Chapitre introuvable ❌</p>;

  const chapitres = await getAllChapitres();
  const filteredChapitres = chapitres.filter(c => c.slug?.current);

  const index = filteredChapitres.findIndex(c => c.slug.current === params.slug);
  const prevChapitre = index > 0 ? filteredChapitres[index - 1] : null;
  const nextChapitre = index < filteredChapitres.length - 1 ? filteredChapitres[index + 1] : null;

  return (
    <div class="chapitre-page">
      <h1>{chapitre.title}</h1>
      <div class="chapitre-body">
        {chapitre.body && JSON.stringify(chapitre.body)}
      </div>

      <div class="chapitre-navigation">
        {prevChapitre && (
          <Link href={`/chapitre/${prevChapitre.slug.current}`}>
            ← {prevChapitre.title}
          </Link>
        )}
        {nextChapitre && (
          <Link href={`/chapitre/${nextChapitre.slug.current}`}>
            {nextChapitre.title} →
          </Link>
        )}
      </div>
    </div>
  );
}
