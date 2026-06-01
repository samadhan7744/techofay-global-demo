import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Techofay Global | AI, Engineering & Digital Innovation",
  description:
    "Premium enterprise technology and engineering company delivering AI automation, LIMS, ERP/CRM, software development, QA, inspection and digital transformation.",
  keywords: [
    "AI automation",
    "engineering consulting",
    "LIMS development",
    "ERP CRM",
    "digital transformation",
    "inspection services",
    "quality assurance"
  ],
  openGraph: {
    title: "Techofay Global",
    description: "Transforming industries through AI, engineering and digital innovation.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
