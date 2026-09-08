"use client";
import React, { useState } from "react";
import { Package, MapPin, Store, CheckCircle, Plus } from "lucide-react";

export default function StokGoodPage() {
  const [stokGood, setStokGood] = useState([
    { id: 1, barang: "Jaket Casual", jumlah: 15, lokasi: "Rak Gudang A-01", sumber: "Donatur Budi", status: "Tersedia" },
    { id: 2, barang: "Kemeja Flanel", jumlah: 40, lokasi: "Rak Gudang B-03", sumber: "Toko Sejahtera Jaya", status: "Tersedia" },
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const [barang, setBarang] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [sumber, setSumber] = useState("");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!barang || !jumlah || !lokasi || !sumber) return;
    const newItem = {
      id: stokGood.length + 1,
      barang,
      jumlah: parseInt(jumlah),
      lokasi,
      sumber,
      status: "Tersedia",
    };
    setStokGood([...stokGood, newItem]);
    setBarang("");
    setJumlah("");
    setLokasi("");
    setSumber("");
    setIsOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-100">Monitoring Stok Layak (Stok Good)</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">Pencatatan pakaian lolos QC beserta jumlah, lokasi gudang, dan sumber donatur[cite: 1, 2].</p>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-4 py-2.5 rounded-lg transition shadow-sm"
        >
          <Plus className="w-4 h-4" />
          <span>Tambah Stok Gudang</span>
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                <th className="py-3.5 px-6">Jenis Barang</th>
                <th className="py-3.5 px-6">Jumlah Tersedia</th>
                <th className="py-3.5 px-6">Lokasi Gudang / Rak</th>
                <th className="py-3.5 px-6">Sumber / Donatur</th>
                <th className="py-3.5 px-6">Status Ketersediaan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
              {stokGood.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition">
                  <td className="py-4 px-6 font-medium text-slate-800 dark:text-slate-200 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xs">
                      <Package className="w-4 h-4" />
                    </div>
                    {item.barang}
                  </td>
                  <td className="py-4 px-6 font-bold text-slate-800 dark:text-slate-200">{item.jumlah} Pcs</td>
                  <td className="py-4 px-6 font-mono text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1.5 mt-2">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600" /> {item.lokasi}
                  </td>
                  <td className="py-4 px-6 text-slate-600 dark:text-slate-400">{item.sumber}</td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400">
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
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Tambah Pencatatan Stok Gudang</h3>
            <form onSubmit={handleAdd} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Nama Barang</label>
                <input
                  type="text"
                  value={barang}
                  onChange={(e) => setBarang(e.target.value)}
                  placeholder="Contoh: Jaket Casual"
                  required
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Jumlah (Pcs)</label>
                <input
                  type="number"
                  value={jumlah}
                  onChange={(e) => setJumlah(e.target.value)}
                  placeholder="25"
                  required
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Lokasi Gudang / Rak</label>
                <input
                  type="text"
                  value={lokasi}
                  onChange={(e) => setLokasi(e.target.value)}
                  placeholder="Contoh: Rak Gudang A-02"
                  required
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Sumber / Donatur</label>
                <input
                  type="text"
                  value={sumber}
                  onChange={(e) => setSumber(e.target.value)}
                  placeholder="Contoh: Toko Sejahtera"
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
                  Simpan Stok Gudang
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}