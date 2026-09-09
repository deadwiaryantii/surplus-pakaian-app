"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Recycle, ArrowRight, Lock, Mail, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/dashboard");
    }, 800);
  };

  return (
    <div className="relative min-h-[calc(100vh-4rem)] w-full flex items-center justify-center py-12 px-6">
      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Teks Sisi Kiri (Responsif Light & Dark Mode) */}
        <div className="text-slate-900 dark:text-white space-y-6 hidden lg:block">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs font-semibold backdrop-blur-md">
            <Recycle className="w-4 h-4" /> ReThread Ecosystem 2026
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight leading-tight">
            Sistem Pintar <br /><span className="text-emerald-600 dark:text-emerald-400">Pengelolaan Surplus</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-base max-w-lg leading-relaxed">
            Platform sirkular terpadu untuk optimalisasi inventaris retail, quality control ketat, dan distribusi transparan kepada komunitas.
          </p>
        </div>

        {/* Kotak Form Login */}
        <div className="w-full max-w-md mx-auto">
          <div className="bg-white/80 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 p-8 rounded-3xl shadow-2xl shadow-slate-900/10 dark:shadow-black/40">
            <div className="text-center mb-8">
              <div className="inline-flex w-14 h-14 rounded-2xl bg-amber-400 shadow-md shadow-amber-400/20 mb-3 overflow-hidden items-center justify-center p-0.5">
                <img src="/logo.png?v=2" alt="Logo" className="w-full h-full object-cover" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Selamat Datang</h2>
              <p className="text-xs text-slate-500 dark:text-slate-300 mt-1">Silakan masuk menggunakan akun terdaftar</p>
            </div>

            <form className="space-y-5" onSubmit={handleLogin}>
              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-200 mb-1.5">Alamat Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2.5 bg-slate-50 dark:bg-black/30 border border-slate-200 dark:border-white/15 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                    placeholder="nama@domain.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-200 mb-1.5">Kata Sandi</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-10 pr-10 py-2.5 bg-slate-50 dark:bg-black/30 border border-slate-200 dark:border-white/15 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center items-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/30 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
                >
                  {loading ? "Memproses..." : "Masuk Sekarang"} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>

            <div className="mt-6 text-center">
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Belum punya akun?{" "}
                <Link href="/register" className="font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 transition">
                  Daftar di sini
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}