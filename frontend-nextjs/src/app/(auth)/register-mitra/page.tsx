"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Lock, Mail, User, Store, Building, FileText, Eye, EyeOff } from "lucide-react";

export default function RegisterMitraPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    namaLengkap: "",
    email: "",
    password: "",
    namaPerusahaan: "",
    nomorToko: "",
    penanggungJawab: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // Kalkulasi Kekuatan Sandi
  const getPasswordStrength = (pass: string) => {
    if (!pass) return { score: 0, label: "", color: "bg-slate-200 dark:bg-slate-800" };
    let score = 0;
    if (pass.length >= 8) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[0-9]/.test(pass)) score++;
    if (/[^A-Za-z0-9]/.test(pass)) score++;

    if (score <= 1) return { score: 1, label: "Lemah", color: "bg-red-500 text-red-500" };
    if (score === 2 || score === 3) return { score: 2, label: "Sedang", color: "bg-amber-500 text-amber-500" };
    return { score: 3, label: "Kuat", color: "bg-emerald-500 text-emerald-500" };
  };

  const strength = getPasswordStrength(formData.password);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegisterMitra = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/dashboard?status=pending_verification");
    }, 900);
  };

  return (
    <div className="relative min-h-[calc(100vh-4rem)] w-full flex items-center justify-center py-12 px-6">
      <div className="relative z-10 w-full max-w-xl mx-auto">
        <div className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 p-8 sm:p-10 rounded-3xl shadow-2xl shadow-slate-900/10 dark:shadow-black/40">
          <div className="text-center mb-8">
            <div className="inline-flex w-14 h-14 rounded-2xl bg-amber-400 shadow-md shadow-amber-400/20 mb-3 overflow-hidden items-center justify-center p-0.5">
              <img src="/logo.png?v=2" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Pendaftaran Akun Mitra Toko & Donatur</h2>
            <p className="text-xs text-slate-500 dark:text-slate-300 mt-1">Lengkapi data perusahaan/retail untuk validasi insentif dan stok surplus</p>
          </div>

          <form className="space-y-4" onSubmit={handleRegisterMitra}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-200 mb-1.5">Nama Perusahaan / Retail</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Building className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    name="namaPerusahaan"
                    required
                    value={formData.namaPerusahaan}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-2.5 bg-slate-50 dark:bg-black/30 border border-slate-200 dark:border-white/15 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                    placeholder="Contoh: PT ReThread Ritel Indo"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-200 mb-1.5">Nomor Identifikasi Toko (Store ID)</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Store className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    name="nomorToko"
                    required
                    value={formData.nomorToko}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-2.5 bg-slate-50 dark:bg-black/30 border border-slate-200 dark:border-white/15 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                    placeholder="STR-ID-XXXX"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-200 mb-1.5">Penanggung Jawab Korporat</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <FileText className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  name="penanggungJawab"
                  required
                  value={formData.penanggungJawab}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-2.5 bg-slate-50 dark:bg-black/30 border border-slate-200 dark:border-white/15 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                  placeholder="Nama Manajer / PIC Terkait"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-200 mb-1.5">Nama Akun Admin</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    name="namaLengkap"
                    required
                    value={formData.namaLengkap}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-2.5 bg-slate-50 dark:bg-black/30 border border-slate-200 dark:border-white/15 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                    placeholder="Nama Lengkap Anda"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-200 mb-1.5">Alamat Email Bisnis</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-2.5 bg-slate-50 dark:bg-black/30 border border-slate-200 dark:border-white/15 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                    placeholder="mitra@perusahaan.com"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-200 mb-1.5">Kata Sandi Akun</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-10 py-2.5 bg-slate-50 dark:bg-black/30 border border-slate-200 dark:border-white/15 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
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

              {/* Indikator Kekuatan Sandi */}
              {formData.password && (
                <div className="mt-2 space-y-1.5">
                  <div className="flex gap-1 h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className={`h-full transition-all duration-300 ${strength.score === 1 ? "w-1/3 bg-red-500" : strength.score === 2 ? "w-2/3 bg-amber-500" : "w-full bg-emerald-500"}`} />
                  </div>
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-slate-500 dark:text-slate-400">Kekuatan Sandi:</span>
                    <span className={`font-bold ${strength.color.split(" ")[1]}`}>{strength.label}</span>
                  </div>
                </div>
              )}
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center items-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/30 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
              >
                {loading ? "Memproses Verifikasi..." : "Daftarkan Mitra Korporat"} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Sudah terdaftar sebagai mitra?{" "}
              <Link href="/login" className="font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 transition">
                Masuk di sini
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}