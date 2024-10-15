export default function ShortsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="px-10 py-3">{children}</div>;
}
