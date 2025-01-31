"use client";

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
import { APP_NAME } from '@/constants/constants';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const sidebarNavItems = [
  {
    title: "Home",
    icon: LayoutDashboard,
    href: "/home",
  },
  {
    title: "Generate",
    icon: ImageIcon,
    href: "/generate",
  },

];

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById('sidebar');
      const menuButton = document.getElementById('menu-button');
      
      if (sidebar && !sidebar.contains(event.target as Node) && 
          menuButton && !menuButton.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <Button
        id="menu-button"
        onClick={() => setIsOpen(!isOpen)}
        variant="ghost"
        className="fixed top-4 left-4 z-50 p-2 md:hidden hover:bg-white/10"
        size="icon"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      <aside
        id="sidebar"
        className={`fixed top-0 left-0 h-screen w-[290px] z-40 
          transform transition-all duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:translate-x-0 flex flex-col
          bg-gradient-to-b from-gray-900 to-black `}
      >
        <div className="relative h-full flex flex-col">
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600">
                <SparklesIcon className="h-6 w-6 text-white" />
              </div>
              <span className="font-heading text-xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                {APP_NAME}
              </span>
            </div>
          </div>


          <ScrollArea className="flex-1 px-3 py-4">
  <nav className="space-y-1">
    {sidebarNavItems.map((item) => {
      const isActive = pathname === item.href;
      
      return (
        <Link
          key={item.href}
          href={item.href}
          className={`w-full flex items-center gap-3 p-3 transition-all duration-200 rounded-md
          ${isActive 
            ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white' 
            : 'text-white/70 hover:text-white hover:bg-white/10'
          }`}
        >
          <item.icon className={`h-5 w-5 transition-colors ${
            isActive ? 'text-blue-400' : 'text-white/70'
          }`} />
          <span className="font-medium">{item.title}</span>
          {isActive && (
            <div className="absolute left-0 top-0 h-full w-1 rounded-r" />
          )}
        </Link>
      );
    })}
  </nav>
</ScrollArea>

          {/* Footer */}
          <div className="p-4 border-t border-white/10 mt-auto">
            <div className="rounded-lg bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-4">
              <p className="text-sm text-white/70">
                Need help? Check our guides or contact support.
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}