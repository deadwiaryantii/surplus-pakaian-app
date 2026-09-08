"use client";
import React, { useState } from "react";
import { ShieldCheck, CheckCircle2, Sparkles, Package } from "lucide-react";

export default function SanitasiQCPage() {
  const [sanitasiList, setSanitasiList] = useState([
    { id: 1, barang: "Jaket Casual (80 Pcs)", prosesSanitasi: "Pencucian Steril & Steam Uap", finalCheck: "Lolos Sempurna", status: "Ready for Distribution" },
    { id: 2, barang: "Kemeja Flanel (40 Pcs)", prosesSanitasi: "Disinfeksi & Setrika Panas", finalCheck: "Menunggu Pemeriksaan", status: "Proses Sanitasi" },
  ]);

  const handleUpdateReady = (id: number) => {
    setSanitasiList(
      sanitasiList.map((item) => (item.id === id ? { ...item, status: "Ready for Distribution", finalCheck: "Lolos Sempurna" } : item))
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-100">Sanitasi & Final QC</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">Pencatatan proses kebersihan, sterilisasi, dan penetapan status siap distribusi.</p>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                <th className="py-3.5 px-6">Daftar Barang Surplus</th>
                <th className="py-3.5 px-6">Status Proses Sanitasi</th>
                <th className="py-3.5 px-6">Pemeriksaan Akhir</th>
                <th className="py-3.5 px-6">Status Kelayakan</th>
                <th className="py-3.5 px-6 text-right">Aksi Final</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
              {sanitasiList.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition">
                  <td className="py-4 px-6 font-medium text-slate-800 dark:text-slate-200 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xs">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    {item.barang}
                  </td>
                  <td className="py-4 px-6 text-slate-700 dark:text-slate-300 font-medium">{item.prosesSanitasi}</td>
                  <td className="py-4 px-6 text-slate-600 dark:text-slate-400">{item.finalCheck}</td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                      item.status === "Ready for Distribution"
                        ? "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400"
                        : "bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400"
                    }`}>
                      <ShieldCheck className="w-3 h-3" /> {item.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    {item.status !== "Ready for Distribution" && (
                      <button
                        onClick={() => handleUpdateReady(item.id)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-medium transition shadow-sm"
                      >
                        <CheckCircle2 className="w-3 h-3" /> Set Ready
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}