"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X ,Phone, Mail  } from "lucide-react";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="h-16 flex justify-between items-center px-4 sm:px-6 lg:px-15 xl:px-15">
        <h1 className="text-2xl sm:text-3xl font-bold text-amber-700">
          <Link href="/">TheDecor</Link>
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 text-gray-700 text-lg font-medium">
          <li className="hover:text-amber-700">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-amber-700">
            <Link href="/Services">Services</Link>
          </li>
          <li className="hover:text-amber-700">
            <Link href="/Portfolio">Portfolio</Link>
          </li>
          <li className="hover:text-amber-700">
            <Link href="/About-us">About</Link>
          </li>
          <li className="hover:text-amber-700">
            <Link href="/Contact-us">Contact</Link>
          </li>
        </ul>

        {/* Contact Info (Desktop Only) */}
        <ul className="hidden lg:flex gap-4 text-sm text-gray-500">
            <p><Phone className="inline mr-1" size={15}/>(555) 123-4567</p>
            <p><Mail className="inline mr-1" size={15} />hello@elegantspaces.com</p>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <ul className="flex flex-col px-4 py-3 gap-3 text-gray-700 text-base font-medium">
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li>
              <Link href="/Services" onClick={() => setMenuOpen(false)}>Services</Link>
            </li>
            <li>
              <Link href="/Portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link>
            </li>
            <li>
              <Link href="/About-us" onClick={() => setMenuOpen(false)}>About</Link>
            </li>
            <li>
              <Link href="/Contact-us" onClick={() => setMenuOpen(false)}>Contact</Link>
            </li>
          </ul>
          <div className="border-t border-gray-100 px-4 py-2 text-sm text-gray-500">
            <p><Phone />234578124</p>
            <p><Mail />hello@thedecor.com</p>
          </div>
        </div>
      )}
    </header>
  );
};