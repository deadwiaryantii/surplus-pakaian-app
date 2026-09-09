"use client";
import React, { useState } from "react";
import { GitCompare, CheckCircle2, Package, Building2 } from "lucide-react";

export default function MatchingPage() {
  const [matchList, setMatchList] = useState([
    { id: 1, penerima: "Yayasan Panti Asuhan Berkah", kebutuhan: "Kemeja Anak (50 Pcs)", stokTersedia: "Kemeja Flanel Gudang A (40 Pcs)", status: "Cocok Sebagian" },
    { id: 2, penerima: "Komunitas Pemulung Sejahtera", kebutuhan: "Jaket Dewasa (80 Pcs)", stokTersedia: "Jaket Casual Gudang B (80 Pcs)", status: "Cocok Sempurna" },
  ]);

  const handleApproveMatch = (id: number) => {
    setMatchList(
      matchList.map((item) => (item.id === id ? { ...item, status: "Disetujui untuk Sanitasi" } : item))
    );
  };

  return (
    <div className="space-y-6 w-full max-w-full overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-100">Stock & Requirement Matching</h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Pencocokan otomatis stok gudang yang tersedia dengan profil kebutuhan penerima.</p>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse min-w-[750px]">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                <th className="py-3.5 px-6">Lembaga / Komunitas Penerima</th>
                <th className="py-3.5 px-6">Parameter Kebutuhan</th>
                <th className="py-3.5 px-6">Stok Gudang Tersedia</th>
                <th className="py-3.5 px-6">Status Rekomendasi</th>
                <th className="py-3.5 px-6 text-right">Aksi Matching</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
              {matchList.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition">
                  <td className="py-4 px-6 font-medium text-slate-800 dark:text-slate-200">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <span className="truncate">{item.penerima}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-slate-700 dark:text-slate-300 font-medium">{item.kebutuhan}</td>
                  <td className="py-4 px-6 text-slate-600 dark:text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <Package className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> 
                      <span>{item.stokTersedia}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 whitespace-nowrap">
                      <GitCompare className="w-3 h-3" /> {item.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button
                      onClick={() => handleApproveMatch(item.id)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-medium transition shadow-sm whitespace-nowrap"
                    >
                      <CheckCircle2 className="w-3 h-3" /> Setujui & Lanjut
                    </button>
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