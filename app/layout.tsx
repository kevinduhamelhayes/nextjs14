import { josefine_sans } from "./ui/fonts";
import './ui/global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${josefine_sans.className} antialiased`}>{children}</body>
    </html>
  );
}
