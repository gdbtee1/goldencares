import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, HeartHandshake } from "lucide-react";

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
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
        <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-amber-500 text-white">
            <HeartHandshake size={28} />
          </div>
          <div>
            <h1 className="text-lg font-black uppercase leading-none text-slate-900">
              Golden Cares LLC
            </h1>
            <p className="mt-1 text-xs font-bold uppercase tracking-widest text-emerald-700">
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
                  isActive ? "text-emerald-700" : "text-slate-600 hover:text-emerald-700"
                }`
              }
            >
              {name}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden rounded-full bg-emerald-700 px-5 py-3 text-sm font-black text-white transition hover:bg-emerald-800 lg:block"
        >
          Request Care
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 lg:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-slate-200 bg-white px-5 py-4 lg:hidden">
          <div className="grid gap-2">
            {links.map(([name, path]) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-4 font-bold ${
                    isActive ? "bg-emerald-700 text-white" : "bg-slate-50 text-slate-700"
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