"use client";

import { useState } from "react";
import Link from "next/link";
import { HiX } from "react-icons/hi";
import { IoMdMenu } from "react-icons/io";

export default function MobileNavMenu({
  categories,
}: {
  categories: { id: number; title: string; slug: string }[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative md:hidden">
      {/* Hamburger Menu Button */}
      <button
        onClick={toggleMenu}
        className="p-1.5 mr-2 text-white bg-primary/70 rounded-md focus:outline-none"
      >
        {isOpen ? <HiX size={24} /> : <IoMdMenu size={24} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-primary text-white transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-start p-6 space-y-4">
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="self-end p-2 text-white focus:outline-none"
          >
            <HiX size={24} />
          </button>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-6 text-lg">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/category/${category.slug}`}
                onClick={toggleMenu}
                className="hover:text-defaultTextColor transition duration-300"
              >
                {category.title}
              </Link>
            ))}
            <Link
              href="/category/নিখোঁজ-বার্তা"
              onClick={toggleMenu}
              className="hover:text-defaultTextColor transition duration-300"
            >
              নিখোঁজ বার্তা
            </Link>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleMenu}
        />
      )}
    </div>
  );
}
