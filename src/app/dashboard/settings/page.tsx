"use client";
import React, { useState } from "react";
import { Settings, Save, Building, MapPin, Key } from "lucide-react";

export default function SettingsPage() {
  const [namaYayasan, setNamaYayasan] = useState("Yayasan Sirkular Surplus Indonesia");
  const [alamatGudang, setAlamatGudang] = useState("Jl. Logistik Industri Textile No. 45, Karawang");
  const [apiKey, setApiKey] = useState("WA-GATEWAY-SECRET-2026-KEY");
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-100">Pengaturan Sistem & Konfigurasi</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">Pengaturan profil yayasan, alamat gudang pusat, dan integrasi API pihak ketiga[cite: 1, 2].</p>
      </div>

      {saved && (
        <div className="p-4 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 rounded-xl text-sm font-medium">
          Pengaturan sistem berhasil disimpan dan disinkronkan!
        </div>
      )}

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Nama Organisasi / Yayasan</label>
            <div className="relative">
              <Building className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={namaYayasan}
                onChange={(e) => setNamaYayasan(e.target.value)}
                required
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg pl-9 pr-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Alamat Gudang Pusat Utama</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={alamatGudang}
                onChange={(e) => setAlamatGudang(e.target.value)}
                required
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg pl-9 pr-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">API Key Gateway (WhatsApp / Notifikasi)</label>
            <div className="relative">
              <Key className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                required
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg pl-9 pr-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500 font-mono"
              />
            </div>
          </div>
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-6 py-2.5 rounded-lg transition shadow-sm"
            >
              <Save className="w-4 h-4" /> Simpan Pengaturan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}