import React from 'react';

function Footer() {
  const year = new Date().getFullYear();
  const name = "Akhilesh Chandewar";

  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top ">
      <p>© {year} {name} @MatrIoT</p>
    </footer>
  );
}

export default Footer;