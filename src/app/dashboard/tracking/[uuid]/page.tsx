"use client";
import React, { useState } from "react";
import { Search, Truck, CheckCircle2, Hash, Package, Clock } from "lucide-react";

export default function TrackingPage() {
  const [searchQuery, setSearchQuery] = useState("SUP-UUID-88A9-2026");
  const [trackingData, setTrackingData] = useState({
    uuid: "SUP-UUID-88A9-2026",
    sumber: "Toko Sejahtera Jaya",
    barang: "Kemeja Flanel (45 Pcs)",
    ekspedisi: "JNE",
    resi: "JNE-00129384",
    statusTerkini: "Lolos QC & Siap Didistribusikan",
    timeline: [
      { tahap: "Request Dibuat", waktu: "05 Sep 2026, 10:00", selesai: true },
      { tahap: "Penjemputan Ekspedisi (JNE)", waktu: "05 Sep 2026, 14:30", selesai: true },
      { tahap: "Barang Masuk & QC Gudang", waktu: "06 Sep 2026, 09:15", selesai: true },
      { tahap: "Sanitasi & Final Check", waktu: "06 Sep 2026, 16:00", selesai: true },
      { tahap: "Delivery Order / Diterima Penerima", waktu: "Dalam Proses", selesai: false },
    ],
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-100">Tracking Donasi & Resi</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">Penelusuran status perjalanan pakaian surplus secara real-time via UUID atau resi.</p>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm space-y-4">
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Masukkan UUID Transaksi atau Nomor Resi..."
              className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg pl-9 pr-3 py-2.5 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500 font-mono"
            />
          </div>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-6 py-2.5 rounded-lg transition shadow-sm">
            Lacak Status
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4 gap-4">
          <div>
            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Hasil Penelusuran</span>
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 font-mono flex items-center gap-2 mt-1">
              <Hash className="w-5 h-5 text-emerald-600" /> {trackingData.uuid}
            </h3>
          </div>
          <div className="flex items-center gap-2 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 px-3 py-1.5 rounded-lg text-xs font-medium">
            <Truck className="w-4 h-4" /> Resi: {trackingData.resi} ({trackingData.ekspedisi})
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-50 dark:bg-slate-950/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-sm">
          <div>
            <p className="text-xs text-slate-400">Sumber Donatur / Toko</p>
            <p className="font-semibold text-slate-800 dark:text-slate-200 mt-0.5">{trackingData.sumber}</p>
          </div>
          <div>
            <p className="text-xs text-slate-400">Jenis & Jumlah Barang</p>
            <p className="font-semibold text-slate-800 dark:text-slate-200 mt-0.5">{trackingData.barang}</p>
          </div>
          <div>
            <p className="text-xs text-slate-400">Status Terkini</p>
            <p className="font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5">{trackingData.statusTerkini}</p>
          </div>
        </div>

        <div className="space-y-4 pt-2">
          <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">Linimasa Perjalanan Donasi</h4>
          <div className="space-y-4 pl-2">
            {trackingData.timeline.map((item, index) => (
              <div key={index} className="flex items-start gap-4 relative">
                {index !== trackingData.timeline.length - 1 && (
                  <div className={`absolute left-3 top-6 w-0.5 h-8 ${item.selesai ? "bg-emerald-500" : "bg-slate-200 dark:bg-slate-800"}`}></div>
                )}
                <div className={`w-6 h-6 rounded-full flex items-center justify-center z-10 text-xs font-bold ${
                  item.selesai ? "bg-emerald-600 text-white" : "bg-slate-200 dark:bg-slate-800 text-slate-500"
                }`}>
                  {item.selesai ? "✓" : index + 1}
                </div>
                <div>
                  <p className={`text-sm font-medium ${item.selesai ? "text-slate-800 dark:text-slate-200" : "text-slate-400"}`}>
                    {item.tahap}
                  </p>
                  <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                    <Clock className="w-3 h-3" /> {item.waktu}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}