"use client";
import React, { useState } from "react";
import { Award, Plus, CheckCircle, Gift } from "lucide-react";

export default function InsentifDonaturPage() {
  const [insentifList, setInsentifList] = useState([
    { id: 1, donatur: "Toko Sejahtera Jaya", transaksi: "SUP-UUID-88A9-2026", nominal: "Rp 500.000 (Voucher Belanja)", tanggal: "05 Sep 2026", status: "Telah Disalurkan" },
    { id: 2, donatur: "Donatur Budi", transaksi: "SUP-UUID-99B2-2026", nominal: "Rp 250.000 (Sertifikat & Reward)", tanggal: "06 Sep 2026", status: "Diproses" },
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const [donatur, setDonatur] = useState("");
  const [transaksi, setTransaksi] = useState("");
  const [nominal, setNominal] = useState("");
  const [tanggal, setTanggal] = useState("");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!donatur || !transaksi || !nominal || !tanggal) return;
    const newItem = {
      id: insentifList.length + 1,
      donatur,
      transaksi,
      nominal,
      tanggal,
      status: "Diproses",
    };
    setInsentifList([...insentifList, newItem]);
    setDonatur("");
    setTransaksi("");
    setNominal("");
    setTanggal("");
    setIsOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-100">Insentif & Apresiasi Donatur</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">Pencatatan pemberian apresiasi kepada donatur berdasarkan transaksi surplus.</p>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-4 py-2.5 rounded-lg transition shadow-sm"
        >
          <Plus className="w-4 h-4" />
          <span>Catat Insentif Baru</span>
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                <th className="py-3.5 px-6">Nama Donatur / Toko</th>
                <th className="py-3.5 px-6">Nomor Transaksi</th>
                <th className="py-3.5 px-6">Bentuk / Nominal Insentif</th>
                <th className="py-3.5 px-6">Tanggal Pemberian</th>
                <th className="py-3.5 px-6">Status Insentif</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
              {insentifList.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition">
                  <td className="py-4 px-6 font-medium text-slate-800 dark:text-slate-200 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xs">
                      <Award className="w-4 h-4" />
                    </div>
                    {item.donatur}
                  </td>
                  <td className="py-4 px-6 font-mono text-xs text-emerald-600 dark:text-emerald-400">{item.transaksi}</td>
                  <td className="py-4 px-6 font-semibold text-slate-800 dark:text-slate-200">{item.nominal}</td>
                  <td className="py-4 px-6 text-slate-600 dark:text-slate-400">{item.tanggal}</td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                      item.status === "Telah Disalurkan"
                        ? "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400"
                        : "bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400"
                    }`}>
                      <CheckCircle className="w-3 h-3" /> {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-md p-6 shadow-xl space-y-4">
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Catat Insentif Donatur</h3>
            <form onSubmit={handleAdd} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Nama Donatur / Toko</label>
                <input
                  type="text"
                  value={donatur}
                  onChange={(e) => setDonatur(e.target.value)}
                  placeholder="Contoh: Toko Sejahtera"
                  required
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Nomor Transaksi (UUID)</label>
                <input
                  type="text"
                  value={transaksi}
                  onChange={(e) => setTransaksi(e.target.value)}
                  placeholder="SUP-UUID-XXXX-2026"
                  required
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500 font-mono"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Bentuk / Nominal Insentif</label>
                <input
                  type="text"
                  value={nominal}
                  onChange={(e) => setNominal(e.target.value)}
                  placeholder="Contoh: Voucher Belanja Rp 300.000"
                  required
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Tanggal Pemberian</label>
                <input
                  type="text"
                  value={tanggal}
                  onChange={(e) => setTanggal(e.target.value)}
                  placeholder="Contoh: 07 Sep 2026"
                  required
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-medium transition shadow-sm"
                >
                  Simpan Insentif
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}