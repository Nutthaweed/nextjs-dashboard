import '../app/ui/global.css';
import { Textlang }  from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${Textlang.inter.className} antialiased`}>{children}</body>
    </html>
  );
}
