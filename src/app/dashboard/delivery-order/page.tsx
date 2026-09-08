"use client";
import React, { useState } from "react";
import { Truck, Plus, Hash, FileCheck, Package } from "lucide-react";

export default function DeliveryOrderPage() {
  const [doList, setDoList] = useState([
    { id: 1, doNumber: "DO-UUID-77A1-2026", penerima: "Yayasan Panti Asuhan Berkah", barang: "Jaket Casual", jumlah: 50, ekspedisi: "JNE", resi: "JNE-99382109", status: "Dalam Pengiriman" },
    { id: 2, doNumber: "DO-UUID-88B2-2026", penerima: "Komunitas Pemulung Sejahtera", barang: "Kemeja Flanel", jumlah: 40, ekspedisi: "J&T", resi: "JET-44112930", status: "Selesai Diterima" },
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const [penerima, setPenerima] = useState("");
  const [barang, setBarang] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [ekspedisi, setEkspedisi] = useState("JNE");
  const [resi, setResi] = useState("");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!penerima || !barang || !jumlah || !resi) return;
    const randomDo = `DO-UUID-${Math.random().toString(36).substring(2, 6).toUpperCase()}-2026`;
    const newItem = {
      id: doList.length + 1,
      doNumber: randomDo,
      penerima,
      barang,
      jumlah: parseInt(jumlah),
      ekspedisi,
      resi,
      status: "Dalam Pengiriman",
    };
    setDoList([...doList, newItem]);
    setPenerima("");
    setBarang("");
    setJumlah("");
    setResi("");
    setIsOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-100">Delivery Order (DO) & Pengeluaran Stok</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">Pembuatan dokumen DO dengan UUID, resi ekspedisi, dan pengurangan stok.</p>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-4 py-2.5 rounded-lg transition shadow-sm"
        >
          <Plus className="w-4 h-4" />
          <span>Buat Delivery Order</span>
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                <th className="py-3.5 px-6">Nomor DO / UUID</th>
                <th className="py-3.5 px-6">Lembaga Penerima</th>
                <th className="py-3.5 px-6">Daftar Barang & Jumlah</th>
                <th className="py-3.5 px-6">Ekspedisi & Resi</th>
                <th className="py-3.5 px-6">Status Pengiriman</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
              {doList.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition">
                  <td className="py-4 px-6 font-mono font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                    <Hash className="w-4 h-4" /> {item.doNumber}
                  </td>
                  <td className="py-4 px-6 font-medium text-slate-800 dark:text-slate-200">{item.penerima}</td>
                  <td className="py-4 px-6 text-slate-700 dark:text-slate-300">
                    {item.barang} <span className="font-bold">({item.jumlah} Pcs)</span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex flex-col text-xs">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">{item.ekspedisi}</span>
                      <span className="font-mono text-slate-500">{item.resi}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400">
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-md p-6 shadow-xl space-y-4">
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Buat Delivery Order (DO) Baru</h3>
            <form onSubmit={handleAdd} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Nama Lembaga Penerima</label>
                <input
                  type="text"
                  value={penerima}
                  onChange={(e) => setPenerima(e.target.value)}
                  placeholder="Contoh: Yayasan Panti Asuhan"
                  required
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Nama Barang Keluar</label>
                <input
                  type="text"
                  value={barang}
                  onChange={(e) => setBarang(e.target.value)}
                  placeholder="Contoh: Jaket Casual"
                  required
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Jumlah (Pcs)</label>
                  <input
                    type="number"
                    value={jumlah}
                    onChange={(e) => setJumlah(e.target.value)}
                    placeholder="30"
                    required
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Ekspedisi</label>
                  <select
                    value={ekspedisi}
                    onChange={(e) => setEkspedisi(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500"
                  >
                    <option value="JNE">JNE</option>
                    <option value="J&T">J&T</option>
                    <option value="SiCepat">SiCepat</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Nomor Resi Pengiriman</label>
                <input
                  type="text"
                  value={resi}
                  onChange={(e) => setResi(e.target.value)}
                  placeholder="Contoh: JNE-88219032"
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
                  Terbitkan DO
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}