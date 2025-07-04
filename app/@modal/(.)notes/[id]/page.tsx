import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import NotePreviewPage from "./NotePreview.client";

type Props = {
  params: { id: string };
};

const NotePreview = async ({ params }: Props) => {
  const id = params.id;
  const parseId = Number(id);
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["note", parseId],
    queryFn: () => fetchNotes(parseId),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotePreviewPage />
    </HydrationBoundary>
  );
};

export default NotePreview;
