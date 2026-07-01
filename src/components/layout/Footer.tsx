export function Footer() {
  return (
    <footer className="mt-8 pb-12 relative">
      <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-[11px] text-slate-400 font-sans tracking-wide">
          © {new Date().getFullYear()} Judy Lee. All rights reserved.
        </div>
      </div>
    </footer>
  );
}