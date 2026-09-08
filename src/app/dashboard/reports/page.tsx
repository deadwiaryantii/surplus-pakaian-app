"use client";
import React from "react";
import { BarChart3, Download, FileSpreadsheet, Package, Users, TrendingUp } from "lucide-react";

export default function ReportsPage() {
  const impactStats = [
    { label: "Total Pakaian Masuk", value: "1,520 Pcs", desc: "Dari seluruh toko & donatur mitra" },
    { label: "Total Pakaian Disalurkan", value: "1,100 Pcs", desc: "Kepada 25 komunitas penerima" },
    { label: "Tingkat Keberhasilan Sirkular", value: "86.4%", desc: "Efisiensi pengelolaan surplus" },
    { label: "Penerima Manfaat Aktif", value: "1,450 Jiwa", desc: "Masyarakat & anak asuh panti" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-100">Report & Impact Analysis</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">Laporan komprehensif aktivitas program sirkular, rekap stok, dan analisis dampak.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 text-sm font-medium px-4 py-2.5 rounded-lg transition">
            <Download className="w-4 h-4" /> Export PDF
          </button>
          <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-4 py-2.5 rounded-lg transition shadow-sm">
            <FileSpreadsheet className="w-4 h-4" /> Export Excel
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {impactStats.map((item, index) => (
          <div key={index} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{item.label}</span>
            <div className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-2">{item.value}</div>
            <p className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-1">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">Distribusi Kategori Pakaian</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs font-medium mb-1 text-slate-600 dark:text-slate-400">
                <span>Kemeja & Atasan (45%)</span>
                <span>684 Pcs</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <div className="bg-emerald-600 h-full rounded-full" style={{ width: "45%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs font-medium mb-1 text-slate-600 dark:text-slate-400">
                <span>Jaket & Outerwear (30%)</span>
                <span>456 Pcs</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <div className="bg-blue-600 h-full rounded-full" style={{ width: "30%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs font-medium mb-1 text-slate-600 dark:text-slate-400">
                <span>Celana & Bawahan (25%)</span>
                <span>380 Pcs</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <div className="bg-amber-600 h-full rounded-full" style={{ width: "25%" }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">Dampak Ekonomi Sirkular</h3>
          <div className="p-4 bg-slate-50 dark:bg-slate-950/50 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-slate-600 dark:text-slate-400">Pengurangan Limbah Tekstil</span>
              <span className="font-bold text-emerald-600 dark:text-emerald-400">3.4 Ton CO2eq</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-600 dark:text-slate-400">Efisiensi Nilai Ritel Surplus</span>
              <span className="font-bold text-slate-800 dark:text-slate-200">Rp 85.4 Juta</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-600 dark:text-slate-400">Total Komunitas Terbantu</span>
              <span className="font-bold text-slate-800 dark:text-slate-200">25 Lembaga</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}