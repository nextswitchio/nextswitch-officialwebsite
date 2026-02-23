'use client'

import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { dropdownVariants, dropdownStagger, dropdownItemVariants, mobileMenuVariants } from "@/lib/animations/variants";
import { useReducedMotion } from "@/lib/animations/hooks/useReducedMotion";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

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
    { name: "The Company", href: "/about" },
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
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-100 bg-white/90 backdrop-blur-xl border-b border-gray-100/50">
      <div className="container mx-auto px-4 lg:px-12 h-18 lg:h-22 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 relative z-110">
          <Image 
            src="/next-switch-logo.png" 
            alt="NextSwitch Logo" 
            width={150} 
            height={40}
            className="h-8 md:h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <div 
              key={item.href} 
              className="relative py-4"
              onMouseEnter={() => item.hasDropdown && setHoveredDropdown(item.name)}
              onMouseLeave={() => item.hasDropdown && setHoveredDropdown(null)}
            >
              <Link
                href={item.href}
                className={`flex items-center gap-1 transition-all duration-300 font-medium text-sm md:text-base ${isActive(item.href)
                  ? "text-[#006FF5]"
                  : "text-gray-600 hover:text-[#006FF5]"
                  }`}
              >
                {item.name}
                {item.hasDropdown && (
                  <motion.div
                    animate={{ rotate: hoveredDropdown === item.name ? 180 : 0 }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                )}
              </Link>

              {item.hasDropdown && (
                <AnimatePresence>
                  {hoveredDropdown === item.name && (
                    <motion.div
                      className="absolute top-full left-0 pt-4 z-50"
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={prefersReducedMotion ? undefined : (dropdownVariants as Variants)}
                    >
                      <motion.div 
                        className="bg-white border border-gray-100 rounded-2xl shadow-2xl py-4 w-72"
                        variants={prefersReducedMotion ? undefined : (dropdownStagger as Variants)}
                        initial="hidden"
                        animate="visible"
                      >
                        {item.dropdownItems?.map((dropdownItem) => (
                          <motion.div
                            key={dropdownItem.href}
                            variants={prefersReducedMotion ? undefined : (dropdownItemVariants as Variants)}
                          >
                            <Link
                              href={dropdownItem.href}
                              className="block px-8 py-3 text-sm font-medium text-gray-600 hover:text-[#006FF5] hover:bg-gray-50 transition-colors"
                            >
                              {dropdownItem.name}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
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
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 z-100 bg-white md:hidden"
              variants={prefersReducedMotion ? undefined : (mobileMenuVariants as Variants)}
              initial="hidden"
              animate="visible"
              exit="hidden"
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
                        <AnimatePresence>
                          {expandedItems.includes(item.name) && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ 
                                height: "auto", 
                                opacity: 1,
                                transition: {
                                  height: { duration: prefersReducedMotion ? 0 : 0.3 },
                                  opacity: { duration: prefersReducedMotion ? 0 : 0.2, delay: 0.1 }
                                }
                              }}
                              exit={{ 
                                height: 0, 
                                opacity: 0,
                                transition: {
                                  height: { duration: prefersReducedMotion ? 0 : 0.3 },
                                  opacity: { duration: prefersReducedMotion ? 0 : 0.15 }
                                }
                              }}
                              className="overflow-hidden mt-4"
                            >
                              <motion.div 
                                className="flex flex-col gap-4 pl-4 border-l-2 border-gray-100"
                                variants={prefersReducedMotion ? undefined : (dropdownStagger as Variants)}
                                initial="hidden"
                                animate="visible"
                              >
                                {item.dropdownItems?.map((dropdownItem) => (
                                  <motion.div
                                    key={dropdownItem.href}
                                    variants={prefersReducedMotion ? undefined : (dropdownItemVariants as Variants)}
                                  >
                                    <Link
                                      href={dropdownItem.href}
                                      className="text-xl font-medium text-gray-500 hover:text-[#006FF5] transition-colors"
                                    >
                                      {dropdownItem.name}
                                    </Link>
                                  </motion.div>
                                ))}
                              </motion.div>
                            </motion.div>
                          )}
                        </AnimatePresence>
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
