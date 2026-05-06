import Alert from "./alert";
import InfoCard from "./infocard";
import GalleryCard from "./gallerycard";
import ProjectCard from "./projectcard";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-100 p-8 dark:bg-black">
      <main className="mx-auto flex max-w-4xl flex-col gap-6">

        <Alert
          variant="success"
          title="Siker"
          message="Az adatok sikeresen elmentve."
        />

        <InfoCard
          title="Portfolio oldal"
          description="Ez egy egyszerű Next.js + Tailwind komponens példa."
        />

        <GalleryCard
          image="https://picsum.photos/800/400"
          title="Modern webdesign"
          description="Egy reszponzív galéria komponens képpel és leírással."
        />

        <ProjectCard
          coverImage="https://picsum.photos/800/500"
          title="CAD Tervezés"
          shortDescription="3D gépészeti modell tervezés és dokumentáció."
          subject="Géptervezés"
          projectDescription="
          Ez a projekt egy komplex gépegység modellezéséről szólt.
          A modellek SolidWorks-ben készültek, majd műszaki rajzok és renderképek is készültek hozzá.
          "
          projectImages={[
            "https://picsum.photos/600/400?1",
            "https://picsum.photos/600/400?2",
            "https://picsum.photos/600/400?3",
            "https://picsum.photos/600/400?4",
          ]}
        />

      </main>
    </div>
  );
}