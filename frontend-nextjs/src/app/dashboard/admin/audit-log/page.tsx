"use client";

import React from "react";
import { ShieldAlert, RefreshCw } from "lucide-react";

export default function AuditLogPage() {
  const logs = [
    { id: 1, user: "Admin Pengelola", role: "Super Admin", action: "Mengubah status verifikasi komunitas #COM-402", time: "Hari ini, 14:20 WIB", type: "UPDATE" },
    { id: 2, user: "Siti Rahma", role: "QC Officer", action: "Menyetujui Quality Control batch pakaian #PK-881", time: "Hari ini, 11:05 WIB", type: "SUCCESS" },
    { id: 3, user: "Budi Santoso", role: "Warehouse Staff", action: "Menambahkan stok gudang kategori jaket winter", time: "Kemarin, 16:45 WIB", type: "CREATE" },
    { id: 4, user: "System Auto", role: "Daemon", action: "Melakukan sinkronisasi database stok toko ritel", time: "Kemarin, 00:00 WIB", type: "SYSTEM" },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto w-full overflow-hidden">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-100">Audit Log & Aktivitas Sistem</h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Rekam jejak seluruh tindakan dan perubahan data yang dilakukan pengguna dalam sistem.</p>
        </div>
        <button className="w-full sm:w-auto px-4 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl text-sm font-medium transition flex items-center justify-center gap-2">
          <RefreshCw className="w-4 h-4" /> Muat Ulang Log
        </button>
      </div>

      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="divide-y divide-slate-100 dark:divide-slate-800/60">
          {logs.map((log) => (
            <div key={log.id} className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-start gap-3">
                <div className={`p-2.5 rounded-xl mt-0.5 shrink-0 ${
                  log.type === 'SUCCESS' ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400' :
                  log.type === 'UPDATE' ? 'bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400' :
                  log.type === 'CREATE' ? 'bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400' :
                  'bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400'
                }`}>
                  <ShieldAlert className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{log.action}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Oleh <span className="font-medium text-slate-700 dark:text-slate-300">{log.user}</span> ({log.role})
                  </p>
                </div>
              </div>
              <div className="sm:text-right shrink-0 pl-11 sm:pl-0">
                <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 whitespace-nowrap inline-block">
                  {log.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}