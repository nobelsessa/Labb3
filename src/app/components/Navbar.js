// components/Navbar.js

import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link href="/">Hem</Link></li>
        <li><Link href="/om">Om oss</Link></li>
        <li><Link href="/kontakt">Kontakt</Link></li>
        <li><Link href="/page1">Sida 1</Link></li> {/* Länk till http://localhost:3000/page1 */}
        <li><Link href="/page2">Sida 2</Link></li> {/* Länk till http://localhost:3000/page2 */}
        <li><Link href="/page3">Sida 3</Link></li> {/* Länk till http://localhost:3000/page3 */}
      </ul>
    </nav>
  );
}

export default Navbar;
