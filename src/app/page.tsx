import { client } from "@/sanity/lib/sanity";
import Link from "next/link";

async function getChapitres() {
  const query = `*[_type == "post"] | order(_createdAt asc){
    title,
    slug
  }`;
  return await client.fetch(query);
}

export default async function Home() {
  const chapitres = await getChapitres();

  return (
    <main className="home">
  {/* HERO */}
  <h1 className="home-title">
    Chronique d'un sans éclat
  </h1>



  {/* SYNOPSIS */}
  <section className="synopsis">
    <p>
      Plongé dans un monde ravagé par une guerre de pouvoir, certains hommes et femmes se réunissent autour de la table ronde dans un seul but : devenir seigneurs et rétablir l'ordre et la justice sur ces terres désolées. On les appelle sans éclat, des êtres autrefois morts et ressuscités par la grâce de l'arbre monde. Parias de la société, ils viennent de n'importe où dans le monde, ils ont chacun des objectifs personnels mais tous convergent vers un but commun. Ortros fait partie de cet ordre, mais fraîchement réveillé par l'arbre monde, ses souvenirs lui manquent. Arrivera-t-il à survivre dans ce monde sauvage ? Cette deuxième vie lui sera-t-elle profitable ou sombrera-t-il dans l'oubli.
    </p>
    <div className="tags">
      <span className="tag">Fantasy</span>
      <span className="tag">Aventure</span>
      <span className="tag">Sombre</span>
    </div>
  </section>

    {/* DERNIERS CHAPITRES */}
  <section className="last-chapters">
    <h2 className="section-title">Derniers chapitres</h2>
    <ul className="chapters-list">
      {chapitres.map((c: any) =>
        c.slug?.current ? (
          <li key={c.slug.current} className="chapter-item">
            <Link href={`/chapitre/${c.slug.current}`} className="chapter-link">
              <h3 className="chapter-title">{c.title}</h3>
            </Link>
          </li>
        ) : null
      )}
    </ul>
  </section>
</main>

  );
}
