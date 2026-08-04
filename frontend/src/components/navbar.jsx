export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div className="flex items-center gap-3">
          <span className="text-4xl">🏛️</span>

          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Government Scheme Finder
            </h1>

            <p className="text-sm text-slate-500">
              AI Powered
            </p>
          </div>
        </div>

        <div className="hidden md:flex gap-8 text-slate-600 font-medium">
          <button className="hover:text-blue-600 transition">
            Home
          </button>

          <button className="hover:text-blue-600 transition">
            About
          </button>

          <button className="hover:text-blue-600 transition">
            Contact
          </button>
        </div>

      </div>
    </nav>
  );
}