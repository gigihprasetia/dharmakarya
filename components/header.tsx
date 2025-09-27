"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-foreground">Dharma Karya</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Beranda
            </a>
            <a
              href="#services"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Layanan
            </a>
            <a
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Tentang
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Kontak
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2 bg-transparent"
            >
              <Phone className="h-4 w-4" />
              Hubungi Kami
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t border-border">
              <a
                href="#home"
                className="block px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                Beranda
              </a>
              <a
                href="#services"
                className="block px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                Layanan
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                Tentang
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                Kontak
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
