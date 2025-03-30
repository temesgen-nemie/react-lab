import "./Footer.css";
import React from "react";

export default function Footer() {
  return (
    <footer>
      <p>&copy;{new Date().getFullYear()} my website </p>
    </footer>
  );
}
