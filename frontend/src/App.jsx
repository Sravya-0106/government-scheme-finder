// import { useState } from "react";
// import axios from "axios";

// export default function App() {

//   const [query, setQuery] = useState("");

//   const [loading, setLoading] = useState(false);

//   const [summary, setSummary] = useState("");

//   const [schemes, setSchemes] = useState([]);

//   async function handleSearch() {

//     if (!query.trim()) return;

//     setLoading(true);

//     try {

//       const res = await axios.post(
//         "http://127.0.0.1:8000/ask-ai",
//         {
//           query
//         }
//       );

//       setSummary(res.data.summary);

//       setSchemes(res.data.schemes);

//     }

//     catch(err){

//       console.log(err);

//     }

//     setLoading(false);

//   }

//   return (

// <div className="min-h-screen bg-slate-100">

// <div className="max-w-6xl mx-auto py-10 px-5">

// <h1 className="text-5xl font-bold text-center">

// 🏛 Government Scheme Finder

// </h1>

// <p className="text-center mt-3 text-gray-500">

// Find Government Schemes using AI

// </p>

// <textarea

// rows={5}

// value={query}

// onChange={(e)=>setQuery(e.target.value)}

// placeholder="I am a 20 year old engineering student from Telangana..."

// className="mt-8 w-full rounded-xl border p-5"

// ></textarea>

// <button

// onClick={handleSearch}

// className="mt-5 bg-blue-600 text-white px-8 py-3 rounded-xl"

// >

// Find My Schemes

// </button>

// {loading && (

// <h2 className="mt-10 text-xl">

// 🤖 AI is searching...

// </h2>

// )}

// {summary && (

// <h2 className="mt-10 text-3xl font-bold">

// {summary}

// </h2>

// )}

// <div className="grid md:grid-cols-2 gap-6 mt-8">

// {

// schemes.map((scheme)=>(

// <div

// key={scheme.id}

// className="bg-white rounded-2xl shadow-lg p-6"

// >

// <h2 className="text-2xl font-bold">

// 🎓 {scheme.name}

// </h2>

// <p className="mt-3 text-gray-600">

// {scheme.description}

// </p>

// <h3 className="mt-5 font-bold">

// 🎁 Benefits

// </h3>

// <ul className="list-disc ml-5">

// {

// scheme.benefits.map((b,i)=>(

// <li key={i}>{b}</li>

// ))

// }

// </ul>

// <h3 className="mt-5 font-bold">

// 📄 Documents

// </h3>

// <ul className="list-disc ml-5">

// {

// scheme.documents.map((d,i)=>(

// <li key={i}>{d}</li>

// ))

// }

// </ul>

// <a

// href={scheme.official_link}

// target="_blank"

// className="inline-block mt-6 bg-green-600 text-white px-5 py-2 rounded-lg"

// >

// Apply Now

// </a>

// </div>

// ))

// }

// </div>

// </div>

// </div>

// );

// }











import Home from "./pages/Home";

export default function App() {
  return <Home />;
}