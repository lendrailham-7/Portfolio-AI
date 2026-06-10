export default function Footer() {
  return (
    <footer
      className="border-t py-8 text-center opacity-70"
      style={{
        borderColor: "var(--border)",
      }}
    >
      © {new Date().getFullYear()} Lendra Ilham.
      Built with Next.js.
    </footer>
  );
}