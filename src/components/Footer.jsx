import { Link } from "react-router-dom";
import { HeartHandshake } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 px-5 py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <HeartHandshake className="text-amber-400" />
            <h2 className="text-xl font-black uppercase">Golden Cares LLC</h2>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/60">
            Supportive community-based care services focused on dignity,
            safety, comfort, transportation, and daily life assistance.
          </p>
        </div>

        <div>
          <h3 className="font-black uppercase text-amber-400">Pages</h3>
          <div className="mt-4 grid gap-2 text-sm text-white/60">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>

        <div>
          <h3 className="font-black uppercase text-amber-400">Contact</h3>
          <p className="mt-4 text-sm text-white/60">216-559-8570</p>
          <p className="mt-2 text-sm text-white/60">Email address goes here</p>
          <p className="mt-2 text-sm text-white/60">Service area goes here</p>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-white/40">
        © 2026 Golden Cares LLC. All Rights Reserved.
      </div>
    </footer>
  );
}