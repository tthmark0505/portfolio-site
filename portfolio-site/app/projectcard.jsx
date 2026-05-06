"use client";

import { useState } from "react";

export default function ProjectCard({
  coverImage,
  title,
  shortDescription,
  subject,
  projectDescription,
  projectImages,
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="overflow-hidden rounded-2xl bg-white shadow-lg dark:bg-zinc-900">
        <img
          src={coverImage}
          alt={title}
          className="h-56 w-full object-cover"
        />

        <div className="p-6">
          <div className="mb-2 flex items-center gap-2">
            <span className="text-2xl">📁</span>
            <h2 className="text-2xl font-bold text-zinc-800 dark:text-white">
              {title}
            </h2>
          </div>

          <p className="text-zinc-600 dark:text-zinc-300">
            {shortDescription}
          </p>

          <button
            onClick={() => setOpen(true)}
            className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
          >
            Megnyitás
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/70">
          <div className="h-full w-full animate-[modalOpen_0.25s_ease-out] overflow-y-auto bg-white p-6 dark:bg-zinc-950 sm:p-10">
            
            <div className="mx-auto max-w-6xl">
              <div className="flex items-start justify-between gap-6 border-b pb-6 dark:border-zinc-800">
                <div>
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-4xl">🚀</span>
                    <h1 className="text-4xl font-bold text-zinc-800 dark:text-white">
                      {title}
                    </h1>
                  </div>

                  <p className="text-sm text-zinc-500">
                    Tantárgy: {subject}
                  </p>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-zinc-200 px-4 py-2 text-xl text-zinc-800 transition hover:bg-zinc-300 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
                >
                  ×
                </button>
              </div>

              <p className="mt-8 text-lg leading-8 text-zinc-700 dark:text-zinc-300">
                {projectDescription}
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projectImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Projekt kép ${index + 1}`}
                    className="h-64 w-full rounded-2xl object-cover shadow-md"
                  />
                ))}
              </div>
            </div>
          </div>

          <style jsx>{`
            @keyframes modalOpen {
              from {
                opacity: 0;
                transform: scale(0.97) translateY(20px);
              }
              to {
                opacity: 1;
                transform: scale(1) translateY(0);
              }
            }
          `}</style>
        </div>
      )}
    </>
  );
}