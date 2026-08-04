import { useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Summary from "../components/Summary";
import SchemeCard from "../components/SchemeCard";


export default function Home() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const [summary, setSummary] = useState("");
  const [schemes, setSchemes] = useState([]);

  async function handleSearch() {
    if (!query.trim()) return;

    setLoading(true);

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/ask-ai",
        {
          query,
        }
      );

      setSummary(res.data.summary);
      setSchemes(res.data.schemes);

    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50 to-white">

      <Navbar />

      <Hero
        query={query}
        setQuery={setQuery}
        handleSearch={handleSearch}
        loading={loading}
      />

      <Summary count={schemes.length} />
      {schemes.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {schemes.map((scheme) => (
            <SchemeCard
                key={scheme.id}
                scheme={scheme}
            />
            ))}
        </div>
        )}

    </div>
  );
}