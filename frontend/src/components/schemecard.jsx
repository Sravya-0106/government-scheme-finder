export default function SchemeCard({ scheme }) {
  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition p-6 border border-slate-200">

      <h2 className="text-2xl font-bold mb-3">
        🏛 {scheme.name}
      </h2>

      <p className="text-slate-600 mb-5">
        {scheme.description}
      </p>

      <div className="mb-5">
        <h3 className="font-bold mb-2">🎁 Benefits</h3>

        <ul className="list-disc ml-6">
          {scheme.benefits?.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>

      <div className="mb-5">
        <h3 className="font-bold mb-2">📄 Documents</h3>

        <ul className="list-disc ml-6">
          {scheme.documents?.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      </div>

      <a
        href={scheme.official_link}
        target="_blank"
        rel="noreferrer"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-semibold"
      >
        Apply Now →
      </a>

    </div>
  );
}