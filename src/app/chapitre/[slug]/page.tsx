import { client } from "@/sanity/lib/sanity";
export const dynamic = "force-dynamic";

interface ChapitreParams {
  params: { slug: string };
}

async function getChapitre(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    body
  }`;
  return await client.fetch(query, { slug });
}

async function getAllChapitres() {
  const query = `*[_type == "post"] | order(_createdAt asc){
    title,
    slug
  }`;
  return await client.fetch(query);
}

export default async function ChapitrePage({ params }: ChapitreParams) {
  const chapitre = await getChapitre(params.slug);
  if (!chapitre) return <p>Chapitre introuvable ❌</p>;

  const chapitres = await getAllChapitres();
  const filteredChapitres = chapitres.filter(c => c.slug?.current);

  const index = filteredChapitres.findIndex(c => c.slug.current === params.slug);
  const prevChapitre = index > 0 ? filteredChapitres[index - 1] : null;
  const nextChapitre = index < filteredChapitres.length - 1 ? filteredChapitres[index + 1] : null;

  return (
    <main className="chapitre-page">
      <h1 className="chapitre-title">{chapitre.title}</h1>

      <article className="chapitre-body">
        {chapitre.body?.map((block: any, i: number) => (
          <p key={i}>{block.children?.map((span: any) => span.text).join(" ")}</p>
        ))}
      </article>

      <nav className="chapitre-nav">
        {prevChapitre ? (
          <a href={`/chapitre/${prevChapitre.slug.current}`} className="nav-link prev">
            ← {prevChapitre.title}
          </a>
        ) : <div />}

        {nextChapitre ? (
          <a href={`/chapitre/${nextChapitre.slug.current}`} className="nav-link next">
            {nextChapitre.title} →
          </a>
        ) : <div />}
      </nav>
    </main>
  );
}
