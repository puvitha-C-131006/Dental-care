import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Tooth } from "lucide-react";

const Header = () => {
  const navLinks = ["Home", "Services", "About Us", "Contact"];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <Tooth className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">Poonguzhali Dental Care</span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild>
            <a href="#contact">Book Appointment</a>
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {link}
                  </a>
                ))}
                 <Button className="mt-4" asChild>
                    <a href="#contact">Book Appointment</a>
                 </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;