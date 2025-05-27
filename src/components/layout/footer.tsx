export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-muted/50 py-6 mt-auto">
      <div className="container mx-auto px-4 md:px-6 text-center text-muted-foreground text-sm">
        <p>&copy; {currentYear} BTGenZ. All rights reserved.</p>
        <p>Empowering the next generation of biotech leaders in India.</p>
      </div>
    </footer>
  );
}
