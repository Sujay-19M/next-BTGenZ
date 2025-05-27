
import Link from 'next/link';
import { Dna } from 'lucide-react';
import { SOCIAL_LINKS, FOOTER_ABOUT_TEXT, FOOTER_QUICK_LINKS, FOOTER_CONTACT_EMAIL, type SocialLink, type NavLinkItem } from '@/lib/constants';
import { Button } from '@/components/ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About BTGenZ */}
          <div className="space-y-4 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary">
              <Dna className="h-8 w-8" />
              <span>BTGenZ</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              {FOOTER_ABOUT_TEXT}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {FOOTER_QUICK_LINKS.map((link: NavLinkItem) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact + Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact & Follow</h3>
            <div>
              <p className="text-sm text-muted-foreground">Email us:</p>
              <a href={`mailto:${FOOTER_CONTACT_EMAIL}`} className="text-sm text-primary hover:underline">
                {FOOTER_CONTACT_EMAIL}
              </a>
            </div>
            {/* <p className="text-sm text-muted-foreground">Call: {FOOTER_PHONE_NUMBER}</p> */}
            <div>
              <p className="text-sm text-muted-foreground mb-2">Follow us:</p>
              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map((social: SocialLink) => (
                  <Link href={social.href} key={social.id} target="_blank" rel="noopener noreferrer" aria-label={social.label || social.name}>
                    <Button variant="outline" size="icon" className="rounded-full h-10 w-10 border-primary/50 text-primary hover:bg-primary/10">
                      <social.icon className="h-5 w-5" />
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-muted py-6">
        <div className="container mx-auto px-4 md:px-6 text-center text-muted-foreground text-sm">
          <p>&copy; {currentYear} BTGenZ. All rights reserved.</p>
          <p>Empowering the next generation of biotech leaders in India.</p>
        </div>
      </div>
    </footer>
  );
}

    