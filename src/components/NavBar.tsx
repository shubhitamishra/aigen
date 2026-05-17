
import { useState } from "react";
import { motion } from "framer-motion";
import { Code2Icon, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface NavBarProps {
  onThemeChange: (theme: 'light' | 'dark') => void;
}

export function NavBar({ onThemeChange }: NavBarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useState(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Founders", path: "/founders" },
    { name: "Blog", path: "/blog" },
    { name: "NEW", path: "/new", isNew: true },
    { name: "Beta", path: "/beta", isBeta: true },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md border-b shadow-sm" : "bg-white/80 backdrop-blur-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div 
          className="flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Code2Icon size={28} className="text-blue-600" />
          <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            CodeResite
          </span>
        </motion.div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="relative text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              {item.name}
              {item.isNew && (
                <span className="absolute -top-2 -right-8 bg-green-500 text-white text-xs px-1.5 py-0.5 rounded">
                  NEW
                </span>
              )}
              {item.isBeta && (
                <span className="absolute -top-2 -right-8 bg-blue-500 text-white text-xs px-1.5 py-0.5 rounded">
                  Beta
                </span>
              )}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-4">
          <Button className="hidden lg:block bg-blue-600 hover:bg-blue-700">
            Get Started
          </Button>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="lg:hidden bg-white border-t"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <nav className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="flex items-center gap-2">
                  {item.name}
                  {item.isNew && (
                    <span className="bg-green-500 text-white text-xs px-1.5 py-0.5 rounded">NEW</span>
                  )}
                  {item.isBeta && (
                    <span className="bg-blue-500 text-white text-xs px-1.5 py-0.5 rounded">Beta</span>
                  )}
                </div>
              </Link>
            ))}
            <Button className="w-full bg-blue-600 hover:bg-blue-700 mt-4">
              Get Started
            </Button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
