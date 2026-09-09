"use client";
import React, { useState } from "react";
import { Store, Plus, Send, RefreshCw, Package } from "lucide-react";

export default function StokTokoPage() {
  const [stokList, setStokList] = useState([
    { id: 1, toko: "Toko Sejahtera Jaya", jenis: "Kemeja Flanel", kategori: "Stok Lama", jumlah: 45, status: "Tersedia" },
    { id: 2, toko: "Toko Fashion Mal", jenis: "Kaos Polos Sisa Produksi", kategori: "Stok Baru", jumlah: 120, status: "Diajukan Donasi" },
    { id: 3, toko: "Outlet Mega Style", jenis: "Celana Chino Retur", kategori: "Retur Layak", jumlah: 25, status: "Tersedia" },
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const [toko, setToko] = useState("");
  const [jenis, setJenis] = useState("");
  const [kategori, setKategori] = useState("Stok Lama");
  const [jumlah, setJumlah] = useState("");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!toko || !jenis || !jumlah) return;
    const newItem = {
      id: stokList.length + 1,
      toko,
      jenis,
      kategori,
      jumlah: parseInt(jumlah),
      status: "Tersedia",
    };
    setStokList([...stokList, newItem]);
    setToko("");
    setJenis("");
    setJumlah("");
    setIsOpen(false);
  };

  const handleAjukanDonasi = (id: number) => {
    setStokList(
      stokList.map((item) => (item.id === id ? { ...item, status: "Diajukan Donasi" } : item))
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-100">Manajemen Stok Toko</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">Pencatatan stok lama, stok baru, serta barang retur layak pakai dari toko mitra[cite: 1, 2].</p>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-4 py-2.5 rounded-lg transition shadow-sm"
        >
          <Plus className="w-4 h-4" />
          <span>Catat Stok Toko</span>
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                <th className="py-3.5 px-6">Nama Toko</th>
                <th className="py-3.5 px-6">Jenis Barang</th>
                <th className="py-3.5 px-6">Kategori Stok</th>
                <th className="py-3.5 px-6">Jumlah (Pcs)</th>
                <th className="py-3.5 px-6">Status Barang</th>
                <th className="py-3.5 px-6 text-right">Aksi / Donasi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
              {stokList.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition">
                  <td className="py-4 px-6 font-medium text-slate-800 dark:text-slate-200 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xs">
                      <Store className="w-4 h-4" />
                    </div>
                    {item.toko}
                  </td>
                  <td className="py-4 px-6 text-slate-700 dark:text-slate-300">{item.jenis}</td>
                  <td className="py-4 px-6">
                    <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {item.kategori}
                    </span>
                  </td>
                  <td className="py-4 px-6 font-bold text-slate-800 dark:text-slate-200">{item.jumlah} Pcs</td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                      item.status === "Diajukan Donasi"
                        ? "bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400"
                        : "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400"
                    }`}>
                      <Package className="w-3 h-3" /> {item.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    {item.status === "Tersedia" ? (
                      <button
                        onClick={() => handleAjukanDonasi(item.id)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-medium transition shadow-sm"
                      >
                        <Send className="w-3 h-3" /> Ajukan Surplus
                      </button>
                    ) : (
                      <span className="text-xs text-slate-400 italic">Sudah Diajukan</span>
                    )}
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
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Catat Stok Toko Baru</h3>
            <form onSubmit={handleAdd} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Nama Toko Mitra</label>
                <input
                  type="text"
                  value={toko}
                  onChange={(e) => setToko(e.target.value)}
                  placeholder="Contoh: Toko Sejahtera Jaya"
                  required
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Jenis Pakaian / Barang</label>
                <input
                  type="text"
                  value={jenis}
                  onChange={(e) => setJenis(e.target.value)}
                  placeholder="Contoh: Kemeja Flanel"
                  required
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Kategori Stok</label>
                <select
                  value={kategori}
                  onChange={(e) => setKategori(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500"
                >
                  <option value="Stok Lama">Stok Lama</option>
                  <option value="Stok Baru">Stok Baru</option>
                  <option value="Retur Layak">Retur Layak</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Jumlah (Pcs)</label>
                <input
                  type="number"
                  value={jumlah}
                  onChange={(e) => setJumlah(e.target.value)}
                  placeholder="Contoh: 50"
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
                  Simpan Stok
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}