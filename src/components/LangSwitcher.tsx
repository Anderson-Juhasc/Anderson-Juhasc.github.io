"use client";

import Link from "next/link";
import { useState } from "react";

export default function LangSwitcher() {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => setOpen(!open);

  return (
    <div className="lang-dropdown">
      <a
        onClick={toggleDropdown}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="lang-btn"
      >
        <img src="/globe.svg" alt="Language" />
        <span className="arrow">{open ? "▲" : "▼"}</span>
      </a>
      {open && (
        <ul className="lang-options" role="listbox" tabIndex={-1}>
          <li role="option">
            <Link href="/en" lang="en" onClick={() => setOpen(false)}>
              English
            </Link>
          </li>
          <li role="option">
            <Link href="/pt" lang="pt" onClick={() => setOpen(false)}>
              Português
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}
