"use client";

import React, { useState } from "react";
import { Truck, Search, CheckCircle, Clock, ArrowUpRight } from "lucide-react";

export default function LogisticsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("ALL");

  const shipments = [
    { id: "RES-98214", destination: "Panti Asuhan Berkah Jaya", items: "120 Pcs Pakaian Layak", courier: "JNE Express", status: "DIKIRIM", date: "07 Sep 2026" },
    { id: "RES-98215", destination: "Komunitas Peduli Sesama", items: "85 Pcs Jaket & Celana", courier: "SiCepat", status: "PENDING", date: "08 Sep 2026" },
    { id: "RES-98216", destination: "Yayasan Harapan Kita", items: "210 Pcs Campuran", courier: "GoSend Instant", status: "SELESAI", date: "06 Sep 2026" },
  ];

  const filtered = shipments.filter(s => 
    (filterStatus === "ALL" || s.status === filterStatus) &&
    (s.id.toLowerCase().includes(searchTerm.toLowerCase()) || s.destination.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-100">Manajemen Logistik & Pengiriman</h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Pantau status resi, armada ekspedisi, dan pengiriman donasi pakaian.</p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button className="w-full sm:w-auto px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-medium shadow-sm transition flex items-center justify-center gap-2">
            <Truck className="w-4 h-4" /> Buat Resi Baru
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-center gap-4">
          <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 shrink-0"><Truck className="w-6 h-6"/></div>
          <div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Dalam Pengiriman</p>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">14 Paket</h3>
          </div>
        </div>
        <div className="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-center gap-4">
          <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 shrink-0"><Clock className="w-6 h-6"/></div>
          <div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Menunggu Pickup</p>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">5 Paket</h3>
          </div>
        </div>
        <div className="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-center gap-4">
          <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 shrink-0"><CheckCircle className="w-6 h-6"/></div>
          <div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Terkirim Minggu Ini</p>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">48 Paket</h3>
          </div>
        </div>
      </div>

      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-6">
        <div className="flex flex-col lg:flex-row justify-between gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Cari nomor resi atau tujuan..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0">
            {["ALL", "DIKIRIM", "PENDING", "SELESAI"].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-3 py-2 text-xs font-medium rounded-xl transition shrink-0 ${
                  filterStatus === status 
                    ? "bg-emerald-600 text-white shadow-sm" 
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto w-full">
          <table className="w-full text-left text-sm min-w-[750px]">
            <thead className="border-b border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider">
              <tr>
                <th className="pb-3 px-4">No. Resi</th>
                <th className="pb-3 px-4">Tujuan Penerima</th>
                <th className="pb-3 px-4">Detail Muatan</th>
                <th className="pb-3 px-4">Ekspedisi</th>
                <th className="pb-3 px-4">Status</th>
                <th className="pb-3 px-4 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
              {filtered.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition">
                  <td className="py-4 px-4 font-semibold text-emerald-600 dark:text-emerald-400">{item.id}</td>
                  <td className="py-4 px-4 font-medium text-slate-800 dark:text-slate-200">{item.destination}</td>
                  <td className="py-4 px-4 text-slate-600 dark:text-slate-400">{item.items}</td>
                  <td className="py-4 px-4 text-slate-600 dark:text-slate-400">{item.courier}</td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex px-2.5 py-1 rounded-full text-[11px] font-semibold ${
                      item.status === 'SELESAI' ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800' :
                      item.status === 'DIKIRIM' ? 'bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800' :
                      'bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-500 transition inline-flex items-center gap-1 text-xs">
                      Lacak <ArrowUpRight className="w-3.5 h-3.5" />
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