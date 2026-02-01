"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    // If we are in admin, we might not want to show the navbar at all based on requirements "Admin Dashboard: No Header"
    // But the layout includes it. Let's handle generic case here or just hide login button.
    // Requirement: "Admin Dashboard: Without Header or Login button". 
    // It's better to conditionally render the whole Navbar in layout, but user asked for "Navbar ... Login button appears only on one side" in Home Page section.

    if (!isHomePage) return null;

    return (
        <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="text-xl font-medium text-gold">
                    {/* Middle is handled by flex justify-between if we had 3 items, 
              but user said "Restaurant name clear" in Navbar (first prompt) 
              AND "Restaurant name in the middle" in Home Page (second prompt).
              Let's keep the name here as requested in first prompt, but maybe cleaner. 
              The second prompt says "Header simple ... Restaurant name visible in the middle".
          */}
                    <span className="font-bold">مطعم النخيل</span>
                </div>

                {isHomePage && (
                    <Link
                        href="/login"
                        className="text-sm font-medium text-gold hover:text-brown transition-colors"
                    >
                        تسجيل الدخول
                    </Link>
                )}
            </div>
        </nav>
    );
}
