export default function Hero({
  query,
  setQuery,
  handleSearch,
  loading,
}) {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-16 pb-10">

    <div className="text-center">

        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
        🤖 AI Powered Government Assistant
        </div>

        <h1 className="mt-6 text-6xl font-black text-slate-900 leading-tight">
        Find Government Schemes
        <br />
        <span className="text-blue-600">in Seconds</span>
        </h1>

        <p className="mt-6 text-xl text-slate-500 max-w-3xl mx-auto">
        Describe yourself naturally and instantly discover the government
        schemes you are eligible for.
        </p>

    </div>

    <div className="mt-12 bg-white rounded-3xl shadow-2xl border border-slate-200 p-8">

        <textarea
        rows={4}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Example: I am a 20-year-old engineering student from Telangana. My annual family income is ₹2 lakh."
        className="w-full resize-none outline-none text-lg placeholder:text-slate-400"
        />

        <button
        onClick={handleSearch}
        className="mt-6 w-full rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 py-4 text-lg font-semibold text-white shadow-lg hover:scale-[1.02] hover:shadow-xl transition"
        >
        {loading ? "🤖 Finding Schemes..." : "🔍 Find My Schemes"}
        </button>

    </div>

    </section>
  );
}