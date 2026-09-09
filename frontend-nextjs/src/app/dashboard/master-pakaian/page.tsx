"use client";

import React, { useState } from "react";
import { Shirt, Plus, Trash2, Tag } from "lucide-react";

export default function MasterPakaianPage() {
  const [pakaianList, setPakaianList] = useState([
    { id: 1, jenis: "Kemeja Formal Pria", ukuran: "L", warna: "Putih", bahan: "Katun", kondisi: "Layak Pakai" },
    { id: 2, jenis: "Kaos Polos Anak", ukuran: "S", warna: "Biru", bahan: "Jersey", kondisi: "Baru / Sisa Produksi" },
    { id: 3, jenis: "Celana Jeans Wanita", ukuran: "M", warna: "Hitam", bahan: "Denim", kondisi: "Retur Layak" },
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const [jenis, setJenis] = useState("");
  const [ukuran, setUkuran] = useState("M");
  const [warna, setWarna] = useState("");
  const [bahan, setBahan] = useState("");
  const [kondisi, setKondisi] = useState("Layak Pakai");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!jenis || !warna || !bahan) return;
    const newItem = {
      id: pakaianList.length + 1,
      jenis,
      ukuran,
      warna,
      bahan,
      kondisi,
    };
    setPakaianList([...pakaianList, newItem]);
    setJenis("");
    setWarna("");
    setBahan("");
    setIsOpen(false);
  };

  const handleDelete = (id: number) => {
    setPakaianList(pakaianList.filter(item => item.id !== id));
  };

  return (
    <div className="space-y-6 w-full max-w-full overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-100">Master Data Pakaian</h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Pencatatan seragam jenis, ukuran, warna, bahan, dan kondisi pakaian surplus.</p>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-4 py-2.5 rounded-lg transition shadow-sm w-full sm:w-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Tambah Data Pakaian</span>
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse min-w-[650px]">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                <th className="py-3.5 px-6">Jenis Pakaian</th>
                <th className="py-3.5 px-6">Ukuran</th>
                <th className="py-3.5 px-6">Warna</th>
                <th className="py-3.5 px-6">Bahan</th>
                <th className="py-3.5 px-6">Kondisi</th>
                <th className="py-3.5 px-6 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
              {pakaianList.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition">
                  <td className="py-4 px-6 font-medium text-slate-800 dark:text-slate-200">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0">
                        <Shirt className="w-4 h-4" />
                      </div>
                      <span className="truncate">{item.jenis}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {item.ukuran}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-slate-600 dark:text-slate-400">{item.warna}</td>
                  <td className="py-4 px-6 text-slate-600 dark:text-slate-400">{item.bahan}</td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 whitespace-nowrap">
                      <Tag className="w-3 h-3" /> {item.kondisi}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="p-1.5 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-950/50 transition inline-flex items-center justify-center"
                      title="Hapus Data"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-md p-6 shadow-xl space-y-4 my-auto">
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Tambah Master Pakaian Baru</h3>
            <form onSubmit={handleAdd} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Jenis / Nama Pakaian</label>
                <input
                  type="text"
                  value={jenis}
                  onChange={(e) => setJenis(e.target.value)}
                  placeholder="Contoh: Jaket Denim Casual"
                  required
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Ukuran</label>
                  <select
                    value={ukuran}
                    onChange={(e) => setUkuran(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500"
                  >
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Warna</label>
                  <input
                    type="text"
                    value={warna}
                    onChange={(e) => setWarna(e.target.value)}
                    placeholder="Contoh: Navy"
                    required
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Bahan</label>
                <input
                  type="text"
                  value={bahan}
                  onChange={(e) => setBahan(e.target.value)}
                  placeholder="Contoh: Katun / Fleece"
                  required
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Kondisi Awal</label>
                <select
                  value={kondisi}
                  onChange={(e) => setKondisi(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500"
                >
                  <option value="Layak Pakai">Layak Pakai</option>
                  <option value="Baru / Sisa Produksi">Baru / Sisa Produksi</option>
                  <option value="Retur Layak">Retur Layak</option>
                </select>
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
                  Simpan Master
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}