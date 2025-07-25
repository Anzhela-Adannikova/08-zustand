import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import { Roboto } from "next/font/google";

const robotoFont = Roboto({
  weight: ["400", "700"],
  variable: "--custom-font",
  display: "swap",
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "NoteHub",
  description: "Manage your notes quickly and easily",
  openGraph: {
    title: "NoteHub",
    description: "Manage your notes quickly and easily",
    url: "https://notehub.com/notes/",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "NoteHub Open Graph Image",
      },
    ],
  },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robotoFont.variable}>
        <TanStackProvider>
          <Header />
          {children}
          {modal}
          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}
