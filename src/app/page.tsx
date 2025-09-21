import { client } from "@/sanity/lib/sanity";
import Link from "next/link";

interface Chapitre {
  title: string;
  body: any;
}

async function getChapitre(slug: string): Promise<Chapitre | null> {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    body
  }`;
  return client.fetch(query, { slug });
}

export default async function Page({ params }: { params: { slug: string } }) {
  const chapitre = await getChapitre(params.slug);

  if (!chapitre) {
    return <p>Chapitre introuvable ❌</p>;
  }  
  
  return (
    <main class="home">
  
    {/* HERO */}
  <h1 class="home-title">
    Chronique d'un sans éclat
  </h1>



  {/* SYNOPSIS */}
  <section class="synopsis">
    <p>
      Plongé dans un monde ravagé par une guerre de pouvoir, certains hommes et femmes se réunissent autour de la table ronde dans un seul but : devenir seigneurs et rétablir l'ordre et la justice sur ces terres désolées. On les appelle sans éclat, des êtres autrefois morts et ressuscités par la grâce de l'arbre monde. Parias de la société, ils viennent de n'importe où dans le monde, ils ont chacun des objectifs personnels mais tous convergent vers un but commun. Ortros fait partie de cet ordre, mais fraîchement réveillé par l'arbre monde, ses souvenirs lui manquent. Arrivera-t-il à survivre dans ce monde sauvage ? Cette deuxième vie lui sera-t-elle profitable ou sombrera-t-il dans l'oubli.
    </p>
    <div class="tags">
      <span class="tag">Fantasy</span>
      <span class="tag">Aventure</span>
      <span class="tag">Sombre</span>
    </div>
  </section>

    {/* DERNIERS CHAPITRES */}
  <section class="last-chapters">
    <h2 class="section-title">Derniers chapitres</h2>
    <ul class="chapters-list">
      {chapitres.map((c: any) =>
        c.slug?.current ? (
          <li key={c.slug.current} class="chapter-item">
            <Link href={`/chapitre/${c.slug.current}`} class="chapter-link">
              <h3 class="chapter-title">{c.title}</h3>
            </Link>
          </li>
        ) : null
      )}
    </ul>
  </section>
</main>

  );
}
