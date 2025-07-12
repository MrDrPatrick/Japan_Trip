import React from "react";

function Footer() {
  const theDate = new Date();

  return (
    <footer>
      <p style={{ textAlign: "center" }}>©{theDate.getFullYear()} Daniel Hanna</p>
    </footer>
  );
}

export default Footer;
