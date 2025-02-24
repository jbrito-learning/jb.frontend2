import type { Metadata } from "next";
import "./globals.scss";
import Layout from "@/components/layout/Layout";

export const metadata: Metadata = {
  title: "Next Project",
  description: "Project for frontend classes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
