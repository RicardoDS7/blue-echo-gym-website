import "./styles/globals.css";

// Ensure the Metadata type expects strictly string or undefined
export type Metadata = {
  title: string;  // Enforce title to always be a string
  description?: string;  // Optional
};
export const metadata: Metadata = {
  title: "Blue Echo Fitness",
  description: "Blue Echo Fitness is a reseller of premium gym equipment and accessories to level up your gym.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Ensure title is a string or provide fallback */}
        <title>{metadata.title || "Default Title"}</title>
        <meta name="description" content={metadata.description || "Default description"} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
