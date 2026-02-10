'use client'

import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Reset body scroll when opening/closing
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  // Close menu when route changes
  useEffect(() => {
    if (isOpen) {
      queueMicrotask(() => {
        setIsOpen(false);
        document.body.style.overflow = 'unset';
      });
    }
  }, [pathname, isOpen]);

  const toggleExpanded = (name: string) => {
    setExpandedItems(prev =>
      prev.includes(name) ? prev.filter(item => item !== name) : [...prev, name]
    );
  };

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    {
      name: "Services",
      href: "/services",
      hasDropdown: true,
      dropdownItems: [
        { name: "Web Development", href: "/services/web-development" },
        { name: "Mobile Development", href: "/services/mobile-development" },
        { name: "Tech Training", href: "/services/tech-training" },
        { name: "Innovation Labs", href: "/services/innovation-labs" },
        { name: "Custom Software Dev.", href: "/services/custom-software-development" },
        { name: "IT Consulting", href: "/services/it-consulting" },
      ]
    },
    { name: "Resources", href: "/blog" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-100 bg-white/90 backdrop-blur-xl border-b border-gray-100/50">
      <div className="container mx-auto px-4 lg:px-12 h-18 lg:h-22 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 relative z-110">
          <div className="relative w-8 h-8 md:w-10 md:h-10">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M12 8L4 20L12 32" stroke="#006FF5" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M28 32L36 20L28 8" stroke="#003366" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M14 20H26" stroke="#006FF5" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>
          <div className="flex items-center text-xl md:text-2xl font-bold">
            <span className="text-[#006FF5]">Next</span>
            <span className="text-[#001F3F] ml-1">Switch</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <div key={item.href} className="relative group py-4">
              <Link
                href={item.href}
                className={`flex items-center gap-1 transition-all duration-300 font-medium text-sm md:text-base ${isActive(item.href)
                  ? "text-[#006FF5]"
                  : "text-gray-600 hover:text-[#006FF5]"
                  }`}
              >
                {item.name}
                {item.hasDropdown && (
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                )}
              </Link>

              {item.hasDropdown && (
                <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-3 group-hover:translate-y-0 z-50">
                  <div className="bg-white border border-gray-100 rounded-2xl shadow-2xl py-4 w-72">
                    {item.dropdownItems?.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.href}
                        href={dropdownItem.href}
                        className="block px-8 py-3 text-sm font-medium text-gray-600 hover:text-[#006FF5] hover:bg-gray-50 transition-colors"
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Link href="/contact">
            <Button className="rounded-full bg-linear-to-r from-[#00AEEF] to-[#01F9C6] text-[#001F3F] font-bold px-10 py-3 hover:scale-105 hover:shadow-xl transition-all border-none h-auto text-base">
              Request a Quote
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden relative z-110 p-2 text-gray-900 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 z-100 bg-white transition-all duration-500 ease-in-out md:hidden ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
            }`}
        >
          <div className="flex flex-col h-full pt-28 pb-10 px-6 overflow-y-auto">
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <div key={item.href} className="flex flex-col">
                  {item.hasDropdown ? (
                    <button
                      onClick={() => toggleExpanded(item.name)}
                      className="flex items-center justify-between w-full py-2 text-3xl font-bold text-[#001F3F]"
                    >
                      {item.name}
                      <ChevronDown className={`w-8 h-8 transition-transform ${expandedItems.includes(item.name) ? "rotate-180" : ""}`} />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`py-2 text-3xl font-bold transition-colors ${isActive(item.href) ? "text-[#006FF5]" : "text-[#001F3F]"
                        }`}
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Mobile Dropdown Items */}
                  {item.hasDropdown && (
                    <div className={`overflow-hidden transition-all duration-300 ${expandedItems.includes(item.name) ? "max-h-[500px] mt-4" : "max-h-0"
                      }`}>
                      <div className="flex flex-col gap-4 pl-4 border-l-2 border-gray-100">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            className="text-xl font-medium text-gray-500 hover:text-[#006FF5] transition-colors"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="mt-auto pt-10">
              <Link href="/contact" className="block w-full">
                <Button className="w-full rounded-2xl bg-[#001F3F] text-white font-bold py-6 h-auto text-xl flex items-center justify-center gap-3">
                  Get Started
                  <ArrowRight className="w-6 h-6" />
                </Button>
              </Link>
              <div className="mt-8 flex justify-center gap-6">
                {/* Social links placeholder if needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
