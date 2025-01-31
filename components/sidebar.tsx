"use client";

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  ImageIcon, 
  LayoutDashboard, 
  History, 
  Settings,
  BookOpen,
  SparklesIcon,
  Menu,
  X
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { APP_NAME } from '@/constants/constants';
import { useState } from 'react';

const sidebarNavItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
  },
  {
    title: "Generate",
    icon: ImageIcon,
    href: "/generate",
  },
  {
    title: "History",
    icon: History,
    href: "/history",
  },
  {
    title: "Guides",
    icon: BookOpen,
    href: "/guides",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false)

  return (
<>
  {/* Mobile Toggle Button */}
  <button
    onClick={() => setIsOpen(!isOpen)}
    className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-white/10 text-white md:hidden">
    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
  </button>

  {/* Mobile Overlay */}
  {isOpen && (
    <div
      className="fixed inset-0 bg-black/50 z-30 md:hidden"
      onClick={() => setIsOpen(false)}
    />
  )}

  {/* Sidebar */}
  <div
    className={`fixed top-0 left-0 h-full w-[290px] z-40
      ${isOpen ? "translate-x-0" : "-translate-x-full"} 
      md:translate-x-0 transition-transform duration-300 ease-in-out`}>
    
    {/* Sidebar Background */}
    <div className="absolute inset-0 bg-black/20 backdrop-blur-xl" />

    <div className="relative h-full">
      <div className="w-full md:flex items-center justify-center">
        <SparklesIcon className="h-6 w-6" />
        <span className="font-bold sm:inline-block ml-2">{APP_NAME}</span>
      </div>

      {/* Sidebar Content */}
      <div className="p-4 md:p-6">
        <div className="h-12 w-14 rounded-lg bg-white/10 flex items-center justify-center">
          <span className="text-2xl font-bold text-white">A</span>
        </div>
      </div>

      {/* Scrollable Menu Items */}
      <ScrollArea className="h-[calc(100vh-8rem)] px-2 overflow-y-auto">
        <div className="space-y-2">
          {sidebarNavItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <button
                key={item.href}
                onClick={() => {
                  window.location.href = item.href;
                  setIsOpen(false); // Close mobile menu after navigation
                }}
                className={`group relative w-full overflow-hidden rounded-xl p-2 ${isActive ? "bg-white/10" : ""}`}>
                
                <div
                  className={`absolute inset-0 transition-all duration-300 ${isActive ? "bg-white/10" : "bg-white/5 group-hover:bg-white/10"}`}
                />
                <div
                  className={`absolute inset-0 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl" />
                </div>

                <div className="relative flex items-center space-x-3 text-gray-300">
                  <item.icon />
                  <span
                    className={`text-sm font-medium transition-all duration-300 ${isActive ? "text-white" : "group-hover:text-white"}`}>
                    {item.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  </div>
</>

  );
}