import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.jpeg";
const links = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Services", "/services"],
  ["Careers", "/careers"],
  ["FAQ", "/faq"],
  ["Contact Us", "/contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="!sticky !top-0 !z-50 !border-b !border-[#d4af37]/20 !bg-[#111111] !backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3"
        >
         <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-lg shadow-black/20">
 <img
  src={logo}
  alt="Golden Cares Logo"
  className="h-full w-full object-cover"
/>
</div>

          <div>
            <h1 className="text-lg font-black uppercase leading-none !text-white">
              Golden Cares LLC
            </h1>

            <p className="mt-1 text-xs font-bold uppercase tracking-widest !text-[#d4af37]">
              Compassionate care services
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(([name, path]) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `text-sm font-bold transition ${
                  isActive
                    ? "!text-[#d4af37]"
                    : "!text-gray-300 hover:!text-[#f4d46b]"
                }`
              }
            >
              {name}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden rounded-full !bg-[#d4af37] px-5 py-3 text-sm font-black !text-[#111111] shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:!bg-[#f4d46b] lg:block"
        >
          Request Care
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="grid h-11 w-11 place-items-center rounded-xl !border !border-[#d4af37]/20 !bg-[#1b1b1b] !text-[#f4d46b] lg:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="!border-t !border-[#d4af37]/10 !bg-[#171717] px-5 py-4 lg:hidden">
          <div className="grid gap-2">
            {links.map(([name, path]) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-4 font-black transition ${
                    isActive
                      ? "!bg-[#d4af37] !text-[#111111]"
                      : "!bg-[#222222] !text-gray-200 hover:!bg-[#2b2b2b]"
                  }`
                }
              >
                {name}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}