
"use client";

import * as React from "react";
import Link from 'next/link';
import { Dna, Search as SearchIconLucide, Menu as MenuIcon, X, Mail } from 'lucide-react'; // Renamed Search to SearchIconLucide
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HEADER_NAV_CONFIG, NEWSLETTER_CTA, type NavLinkItem, type NavCategory } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { SearchDialog } from './SearchDialog'; // Added import

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string, icon?: LucideIcon }
>(({ className, title, children, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none flex items-center">
            {Icon && <Icon className="h-4 w-4 mr-2 flex-shrink-0" />}
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isSearchDialogOpen, setIsSearchDialogOpen] = React.useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/70 backdrop-blur-lg">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary hover:opacity-80 transition-opacity mr-4">
            <Dna className="h-8 w-8" />
            <span>BTGenZ</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-grow justify-center">
            <NavigationMenu>
              <NavigationMenuList>
                {HEADER_NAV_CONFIG.map((category) => (
                  <NavigationMenuItem key={category.title}>
                    <NavigationMenuTrigger>{category.title}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {category.items.map((item) => (
                          <ListItem
                            key={item.label}
                            title={item.label}
                            href={item.href}
                            icon={item.icon}
                          >
                            {item.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
                <NavigationMenuItem>
                  <Link href={NEWSLETTER_CTA.href} legacyBehavior passHref>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-accent text-accent-foreground hover:bg-accent/90 focus:bg-accent/90")}>
                      {NEWSLETTER_CTA.icon && <NEWSLETTER_CTA.icon className="h-4 w-4 mr-2"/>}
                      {NEWSLETTER_CTA.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right side icons & Mobile Menu Trigger */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden lg:inline-flex" aria-label="Search" onClick={() => setIsSearchDialogOpen(true)}>
              <SearchIconLucide className="h-5 w-5" />
            </Button>
            <ThemeToggle />
            <div className="lg:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Open menu">
                    <MenuIcon className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full max-w-sm p-0 flex flex-col">
                  <SheetHeader className="p-4 border-b">
                    <div className="flex justify-between items-center">
                       <SheetTitle>
                          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                              <Dna className="h-7 w-7" />
                              <span>BTGenZ</span>
                          </Link>
                       </SheetTitle>
                       <SheetClose asChild>
                         <Button variant="ghost" size="icon" aria-label="Close menu">
                           <X className="h-5 w-5" />
                         </Button>
                       </SheetClose>
                    </div>
                  </SheetHeader>
                  <div className="flex-grow overflow-y-auto p-4 space-y-4">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full justify-start text-foreground" 
                      aria-label="Search" 
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsSearchDialogOpen(true);
                      }}
                    >
                       <SearchIconLucide className="h-5 w-5 mr-3" /> Search Articles
                     </Button>
                    <Accordion type="single" collapsible className="w-full">
                      {HEADER_NAV_CONFIG.map((category) => (
                        <AccordionItem value={category.title} key={category.title}>
                          <AccordionTrigger className="text-base font-medium py-3 hover:no-underline">
                            {category.title}
                          </AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-1 pt-2 pl-2 border-l">
                              {category.items.map((item) => (
                                <li key={item.label}>
                                  <Link
                                    href={item.href}
                                    className="flex items-center p-2 rounded-md hover:bg-accent hover:text-accent-foreground text-muted-foreground data-[active]:bg-accent data-[active]:text-accent-foreground"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    {item.icon && <item.icon className="h-4 w-4 mr-2 flex-shrink-0" />}
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                    <Link
                      href={NEWSLETTER_CTA.href}
                      className="w-full mt-4 inline-flex items-center justify-center rounded-md bg-accent px-4 py-3 text-sm font-medium text-accent-foreground shadow-sm hover:bg-accent/90"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {NEWSLETTER_CTA.icon && <NEWSLETTER_CTA.icon className="h-4 w-4 mr-2"/>}
                      {NEWSLETTER_CTA.label}
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
      <SearchDialog open={isSearchDialogOpen} onOpenChange={setIsSearchDialogOpen} />
    </>
  );
}
