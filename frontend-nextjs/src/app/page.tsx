"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { 
  Package, ArrowRight, ShieldCheck, HeartHandshake, 
  BarChart3, Truck, Award, Sparkles, Layers, X, CheckCircle2, Activity, Shirt,
  Scale, Flame, Heart, RefreshCcw
} from "lucide-react";

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState("retail");
  const [selectedStep, setSelectedStep] = useState<{ 
    title: string; 
    desc: string; 
    systemModule: string;
    liveStats: string;
    featuresList: string[];
  } | null>(null);

  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    setRotateX((-y / rect.height) * 12);
    setRotateY((x / rect.width) * 12);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const urgencyPoints = [
    {
      title: "Krisis Limbah Tekstil Nyata",
      desc: "Ribuan ton pakaian layak dari sektor ritel sering berakhir di tempat pembuangan akhir setiap tahunnya tanpa pengelolaan sirkular.",
      icon: Flame
    },
    {
      title: "Transparansi Penyaluran 100%",
      desc: "Setiap helai pakaian yang Anda donasikan dilacak menggunakan sistem nomor resi unik hingga sampai ke tangan komunitas yang membutuhkan.",
      icon: Scale
    },
    {
      title: "Dampak Sosial & Lingkungan",
      desc: "Mengurangi emisi karbon industri tekstil sekaligus memberikan senyuman dan sandang layak bagi saudara-saudara kita di pelosok negeri.",
      icon: Heart
    }
  ];

  const features = [
    { title: "Manajemen Stok Retail", desc: "Pencatatan inventaris dan surplus pakaian dari toko secara real-time.", icon: Package },
    { title: "Quality Control Ketat", desc: "Sistem seleksi dan sanitasi berlapis untuk menjamin kelayakan pakai.", icon: ShieldCheck },
    { title: "Matching Stok & Kebutuhan", desc: "Algoritma pencocokan otomatis antara ketersediaan dan profil komunitas.", icon: BarChart3 },
    { title: "Delivery Order & Resi", desc: "Integrasi ekspedisi logistik dengan pelacakan berbasis nomor resi.", icon: Truck },
    { title: "Portal Komunitas", desc: "Pengajuan proposal digital dan verifikasi kebutuhan penerima manfaat.", icon: HeartHandshake },
    { title: "Insentif Donatur", desc: "Sistem apresiasi transparan dan pencatatan kontribusi bagi mitra toko.", icon: Award },
  ];

  const stats = [
    { label: "Surplus Diselamatkan", value: "15,420+ Pcs" },
    { label: "Mitra Toko Bergabung", value: "45+ Toko" },
    { label: "Komunitas Penerima", value: "120+ Komunitas" },
    { label: "Tingkat Kepuasan", value: "99.2%" },
  ];

  const workflowSteps = [
    { 
      id: "retail", 
      title: "1. Pengumpulan Retail", 
      desc: "Pencatatan kelebihan stok dari berbagai gerai ritel rekanan secara terpusat.", 
      systemModule: "Modul Integrasi Ritel & Inventaris Pusat",
      liveStats: "45+ Gerai Toko Aktif Sinkronisasi Terpusat",
      featuresList: [
        "Pencatatan Store ID dan input batch surplus otomatis.",
        "Validasi kuantitas item real-time dari sistem kasir gerai.",
        "Penerbitan kode unik manifest pengiriman awal."
      ],
      icon: Package 
    },
    { 
      id: "qc", 
      title: "2. Quality Control & Sanitasi", 
      desc: "Pemeriksaan detail kelayakan serta proses sterilisasi pakaian sebelum didistribusikan.", 
      systemModule: "Modul Pengujian Mutu & Sterilisasi Higienis",
      liveStats: "99.8% Lolos Uji Sterilisasi Uap",
      featuresList: [
        "Pemeriksaan tingkat cacat kain, kancing, dan kelayakan fisik.",
        "Proses sanitasi suhu tinggi bersertifikasi ramah lingkungan.",
        "Pemberian label grading kualitas (Grade A, B, & Layak Salur)."
      ],
      icon: ShieldCheck 
    },
    { 
      id: "match", 
      title: "3. Sistem Pencocokan Cerdas", 
      desc: "Algoritma mendistribusikan jenis pakaian sesuai dengan spesifikasi kebutuhan komunitas.", 
      systemModule: "Modul Alokasi & Algoritma Penyaluran",
      liveStats: "120+ Komunitas Terverifikasi Sistem",
      featuresList: [
        "Pencatatan otomatis kategori ukuran, usia, dan musim cuaca.",
        "Verifikasi kuota panti asuhan dan yayasan sosial secara adil.",
        "Pencegahan penumpukan dan optimalisasi alokasi logistik."
      ],
      icon: BarChart3 
    },
    { 
      id: "deliver", 
      title: "4. Pengiriman & Tracking", 
      desc: "Distribusi transparan menggunakan ekspedisi terintegrasi dengan resi real-time.", 
      systemModule: "Modul Logistik, Ekspedisi & Pelacakan Resi",
      liveStats: "100% Terlacak Resi Kurir Ekspedisi",
      featuresList: [
        "Generasi dokumen pengiriman otomatis yang aman.",
        "Tracking posisi armada pengiriman berbasis nomor resi unik.",
        "Konfirmasi penerimaan digital bertanda tangan penerima manfaat."
      ],
      icon: Truck 
    },
  ];

  const testimonials = [
    { name: "Yayasan Berkah Kasih", role: "Mitra Komunitas", text: "ReThread sangat membantu yayasan kami mendapatkan pasokan pakaian layak berkualitas dengan cepat dan transparan." },
    { name: "Retail Fashion Hub", role: "Mitra Donatur Korporat", text: "Pengelolaan surplus jadi jauh lebih efisien sekaligus memberikan nilai tambah sosial bagi brand kami." },
    { name: "Siti Rahma", role: "Relawan Lapangan", text: "Sistem pelacakan resi dan manajemen gudangnya sangat rapi, transparan, dan mudah digunakan!" }
  ];

  return (
    <div className="relative z-10 min-h-screen bg-transparent text-slate-900 dark:text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-white overflow-x-hidden">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 sm:h-125 bg-emerald-500/10 dark:bg-emerald-500/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-40 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-teal-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute top-96 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '4s' }} />

      <section className="relative overflow-hidden py-12 sm:py-20 px-4 sm:px-6 lg:py-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-emerald-500/10 dark:bg-emerald-950/80 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold shadow-lg shadow-emerald-500/5 backdrop-blur-md animate-bounce">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Platform Ekosistem Sirkular Terpadu 2026
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[1.15]">
              Transformasi <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 via-teal-500 to-emerald-400 dark:from-emerald-400 dark:to-teal-300">Surplus Pakaian</span> Menjadi Harapan Berkelanjutan
            </h1>
            
            <p className="text-sm sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Menghubungkan kelebihan stok pakaian retail secara cerdas dengan komunitas yang membutuhkan melalui manajemen logistik, quality control, dan pelacakan transparan.
            </p>
          </div>

          <div className="lg:col-span-5 relative w-full max-w-md mx-auto lg:max-w-none">
            <div className="absolute inset-0 bg-linear-to-tr from-emerald-500 to-teal-400 rounded-3xl blur-2xl opacity-25 dark:opacity-35 scale-95 pointer-events-none" />
            <div className="relative bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 p-3 sm:p-4 rounded-3xl shadow-2xl shadow-emerald-900/10 dark:shadow-black/60 transform hover:scale-[1.02] transition-transform duration-500 overflow-hidden group">
              <div className="rounded-2xl overflow-hidden aspect-video relative shadow-inner">
                <img 
                  src="/konten1.jpg" 
                  alt="Donasi Pakaian Berkelanjutan" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent flex items-end p-4 sm:p-6">
                  <div className="text-white space-y-1">
                    <div className="text-[10px] sm:text-xs font-bold tracking-wider uppercase text-emerald-300">Gerakan Nyata</div>
                    <div className="text-xs sm:text-base font-extrabold">Penyaluran Layak Pakai Langsung ke Tangan Sesama</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="max-w-5xl mx-auto mt-12 sm:mt-20 relative px-2 sm:px-0">
          <div className="absolute inset-0 bg-linear-to-r from-emerald-500 to-teal-500 rounded-3xl blur-2xl opacity-20 dark:opacity-30 -rotate-1 scale-95 pointer-events-none" />
          
          <div 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
              transition: "transform 0.1s ease-out",
            }}
            className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-8 rounded-3xl shadow-2xl shadow-slate-900/10 dark:shadow-black/50 cursor-pointer"
          >
            <div className="flex items-center justify-between pb-4 sm:pb-6 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-linear-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center shadow-lg shadow-emerald-600/30 animate-bounce duration-1000 shrink-0">
                  <Shirt className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
                  <div className="absolute inset-0 rounded-2xl bg-white/20 animate-ping opacity-30 pointer-events-none" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">ReThread 3D Engine</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400">Interactive Ecosystem Hub</div>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500 animate-pulse" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-5 sm:pt-6 text-left">
              <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/50 hover:scale-105 transition-transform">
                <div className="text-emerald-600 dark:text-emerald-400 font-bold text-xs sm:text-sm">Status Gudang Utama</div>
                <div className="text-xl sm:text-2xl font-black text-slate-800 dark:text-slate-100 mt-1">8,450 Pcs</div>
                <div className="text-[11px] sm:text-xs text-emerald-600 dark:text-emerald-500 mt-2 font-medium">Siap Distribusi Tahap II</div>
              </div>
              <div className="p-4 sm:p-5 rounded-2xl bg-teal-50/50 dark:bg-teal-950/30 border border-teal-100 dark:border-teal-900/50 hover:scale-105 transition-transform">
                <div className="text-teal-600 dark:text-teal-400 font-bold text-xs sm:text-sm">Resi Aktif Kurir</div>
                <div className="text-xl sm:text-2xl font-black text-slate-800 dark:text-slate-100 mt-1">14 Pengiriman</div>
                <div className="text-[11px] sm:text-xs text-teal-600 dark:text-teal-500 mt-2 font-medium">Dalam Perjalanan</div>
              </div>
              <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/50 hover:scale-105 transition-transform">
                <div className="text-emerald-600 dark:text-emerald-400 font-bold text-xs sm:text-sm">Validasi Komunitas</div>
                <div className="text-xl sm:text-2xl font-black text-slate-800 dark:text-slate-100 mt-1">100% Verified</div>
                <div className="text-[11px] sm:text-xs text-emerald-600 dark:text-emerald-500 mt-2 font-medium">Zero Waste Certified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
            <RefreshCcw className="w-3.5 h-3.5" /> Alasan Kuat Berkontribusi
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight">Mengapa Anda Harus Berdonasi di ReThread?</h2>
          <p className="text-xs sm:text-base text-slate-600 dark:text-slate-400">Kami mengubah cara pandang pengelolaan sirkular pakaian agar setiap helai kain membawa arti nyata.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {urgencyPoints.map((point, index) => {
            const IconComp = point.icon;
            return (
              <div key={index} className="p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 space-y-4 group">
                <div className="p-3.5 sm:p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 w-fit group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                  <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-black tracking-tight">{point.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{point.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-y border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md py-10 sm:py-12 px-4 sm:px-6 shadow-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
          {stats.map((item, idx) => (
            <div key={idx} className="space-y-1 p-3 sm:p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
              <div className="text-2xl sm:text-5xl font-black text-emerald-600 dark:text-emerald-400">{item.value}</div>
              <div className="text-[11px] sm:text-sm font-semibold text-slate-600 dark:text-slate-400 mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 text-xs font-bold">
            <Layers className="w-3.5 h-3.5" /> Alur Sirkular Transparan
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight">Bagaimana ReThread Bekerja?</h2>
          <p className="text-xs sm:text-base text-slate-600 dark:text-slate-400">Klik pada setiap kartu alur untuk melihat transparansi proses operasional sistem.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {workflowSteps.map((step) => {
            const Icon = step.icon;
            const isActive = activeTab === step.id;
            return (
              <div 
                key={step.id}
                onClick={() => {
                  setActiveTab(step.id);
                  setSelectedStep(step);
                }}
                className={`p-6 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between group transform hover:-translate-y-2 ${
                  isActive 
                    ? "bg-emerald-600 text-white shadow-xl shadow-emerald-600/30 border-emerald-500 scale-105" 
                    : "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-emerald-500/50"
                }`}
              >
                <div>
                  <div className={`p-3 rounded-2xl w-fit mb-5 sm:mb-6 ${isActive ? "bg-white/20 text-white" : "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400"}`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-black tracking-tight mb-2">{step.title}</h3>
                  <p className={`text-xs sm:text-sm leading-relaxed ${isActive ? "text-emerald-100" : "text-slate-600 dark:text-slate-400"}`}>{step.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 dark:border-slate-800 flex items-center justify-between text-xs font-semibold">
                  <span>{isActive ? "Status: Aktif" : "Klik untuk detail"}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {selectedStep && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setSelectedStep(null)}
              className="absolute top-5 right-5 sm:top-6 sm:right-6 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white transition"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                <Activity className="w-3.5 h-3.5 animate-pulse" /> Status Operasional Sistem
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">{selectedStep.title}</h3>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-2">
              <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">Subsistem Terkait:</div>
              <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-3 py-1.5 rounded-xl border border-emerald-200 dark:border-emerald-900/50 break-all">
                {selectedStep.systemModule}
              </div>
              <div className="text-[11px] text-slate-500 pt-1">Metrik Kinerja: <span className="font-bold text-slate-700 dark:text-slate-300">{selectedStep.liveStats}</span></div>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Fitur & Automasi Terproteksi:</div>
              <ul className="space-y-2">
                {selectedStep.featuresList.map((feat, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium">Enkripsi End-to-End Terverifikasi</span>
              <button
                onClick={() => setSelectedStep(null)}
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl shadow-lg transition"
              >
                Tutup Jendela
              </button>
            </div>
          </div>
        </div>
      )}

      <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto w-full border-t border-slate-200/80 dark:border-slate-800">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-4">
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight">Modul Pintar Pengelolaan</h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Dirancang khusus untuk mengotomatisasi siklus hidup surplus pakaian dari hulu ke hilir.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => {
            const IconComponent = feat.icon;
            return (
              <div key={idx} className="p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="p-3.5 sm:p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 w-fit mb-5 sm:mb-6 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-black tracking-tight mb-3">{feat.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{feat.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight">Dampak Nyata & Kepercayaan</h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Apa kata mitra toko dan komunitas penerima manfaat setelah bergabung bersama ReThread.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testi, i) => (
              <div key={i} className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6 flex flex-col justify-between hover:scale-105 transition-transform">
                <p className="text-xs sm:text-sm italic text-slate-700 dark:text-slate-300 leading-relaxed">&ldquo;{testi.text}&rdquo;</p>
                <div>
                  <div className="font-bold text-sm text-slate-900 dark:text-white">{testi.name}</div>
                  <div className="text-[11px] sm:text-xs text-emerald-600 dark:text-emerald-400 font-medium">{testi.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto w-full text-center">
        <div className="relative overflow-hidden p-8 sm:p-16 rounded-3xl bg-linear-to-br from-emerald-600 via-teal-600 to-emerald-700 text-white shadow-2xl shadow-emerald-600/30 space-y-6 sm:space-y-8 transform hover:scale-[1.01] transition-transform">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_50%)] pointer-events-none" />
          <h2 className="text-2xl sm:text-5xl font-black tracking-tight relative z-10 leading-tight">Mulai Gerakan Kebaikan Sirkular Hari Ini</h2>
          <p className="text-xs sm:text-base text-emerald-100 max-w-2xl mx-auto relative z-10 font-medium">
            Bergabunglah bersama puluhan mitra retail dan komunitas lainnya dalam membangun ekosistem distribusi surplus pakaian yang berkelanjutan.
          </p>
          <div className="pt-2 relative z-10 flex items-center justify-center">
            <Link href="/register-mitra" className="w-full sm:w-auto px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold bg-white text-emerald-700 rounded-2xl shadow-lg hover:bg-emerald-50 transition-all duration-300">
              Daftar Mitra Sekarang
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}