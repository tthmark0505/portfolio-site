export default function GalleryCard({
  image,
  title,
  description,
}) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-lg dark:bg-zinc-900">
      
      <img
        src={image}
        alt={title}
        className="h-56 w-full object-cover"
      />

      <div className="p-6">
        <h2 className="mb-2 text-2xl font-bold text-zinc-800 dark:text-white">
          {title}
        </h2>

        <p className="text-zinc-600 dark:text-zinc-300">
          {description}
        </p>

        <button className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700">
          Megnyitás
        </button>
      </div>
    </div>
  );
}