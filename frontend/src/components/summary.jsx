export default function Summary({ count }) {
  if (count === 0) return null;

  return (
    <section className="max-w-5xl mx-auto px-6 mt-16">

      <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white shadow-2xl p-10 text-center">

        <div className="text-5xl mb-3">
          🎉
        </div>

        <h2 className="text-4xl font-bold">
          Great News!
        </h2>

        <p className="mt-3 text-blue-100 text-lg">
          Based on your profile
        </p>

        <h1 className="mt-4 text-6xl font-extrabold">
          {count}
        </h1>

        <p className="mt-3 text-2xl font-semibold">
          Government Schemes Found
        </p>

      </div>

    </section>
  );
}