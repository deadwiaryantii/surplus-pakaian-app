"use client";

import React, { useState } from "react";
import { Plus, MapPin, Building } from "lucide-react";

export default function AdminWarehousePage() {
  const [warehouses, setWarehouses] = useState([
    { id: 1, name: "Gudang Utama Indramayu", location: "Jl. Industri No. 45, Indramayu", capacity: "85%", manager: "Ahmad Fauzi", items: "4,500 Pcs" },
    { id: 2, name: "Depo Transit Cirebon", location: "Jl. Siliwangi No. 12, Cirebon", capacity: "42%", manager: "Dewi Lestari", items: "1,800 Pcs" },
    { id: 3, name: "Pusat Distribusi Bekasi", location: "Kawasan Logistik Blok C, Bekasi", capacity: "90%", manager: "Rian Hidayat", items: "6,200 Pcs" },
  ]);

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-100">Manajemen Gudang & Depo</h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Kelola kapasitas penyimpanan, lokasi gudang fisik, dan penanggung jawab.</p>
        </div>
        <button className="w-full sm:w-auto px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-medium shadow-sm transition flex items-center justify-center gap-2">
          <Plus className="w-4 h-4" /> Tambah Gudang Baru
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {warehouses.map((wh) => (
          <div key={wh.id} className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-2">
                <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Building className="w-6 h-6" />
                </div>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 ${
                  parseInt(wh.capacity) > 80 ? 'bg-red-50 dark:bg-red-950/50 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800' :
                  'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800'
                }`}>
                  Kapasitas {wh.capacity}
                </span>
              </div>

              <div>
                <h3 className="font-bold text-slate-800 dark:text-slate-100 text-base">{wh.name}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 flex items-start gap-1.5 mt-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" /> 
                  <span className="leading-relaxed">{wh.location}</span>
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-xs text-slate-600 dark:text-slate-400">
              <div>
                <p className="text-slate-400">Pengelola</p>
                <p className="font-semibold text-slate-800 dark:text-slate-200">{wh.manager}</p>
              </div>
              <div className="text-right">
                <p className="text-slate-400">Total Stok</p>
                <p className="font-semibold text-emerald-600 dark:text-emerald-400">{wh.items}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}