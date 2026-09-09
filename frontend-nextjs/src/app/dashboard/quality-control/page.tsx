"use client";
import React, { useState } from "react";
import { CheckCircle2, XCircle, ShieldCheck, Hash } from "lucide-react";

export default function QualityControlPage() {
  const [qcList, setQcList] = useState([
    { id: 1, uuid: "SUP-UUID-88A9-2026", barang: "Kemeja Flanel", jumlah: 45, sumber: "Toko Sejahtera Jaya", status: "Menunggu QC" },
    { id: 2, uuid: "SUP-UUID-99B2-2026", barang: "Jaket Casual", jumlah: 15, sumber: "Donatur Budi", status: "Lolos QC (Done)" },
  ]);

  const handleUpdateStatus = (id: number, status: string) => {
    setQcList(
      qcList.map((item) => (item.id === id ? { ...item, status } : item))
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-100">Quality Control (QC) Barang Masuk</h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Pemeriksaan kondisi fisik pakaian surplus dan validasi kelayakan sebelum masuk gudang.</p>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse min-w-[750px]">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                <th className="py-3.5 px-6">UUID Transaksi</th>
                <th className="py-3.5 px-6">Sumber / Donatur</th>
                <th className="py-3.5 px-6">Jenis Barang</th>
                <th className="py-3.5 px-6">Jumlah</th>
                <th className="py-3.5 px-6">Status QC</th>
                <th className="py-3.5 px-6 text-right">Aksi Pemeriksaan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
              {qcList.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition">
                  <td className="py-4 px-6 font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                    <div className="flex items-center gap-2">
                      <Hash className="w-4 h-4 shrink-0" /> 
                      <span className="truncate">{item.uuid}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 font-medium text-slate-800 dark:text-slate-200">{item.sumber}</td>
                  <td className="py-4 px-6 text-slate-600 dark:text-slate-400">{item.barang}</td>
                  <td className="py-4 px-6 font-bold text-slate-800 dark:text-slate-200">{item.jumlah} Pcs</td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                      item.status.includes("Lolos")
                        ? "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400"
                        : item.status.includes("Ditolak")
                        ? "bg-red-50 dark:bg-red-950/50 text-red-600 dark:text-red-400"
                        : "bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400"
                    }`}>
                      <ShieldCheck className="w-3 h-3" /> {item.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleUpdateStatus(item.id, "Lolos QC (Done)")}
                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-medium transition shadow-sm"
                      >
                        <CheckCircle2 className="w-3 h-3" /> Lolos
                      </button>
                      <button
                        onClick={() => handleUpdateStatus(item.id, "Ditolak (Reject)")}
                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-medium transition shadow-sm"
                      >
                        <XCircle className="w-3 h-3" /> Tolak
                      </button>
                    </div>
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