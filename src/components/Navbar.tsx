const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#skills', label: 'Skills' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#contato', label: 'Contato' },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-[6vw] py-5 bg-[#FAF7FF]/75 backdrop-blur-md border-b-2 border-ink">
      <div className="font-heading font-black text-2xl tracking-tight text-primary">{'</>'}</div>
      <div className="flex gap-7 font-semibold text-[15px]">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="text-ink no-underline hover:text-primary transition-colors">
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
