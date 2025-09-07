import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">Accueil</Link>
      <Link href="/chapitres">Chapitres</Link>
      <Link href="/a-propos">À propos</Link>
      <Link href="/lore">Lore</Link>
    </nav>
  );
};

export default Navbar;
