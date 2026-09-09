"use client";
import React, { useState } from "react";
import { Plus, Truck, Hash } from "lucide-react";

export default function RequestDeparturePage() {
  const [requests, setRequests] = useState([
    { id: 1, uuid: "SUP-UUID-88A9-2026", pengirim: "Toko Sejahtera Jaya", jenis: "Kemeja Flanel", jumlah: 45, ekspedisi: "JNE", resi: "JNE-00129384", status: "Diajukan" },
    { id: 2, uuid: "SUP-UUID-99B2-2026", pengirim: "Donatur Budi", jenis: "Jaket Casual", jumlah: 15, ekspedisi: "J&T", resi: "JET-88392011", status: "Dalam Pengiriman" },
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const [pengirim, setPengirim] = useState("");
  const [jenis, setJenis] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [ekspedisi, setEkspedisi] = useState("JNE");
  const [resi, setResi] = useState("");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pengirim || !jenis || !jumlah || !resi) return;
    const randomUuid = `SUP-UUID-${Math.random().toString(36).substring(2, 6).toUpperCase()}-2026`;
    const newReq = {
      id: requests.length + 1,
      uuid: randomUuid,
      pengirim,
      jenis,
      jumlah: parseInt(jumlah),
      ekspedisi,
      resi,
      status: "Diajukan",
    };
    setRequests([...requests, newReq]);
    setPengirim("");
    setJenis("");
    setJumlah("");
    setResi("");
    setIsOpen(false);
  };

  return (
    <div className="space-y-6 w-full max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-100">Request Departure & Resi Ekspedisi</h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Pengajuan pengambilan/penyerahan barang dengan UUID otomatis & resi JNE/J&T.</p>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition shadow-sm w-full sm:w-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Buat Request Baru</span>
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse min-w-[850px]">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                <th className="py-4 px-8">UUID Transaksi</th>
                <th className="py-4 px-8">Pengirim / Donatur</th>
                <th className="py-4 px-8">Jenis Barang</th>
                <th className="py-4 px-8">Jumlah</th>
                <th className="py-4 px-8">Ekspedisi & Resi</th>
                <th className="py-4 px-8">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
              {requests.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition">
                  <td className="py-4 px-8 font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                    <div className="flex items-center gap-2">
                      <Hash className="w-4 h-4 shrink-0" /> 
                      <span className="truncate">{item.uuid}</span>
                    </div>
                  </td>
                  <td className="py-4 px-8 font-medium text-slate-800 dark:text-slate-200">{item.pengirim}</td>
                  <td className="py-4 px-8 text-slate-600 dark:text-slate-400">{item.jenis}</td>
                  <td className="py-4 px-8 font-bold text-slate-800 dark:text-slate-200 whitespace-nowrap">{item.jumlah} Pcs</td>
                  <td className="py-4 px-8">
                    <div className="flex flex-col text-xs">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">{item.ekspedisi}</span>
                      <span className="font-mono text-slate-500">{item.resi}</span>
                    </div>
                  </td>
                  <td className="py-4 px-8">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 whitespace-nowrap">
                      <Truck className="w-3 h-3" /> {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-xl p-8 shadow-xl space-y-5 my-auto">
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">Buat Request Pengiriman Baru</h3>
            <form onSubmit={handleAdd} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Nama Pengirim / Toko</label>
                <input
                  type="text"
                  value={pengirim}
                  onChange={(e) => setPengirim(e.target.value)}
                  placeholder="Contoh: Toko Sejahtera"
                  required
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Jenis Pakaian</label>
                <input
                  type="text"
                  value={jenis}
                  onChange={(e) => setJenis(e.target.value)}
                  placeholder="Contoh: Kemeja Formal"
                  required
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Jumlah (Pcs)</label>
                  <input
                    type="number"
                    value={jumlah}
                    onChange={(e) => setJumlah(e.target.value)}
                    placeholder="30"
                    required
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Ekspedisi</label>
                  <select
                    value={ekspedisi}
                    onChange={(e) => setEkspedisi(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500"
                  >
                    <option value="JNE">JNE</option>
                    <option value="J&T">J&T</option>
                    <option value="SiCepat">SiCepat</option>
                    <option value="AnterAja">AnterAja</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Nomor Resi Pengiriman</label>
                <input
                  type="text"
                  value={resi}
                  onChange={(e) => setResi(e.target.value)}
                  placeholder="Contoh: JNE-99382109"
                  required
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div className="flex justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-5 py-2.5 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-medium transition shadow-sm"
                >
                  Kirim Request (Auto UUID)
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}