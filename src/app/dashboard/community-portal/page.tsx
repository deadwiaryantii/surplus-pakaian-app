"use client";
import React, { useState } from "react";
import { FileText, Plus, Upload, Hash, CheckCircle } from "lucide-react";

export default function CommunityPortalPage() {
  const [requests, setRequests] = useState([
    { id: 1, uuid: "COM-REQ-11A2-2026", komunitas: "Yayasan Panti Asuhan Berkah", kebutuhan: "Seragam & Kaos", jumlah: 50, proposal: "proposal-berkah.pdf", status: "Diajukan" },
    { id: 2, uuid: "COM-REQ-33C4-2026", komunitas: "Komunitas Pemulung Sejahtera", kebutuhan: "Jaket & Celana", jumlah: 80, proposal: "proposal-pemulung.pdf", status: "Disetujui" },
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const [komunitas, setKomunitas] = useState("");
  const [kebutuhan, setKebutuhan] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [proposal, setProposal] = useState("");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!komunitas || !kebutuhan || !jumlah) return;
    const randomUuid = `COM-REQ-${Math.random().toString(36).substring(2, 6).toUpperCase()}-2026`;
    const newItem = {
      id: requests.length + 1,
      uuid: randomUuid,
      komunitas,
      kebutuhan,
      jumlah: parseInt(jumlah),
      proposal: proposal || "proposal-umum.pdf",
      status: "Diajukan",
    };
    setRequests([...requests, newItem]);
    setKomunitas("");
    setKebutuhan("");
    setJumlah("");
    setProposal("");
    setIsOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-100">Community Request Portal</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">Portal permintaan pakaian oleh komunitas penerima beserta unggah proposal PDF.</p>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-4 py-2.5 rounded-lg transition shadow-sm"
        >
          <Plus className="w-4 h-4" />
          <span>Buat Request Komunitas</span>
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                <th className="py-3.5 px-6">UUID Request</th>
                <th className="py-3.5 px-6">Nama Komunitas</th>
                <th className="py-3.5 px-6">Kebutuhan Pakaian</th>
                <th className="py-3.5 px-6">Jumlah</th>
                <th className="py-3.5 px-6">Proposal PDF</th>
                <th className="py-3.5 px-6">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
              {requests.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition">
                  <td className="py-4 px-6 font-mono font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                    <Hash className="w-4 h-4" /> {item.uuid}
                  </td>
                  <td className="py-4 px-6 font-medium text-slate-800 dark:text-slate-200">{item.komunitas}</td>
                  <td className="py-4 px-6 text-slate-600 dark:text-slate-400">{item.kebutuhan}</td>
                  <td className="py-4 px-6 font-bold text-slate-800 dark:text-slate-200">{item.jumlah} Pcs</td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      <FileText className="w-3.5 h-3.5 text-emerald-600" /> {item.proposal}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400">
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
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Ajukan Permintaan Komunitas</h3>
            <form onSubmit={handleAdd} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Nama Komunitas</label>
                <input
                  type="text"
                  value={komunitas}
                  onChange={(e) => setKomunitas(e.target.value)}
                  placeholder="Contoh: Panti Asuhan Harapan"
                  required
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Detail Kebutuhan Pakaian</label>
                <input
                  type="text"
                  value={kebutuhan}
                  onChange={(e) => setKebutuhan(e.target.value)}
                  placeholder="Contoh: Kemeja & Celana"
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
                  placeholder="50"
                  required
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Upload Proposal PDF</label>
                <input
                  type="text"
                  value={proposal}
                  onChange={(e) => setProposal(e.target.value)}
                  placeholder="Nama file: proposal-panti.pdf"
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
                  Kirim Request PDF
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}