import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";
import { Metadata } from "next";

type FilteredNotesPageProps = {
  params: { slug: string[] };
};

export const generateMetadata = async ({
  params,
}: FilteredNotesPageProps): Promise<Metadata> => {
  const tag = params.slug[0] === "All" ? undefined : params.slug[0];

  return {
    title: tag ? `Notes tagged "${tag}"` : "All notes",
    description: tag
      ? `A collection of notes tagget with "${tag}"`
      : "A collection of all notes",
    openGraph: {
      title: "openGraf",
      description: "some description",
      url: "https://notehub.com/notes/",
      images: [
        {
          url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
          width: 1200,
          height: 630,
          alt: tag ? `Notes tagget "${tag}"` : "All notes",
        },
      ],
    },
  };
};

export default async function FilteredNotesPage({
  params,
}: FilteredNotesPageProps) {
  const tag = params.slug[0] === "All" ? undefined : params.slug[0];

  const data = await fetchNotes(1, "", 12, tag);

  return <NotesClient initialData={data} tag={tag} />;
}
