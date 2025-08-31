import type { Metadata } from "next";
// import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Routing demo next app", template: "%s | Tempalte title" },
  description: "Example of routing demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="vsc-initialized">
        <header
          style={{
            padding: "1rem",
            backgroundColor: "lightblue",
            textAlign: "center",
          }}
        >
          Header
        </header>
        {children}
        <footer
          style={{
            padding: "1rem",
            backgroundColor: "lightcyan",
            textAlign: "center",
          }}
        >
          Footer
        </footer>
      </body>
    </html>
  );
}
