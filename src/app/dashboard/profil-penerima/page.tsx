"use client";
import React, { useState } from "react";
import { Building2, Plus, Users, ClipboardList } from "lucide-react";

export default function ProfilPenerimaPage() {
  const [penerimaList, setPenerimaList] = useState([
    { id: 1, komunitas: "Yayasan Panti Asuhan Berkah", PIC: "Bapak Ahmad", kebutuhan: "Kemeja & Celana Anak", jumlah: 50, kriteria: "Ukuran S & M, Bahan Katun" },
    { id: 2, komunitas: "Komunitas Pemulung Sejahtera", PIC: "Ibu Siti", kebutuhan: "Kaos & Jaket Dewasa", jumlah: 80, kriteria: "Ukuran L & XL, Layak Pakai" },
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const [komunitas, setKomunitas] = useState("");
  const [pic, setPic] = useState("");
  const [kebutuhan, setKebutuhan] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [kriteria, setKriteria] = useState("");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!komunitas || !kebutuhan || !jumlah) return;
    const newItem = {
      id: penerimaList.length + 1,
      komunitas,
      PIC: pic,
      kebutuhan,
      jumlah: parseInt(jumlah),
      kriteria,
    };
    setPenerimaList([...penerimaList, newItem]);
    setKomunitas("");
    setPic("");
    setKebutuhan("");
    setJumlah("");
    setKriteria("");
    setIsOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-100">Profil & Kebutuhan Penerima</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">Pencatatan data komunitas dan detail parameter kebutuhan pakaian penyaluran.</p>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-4 py-2.5 rounded-lg transition shadow-sm"
        >
          <Plus className="w-4 h-4" />
          <span>Tambah Profil Penerima</span>
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                <th className="py-3.5 px-6">Nama Komunitas / Lembaga</th>
                <th className="py-3.5 px-6">Penanggung Jawab (PIC)</th>
                <th className="py-3.5 px-6">Jenis Kebutuhan</th>
                <th className="py-3.5 px-6">Jumlah (Pcs)</th>
                <th className="py-3.5 px-6">Kriteria / Spesifikasi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
              {penerimaList.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition">
                  <td className="py-4 px-6 font-medium text-slate-800 dark:text-slate-200 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xs">
                      <Building2 className="w-4 h-4" />
                    </div>
                    {item.komunitas}
                  </td>
                  <td className="py-4 px-6 text-slate-600 dark:text-slate-400 flex items-center gap-1.5 mt-2">
                    <Users className="w-3.5 h-3.5 text-emerald-600" /> {item.PIC}
                  </td>
                  <td className="py-4 px-6 font-semibold text-slate-800 dark:text-slate-200">{item.kebutuhan}</td>
                  <td className="py-4 px-6 font-bold text-slate-800 dark:text-slate-200">{item.jumlah} Pcs</td>
                  <td className="py-4 px-6 text-slate-600 dark:text-slate-400">{item.kriteria}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-md p-6 shadow-xl space-y-4">
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Tambah Profil Kebutuhan Penerima</h3>
            <form onSubmit={handleAdd} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Nama Komunitas / Lembaga</label>
                <input
                  type="text"
                  value={komunitas}
                  onChange={(e) => setKomunitas(e.target.value)}
                  placeholder="Contoh: Panti Asuhan Kasih"
                  required
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Nama Penanggung Jawab (PIC)</label>
                <input
                  type="text"
                  value={pic}
                  onChange={(e) => setPic(e.target.value)}
                  placeholder="Contoh: Bapak Budi"
                  required
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Jenis Kebutuhan Pakaian</label>
                <input
                  type="text"
                  value={kebutuhan}
                  onChange={(e) => setKebutuhan(e.target.value)}
                  placeholder="Contoh: Seragam Sekolah & Kaos"
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
                    placeholder="40"
                    required
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Kriteria Ukuran/Bahan</label>
                  <input
                    type="text"
                    value={kriteria}
                    onChange={(e) => setKriteria(e.target.value)}
                    placeholder="Ukuran S & M"
                    required
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500"
                  />
                </div>
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
                  Simpan Profil
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}