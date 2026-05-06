export default function InfoCard({
  title,
  description,
}) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md dark:bg-zinc-900">
      <h2 className="mb-2 text-2xl font-bold text-zinc-800 dark:text-white">
        {title}
      </h2>

      <p className="text-zinc-600 dark:text-zinc-300">
        {description}
      </p>

      <button className="mt-4 rounded-lg bg-black px-4 py-2 text-white transition hover:opacity-80 dark:bg-white dark:text-black">
        Tovább
      </button>
    </div>
  );
}