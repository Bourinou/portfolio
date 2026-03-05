import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio d'apprentissage",
    description: "Bilan des apprentissages en BUT2 Informatique — Compétences, projets et traces.",
};

export default function PortfolioLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
