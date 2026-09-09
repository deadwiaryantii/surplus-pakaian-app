"use client";
import React from "react";
import { Package, Store, CheckCircle2, Truck, ArrowUpRight, TrendingUp } from "lucide-react";

export default function DashboardPage() {
  const stats = [
    { title: "Total Surplus Diselamatkan", value: "1,245 Pcs", change: "+12% bulan ini", icon: Package, color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/50" },
    { title: "Mitra Toko Aktif", value: "38 Toko", change: "+4 baru", icon: Store, color: "text-blue-600 bg-blue-50 dark:bg-blue-950/50" },
    { title: "Lolos Quality Control", value: "980 Pcs", change: "85% tingkat kelayakan", icon: CheckCircle2, color: "text-indigo-600 bg-indigo-50 dark:bg-indigo-950/50" },
    { title: "Delivery Order Disalurkan", value: "420 Pcs", change: "15 Komunitas", icon: Truck, color: "text-amber-600 bg-amber-50 dark:bg-amber-950/50" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-100">Dashboard Eksekutif</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">Ringkasan sistem pintar pengelolaan surplus pakaian berbasis ekonomi sirkular.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{item.title}</span>
                <div className={`p-2.5 rounded-lg ${item.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">{item.value}</div>
                <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <ArrowUpRight className="w-3 h-3" /> {item.change}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">Statistik Barang Masuk vs Keluar</h3>
            <span className="text-xs bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 px-2.5 py-1 rounded-full font-medium">Tahun 2026</span>
          </div>
          <div className="h-64 flex items-center justify-center bg-slate-50 dark:bg-slate-950/50 rounded-lg border border-dashed border-slate-200 dark:border-slate-800">
            <div className="text-center text-slate-400 dark:text-slate-500 text-sm flex flex-col items-center gap-2">
              <TrendingUp className="w-8 h-8 text-emerald-600 animate-pulse" />
              <span>Grafik Analisis Sirkular Aktif (Ready to sync with Backend)</span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-2">Aktivitas Sistem Terbaru</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Log pembaruan status transaksi & QC.</p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="w-2 h-2 mt-1.5 rounded-full bg-emerald-500"></div>
                <div>
                  <p className="text-xs font-medium text-slate-800 dark:text-slate-200">QC Berhasil: STK-092</p>
                  <p className="text-[11px] text-slate-400">10 menit lalu oleh Admin QC</p>
                </div>
              </div>
              <div className="flex items-start gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="w-2 h-2 mt-1.5 rounded-full bg-blue-500"></div>
                <div>
                  <p className="text-xs font-medium text-slate-800 dark:text-slate-200">Request Baru dari Toko A</p>
                  <p className="text-[11px] text-slate-400">45 menit lalu via JNE</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 mt-1.5 rounded-full bg-amber-500"></div>
                <div>
                  <p className="text-xs font-medium text-slate-800 dark:text-slate-200">Delivery Order Disetujui</p>
                  <p className="text-[11px] text-slate-400">2 jam lalu ke Komunitas B</p>
                </div>
              </div>
            </div>
          </div>
          <button className="w-full mt-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 text-xs font-medium py-2.5 rounded-lg transition">
            Lihat Semua Log Aktivitas
          </button>
        </div>
      </div>
    </div>
  );
}