"use client";
import React, { useState, useEffect } from "react";
import { 
  LayoutDashboard, Users, Shirt, Store, Send, CheckCircle2, 
  Package, Building2, FileText, GitCompare, ShieldCheck, 
  Truck, Search, BarChart3, Award, Settings, Sun, Moon, LogOut 
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const isAuthPage = pathname === "/login" || pathname === "/register" || pathname === "/";

  if (isAuthPage) {
    return (
      <html lang="id">
        <body className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased font-sans">
          {children}
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
    { name: "Quality Control", href: "/dashboard/quality-control", icon: CheckCircle2 },
    { name: "Stok Gudang", href: "/dashboard/stok-good", icon: Package },
    { name: "Profil Penerima", href: "/dashboard/profil-penerima", icon: Building2 },
    { name: "Community Portal", href: "/dashboard/community-portal", icon: FileText },
    { name: "Stock Matching", href: "/dashboard/matching", icon: GitCompare },
    { name: "Sanitasi & Final QC", href: "/dashboard/sanitasi-qc", icon: ShieldCheck },
    { name: "Delivery Order", href: "/dashboard/delivery-order", icon: Truck },
    { name: "Tracking Donasi", href: "/dashboard/tracking/SUP-SAMPLE-UUID", icon: Search },
    { name: "Laporan & Impact", href: "/dashboard/reports", icon: BarChart3 },
    { name: "Insentif Donatur", href: "/dashboard/insentif-donatur", icon: Award },
    { name: "Pengaturan Sistem", href: "/dashboard/settings", icon: Settings },
  ];

  return (
    <html lang="id" className={darkMode ? "dark" : ""}>
      <body className="bg-slate-100 dark:bg-slate-950 text-slate-800 dark:text-slate-100 antialiased">
        <div className="flex h-screen overflow-hidden">
          <aside className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col z-20">
            <div className="h-16 flex items-center px-6 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <div className="bg-emerald-600 text-white p-2 rounded-lg font-bold text-lg">CP</div>
                <span className="font-bold text-emerald-700 dark:text-emerald-400 text-base">CircularSurplus</span>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400"
                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="truncate">{item.name}</span>
                  </Link>
                );
              })}
            </div>
            <div className="p-4 border-t border-slate-200 dark:border-slate-800">
              <Link
                href="/login"
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 w-full"
              >
                <LogOut className="w-4 h-4" />
                <span>Keluar Sistem</span>
              </Link>
            </div>
          </aside>

          <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
            <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-6 z-10">
              <h1 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                Sistem Pintar Pengelolaan Surplus Pakaian Ritel
              </h1>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition"
                  aria-label="Toggle Theme"
                >
                  {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
                <div className="flex items-center gap-3 border-l pl-4 border-slate-200 dark:border-slate-800">
                  <div className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
                    AD
                  </div>
                  <div className="hidden md:block text-left text-xs">
                    <p className="font-semibold text-slate-800 dark:text-slate-200">Admin Pengelola</p>
                    <p className="text-slate-500 dark:text-slate-400">admin@surplus.com</p>
                  </div>
                </div>
              </div>
            </header>

            <main className="flex-1 overflow-y-auto p-6 bg-slate-50 dark:bg-slate-950">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}