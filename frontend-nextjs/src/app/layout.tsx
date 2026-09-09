"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  LayoutDashboard, Users, Shirt, Store, Send, CheckCircle2, 
  Package, Building2, FileText, GitCompare, ShieldCheck, 
  Truck, Search, BarChart3, Award, Settings, Sun, Moon, LogOut,
  User, ChevronDown, ArrowRight, ShieldAlert, Warehouse, Menu, X
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [greeting, setGreeting] = useState("Selamat Pagi");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const updateRealtimeGreeting = () => {
      const hours = new Date().getHours();
      if (hours >= 4 && hours < 11) {
        setGreeting("Selamat Pagi");
      } else if (hours >= 11 && hours < 15) {
        setGreeting("Selamat Siang");
      } else if (hours >= 15 && hours < 18) {
        setGreeting("Selamat Sore");
      } else {
        setGreeting("Selamat Malam");
      }
    };

    updateRealtimeGreeting();
    const interval = setInterval(updateRealtimeGreeting, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Tutup sidebar otomatis ketika berpindah halaman di layar kecil
  useEffect(() => {
    setIsMobileSidebarOpen(false);
  }, [pathname]);

  const isAuthPage = pathname === "/login" || pathname === "/register" || pathname === "/register-mitra" || pathname === "/";
  const isLoginOrRegister = pathname === "/login" || pathname === "/register" || pathname === "/register-mitra";

  if (isAuthPage) {
    return (
      <html lang="id" className={darkMode ? "dark" : ""} suppressHydrationWarning>
        <body className="relative bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased font-sans transition-colors duration-250 min-h-screen overflow-x-hidden flex flex-col" suppressHydrationWarning>
          <div 
            className="absolute inset-0 z-0 bg-repeat opacity-[0.07] dark:opacity-[0.04]"
            style={{ backgroundImage: `url('/latar-belakang.jpg')` }}
          />
          <div className="relative z-10 min-h-screen flex flex-col justify-between">
            <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-900/85 border-b border-slate-200/80 dark:border-slate-800 shadow-sm">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2.5 sm:gap-3 hover:opacity-85 transition">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-amber-400 flex items-center justify-center shrink-0 overflow-hidden p-0.5">
                    <img src="/logo.png?v=2" alt="Logo" className="w-full h-full object-cover" />
                  </div>
                  <span className="font-bold text-slate-800 dark:text-slate-100 text-sm sm:text-base tracking-tight">ReThread</span>
                </Link>
                
                <div className="flex items-center gap-2 sm:gap-3">
                  <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 rounded-lg bg-slate-100/90 dark:bg-slate-800/90 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
                    aria-label="Toggle Theme"
                  >
                    {darkMode ? <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" /> : <Moon className="w-4 h-4 sm:w-5 sm:h-5" />}
                  </button>
                  {!isLoginOrRegister && (
                    <Link href="/login" className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium hover:text-emerald-600 transition">
                      Masuk
                    </Link>
                  )}
                  <Link href="/dashboard" className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg shadow-sm transition flex items-center gap-1.5 sm:gap-2">
                    <span>Dashboard</span> <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </Link>
                </div>
              </div>
            </header>

            <main className="flex-1">
              {children}
            </main>

            <footer className="py-6 px-4 text-center text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 border-t border-slate-200/60 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm">
              &copy; 2026 ReThread Ecosystem — Developed by Dea Dwi Aryanti. All rights reserved.
            </footer>
          </div>
        </body>
      </html>
    );
  }

  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Manajemen User", href: "/dashboard/users", icon: Users },
    { name: "Master Pakaian", href: "/dashboard/master-pakaian", icon: Shirt },
    { name: "Stok Toko", href: "/dashboard/stok-toko", icon: Store },
    { name: "Request & Resi", href: "/dashboard/request-departure", icon: Send },
    { name: "Logistik & Pengiriman", href: "/dashboard/logistics", icon: Truck },
    { name: "Quality Control", href: "/dashboard/quality-control", icon: CheckCircle2 },
    { name: "Stok Gudang", href: "/dashboard/stok-good", icon: Package },
    { name: "Manajemen Depo Gudang", href: "/dashboard/admin/warehouse", icon: Warehouse },
    { name: "Profil Penerima", href: "/dashboard/profil-penerima", icon: Building2 },
    { name: "Community Portal", href: "/dashboard/community-portal", icon: FileText },
    { name: "Stock Matching", href: "/dashboard/matching", icon: GitCompare },
    { name: "Sanitasi & Final QC", href: "/dashboard/sanitasi-qc", icon: ShieldCheck },
    { name: "Delivery Order", href: "/dashboard/delivery-order", icon: Truck },
    { name: "Tracking Donasi", href: "/dashboard/tracking/SUP-SAMPLE-UUID", icon: Search },
    { name: "Audit Log Sistem", href: "/dashboard/admin/audit-log", icon: ShieldAlert },
    { name: "Laporan & Impact", href: "/dashboard/reports", icon: BarChart3 },
    { name: "Insentif Donatur", href: "/dashboard/insentif-donatur", icon: Award },
    { name: "Pengaturan Sistem", href: "/dashboard/settings", icon: Settings },
  ];

  return (
    <html lang="id" className={darkMode ? "dark" : ""} suppressHydrationWarning>
      <body className="relative bg-slate-100 dark:bg-slate-950 text-slate-800 dark:text-slate-100 antialiased transition-colors duration-250 h-screen overflow-hidden" suppressHydrationWarning>
        <div 
          className="absolute inset-0 z-0 bg-repeat opacity-[0.05] dark:opacity-[0.03]"
          style={{ backgroundImage: `url('/latar-belakang.jpg')` }}
        />
        
        <div className="relative z-10 flex h-screen overflow-hidden">
          
          {/* Overlay Gelap untuk Mobile ketika Sidebar Terbuka */}
          {isMobileSidebarOpen && (
            <div 
              onClick={() => setIsMobileSidebarOpen(false)}
              className="fixed inset-0 bg-black/50 z-30 lg:hidden backdrop-blur-sm transition-opacity"
            />
          )}

          {/* ASIDE SIDEBAR (Responsif Drawer untuk Mobile & Fixed untuk Desktop) */}
          <aside className={`fixed lg:static inset-y-0 left-0 w-64 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-r border-slate-200 dark:border-slate-800 flex flex-col z-40 shadow-lg lg:shadow-sm transform transition-transform duration-300 ease-in-out ${
            isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}>
            <div className="h-16 flex items-center justify-between px-6 border-b border-slate-200 dark:border-slate-800 shrink-0">
              <Link href="/" className="flex items-center gap-3 hover:opacity-85 transition">
                <div className="w-9 h-9 rounded-xl bg-amber-400 flex items-center justify-center shrink-0 overflow-hidden p-0.5">
                  <img src="/logo.png?v=2" alt="Logo" className="w-full h-full object-cover" />
                </div>
                <span className="font-bold text-slate-800 dark:text-slate-100 text-base tracking-tight">ReThread</span>
              </Link>
              {/* Tombol Close untuk Mobile */}
              <button 
                onClick={() => setIsMobileSidebarOpen(false)}
                className="lg:hidden p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-700 scrollbar-track-transparent hover:scrollbar-thumb-slate-400 dark:hover:scrollbar-thumb-slate-600 transition-colors">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-emerald-50/90 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 shadow-sm"
                        : "text-slate-600 dark:text-slate-400 hover:bg-white/60 dark:hover:bg-slate-800/60"
                    }`}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span className="truncate">{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </aside>

          <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
            <header className="h-16 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-4 sm:px-6 z-30 shadow-sm shrink-0">
              <div className="flex items-center gap-3 min-w-0">
                {/* Tombol Garis Tiga (Hamburger) khusus Layar Kecil/Mobile */}
                <button
                  onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
                  className="lg:hidden p-2 rounded-lg bg-slate-100/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 hover:bg-slate-200 transition shrink-0"
                  aria-label="Toggle Sidebar"
                >
                  <Menu className="w-5 h-5" />
                </button>
                <h1 className="text-xs sm:text-base lg:text-lg font-semibold text-slate-800 dark:text-slate-200 truncate">
                  Sistem Pintar Pengelolaan Surplus Pakaian Ritel
                </h1>
              </div>
              
              <div className="flex items-center gap-3 sm:gap-4 shrink-0">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-lg bg-slate-100/90 dark:bg-slate-800/90 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition"
                  aria-label="Toggle Theme"
                >
                  {darkMode ? <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" /> : <Moon className="w-4 h-4 sm:w-5 sm:h-5" />}
                </button>

                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="flex items-center gap-2 sm:gap-3.5 border-l pl-3 sm:pl-5 border-slate-200 dark:border-slate-800 focus:outline-none group text-left py-1"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-xs sm:text-sm shadow-md shadow-emerald-600/20 group-hover:scale-105 transition shrink-0">
                      AD
                    </div>
                    
                    <div className="hidden md:flex flex-col text-left text-xs space-y-1">
                      <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold tracking-wide">
                        {greeting},
                      </span>
                      <span className="font-bold text-slate-900 dark:text-slate-100 tracking-tight text-sm">Admin Pengelola</span>
                      <span className="text-slate-500 dark:text-slate-400 text-[11px]">admin@surplus.com</span>
                    </div>
                    
                    <ChevronDown className={`w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 transition-transform duration-200 shrink-0 ml-1 sm:ml-1.5 ${isProfileOpen ? "rotate-180" : ""}`} />
                  </button>

                  {isProfileOpen && (
                    <div className="absolute right-0 mt-3 w-56 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                      <div className="px-4 py-2 border-b border-slate-100 dark:border-slate-800">
                        <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">Akun Terverifikasi</p>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">Hak Akses: Super Administrator</p>
                      </div>
                      <Link
                        href="/dashboard/profile"
                        onClick={() => setIsProfileOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-2.5 text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
                      >
                        <User className="w-4 h-4 text-slate-500" />
                        <span>Profil & Pengaturan Akun</span>
                      </Link>
                      <button
                        onClick={() => {
                          setIsProfileOpen(false);
                          router.push("/");
                        }}
                        className="flex items-center gap-2.5 px-4 py-2.5 text-xs text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 w-full text-left transition"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Keluar Akun</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </header>

            <main className="flex-1 overflow-y-auto p-4 sm:p-6 bg-transparent flex flex-col justify-between scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-700 scrollbar-track-transparent">
              <div>
                {children}
              </div>
              <footer className="mt-12 py-4 px-2 text-center text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 border-t border-slate-200/60 dark:border-slate-800/80">
                &copy; 2026 ReThread Ecosystem — Developed by Dea Dwi Aryanti. All rights reserved.
              </footer>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}