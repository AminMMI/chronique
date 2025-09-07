"use client";

import Link from "next/link";
import styled from 'styled-components';
import React from "react";

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  padding: 1rem 2rem;
  background-color: ${props => props.theme.colors.primary};
  color: white;
`;

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
