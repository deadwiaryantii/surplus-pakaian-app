"use client";
import React, { useState } from "react";
import { Users, UserPlus, Shield, CheckCircle, Ban, Trash2, Globe, Monitor, Activity, Clock, ShieldAlert, Edit3, ChevronRight, ChevronDown, Key, FileText, Plus, CheckSquare, Square } from "lucide-react";

export default function UsersManagementLayoutPage() {
  const [activeTab, setActiveTab] = useState<"users" | "roles" | "activity">("users");
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const [users, setUsers] = useState([
    { 
      id: 1, 
      name: "Admin Utama", 
      email: "admin@surplus.com", 
      role: "Admin", 
      status: "Aktif",
      lastOnline: "Baru saja",
      ipAddress: "192.168.1.10",
      device: "Chrome / Windows 11",
      activities: [
        { action: "Login ke sistem", time: "Hari ini, 08:00 WIB" },
        { action: "Memperbarui pengaturan sistem", time: "Hari ini, 09:15 WIB" }
      ]
    },
    { 
      id: 2, 
      name: "Toko Sejahtera Jaya", 
      email: "toko@sejahtera.com", 
      role: "Toko", 
      status: "Aktif",
      lastOnline: "10 menit lalu",
      ipAddress: "36.85.12.90",
      device: "Safari / macOS",
      activities: [
        { action: "Menambahkan stok baru (Kemeja Flanel)", time: "Kemarin, 14:20 WIB" },
        { action: "Mengajukan request departure", time: "Hari ini, 10:05 WIB" }
      ]
    },
  ]);

  const allSystemMenus = [
    "Dashboard Utama",
    "Manajemen User",
    "Master Data Pakaian",
    "Manajemen Stok Toko",
    "Request Departure & Resi",
    "Quality Control (QC)",
    "Stok Layak Gudang",
    "Profil Kebutuhan Komunitas",
    "Community Portal",
    "Stock & Requirement Matching",
    "Sanitasi & Final QC",
    "Delivery Order (DO)",
    "Tracking Donasi & Resi",
    "Report & Impact Analysis",
    "Insentif & Apresiasi Donatur",
    "Pengaturan Sistem"
  ];

  const [roles, setRoles] = useState([
    { 
      id: 1, 
      name: "Admin", 
      desc: "Akses penuh seluruh modul sistem sirkular", 
      permissions: [...allSystemMenus] 
    },
    { 
      id: 2, 
      name: "Toko", 
      desc: "Mengelola stok lama, baru, dan barang retur", 
      permissions: ["Dashboard Utama", "Manajemen Stok Toko", "Request Departure & Resi", "Tracking Donasi & Resi"] 
    },
    { 
      id: 3, 
      name: "Donatur", 
      desc: "Pengajuan surplus dan pelacakan resi pengiriman", 
      permissions: ["Dashboard Utama", "Request Departure & Resi", "Tracking Donasi & Resi", "Insentif & Apresiasi Donatur"] 
    },
    { 
      id: 4, 
      name: "Penerima", 
      desc: "Portal request komunitas dan penerimaan barang", 
      permissions: ["Dashboard Utama", "Profil Kebutuhan Komunitas", "Community Portal", "Tracking Donasi & Resi"] 
    },
  ]);

  const [activityLogs] = useState([
    { id: 1, user: "Admin Utama", role: "Admin", action: "Memperbarui profil pengguna Toko Sejahtera Jaya", time: "Hari ini, 14:20 WIB", ip: "192.168.1.10" },
    { id: 2, user: "Toko Sejahtera Jaya", role: "Toko", action: "Menambahkan data stok baru ke sistem", time: "Hari ini, 11:05 WIB", ip: "36.85.12.90" },
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);

  const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);
  const [isEditRoleOpen, setIsEditRoleOpen] = useState(false);
  const [roleName, setRoleName] = useState("");
  const [roleDesc, setRoleDesc] = useState("");
  const [rolePermissions, setRolePermissions] = useState<string[]>([]);
  const [editRoleId, setEditRoleId] = useState<number | null>(null);

  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newRole, setNewRole] = useState("Donatur");

  const [editId, setEditId] = useState<number | null>(null);
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editRole, setEditRole] = useState("Donatur");

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newEmail) return;
    const newUser = {
      id: users.length + 1,
      name: newName,
      email: newEmail,
      role: newRole,
      status: "Aktif",
      lastOnline: "Baru saja",
      ipAddress: "103.24.11.99",
      device: "Chrome / Windows 11",
      activities: [{ action: "Akun dibuat oleh Admin", time: "Baru saja" }],
    };
    setUsers([...users, newUser]);
    setNewName("");
    setNewEmail("");
    setIsOpen(false);
  };

  const handleOpenEdit = (user: any) => {
    setEditId(user.id);
    setEditName(user.name);
    setEditEmail(user.email);
    setEditRole(user.role);
    setIsEditOpen(true);
  };

  const handleUpdateUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editName || !editEmail || editId === null) return;

    setUsers(users.map(u => {
      if (u.id === editId) {
        const updated = {
          ...u,
          name: editName,
          email: editEmail,
          role: editRole,
          activities: [{ action: `Memperbarui data profil`, time: "Baru saja" }, ...u.activities]
        };
        if (selectedUser?.id === editId) setSelectedUser(updated);
        return updated;
      }
      return u;
    }));
    setIsEditOpen(false);
  };

  const handleDelete = (id: number) => {
    setUsers(users.filter(u => u.id !== id));
    if (selectedUser?.id === id) setSelectedUser(null);
  };

  const handleToggleBlock = (id: number) => {
    setUsers(users.map(u => {
      if (u.id === id) {
        const updatedStatus = u.status === "Aktif" ? "Diblokir" : "Aktif";
        const updatedUser = { ...u, status: updatedStatus };
        if (selectedUser?.id === id) setSelectedUser(updatedUser);
        return updatedUser;
      }
      return u;
    }));
  };

  const handleCheckboxToggle = (menu: string) => {
    if (rolePermissions.includes(menu)) {
      setRolePermissions(rolePermissions.filter(m => m !== menu));
    } else {
      setRolePermissions([...rolePermissions, menu]);
    }
  };

  const handleAddRole = (e: React.FormEvent) => {
    e.preventDefault();
    if (!roleName || !roleDesc) return;
    const newRoleObj = {
      id: roles.length + 1,
      name: roleName,
      desc: roleDesc,
      permissions: rolePermissions,
    };
    setRoles([...roles, newRoleObj]);
    setRoleName("");
    setRoleDesc("");
    setRolePermissions([]);
    setIsRoleModalOpen(false);
  };

  const handleOpenEditRole = (role: any) => {
    setEditRoleId(role.id);
    setRoleName(role.name);
    setRoleDesc(role.desc);
    setRolePermissions(role.permissions || []);
    setIsEditRoleOpen(true);
  };

  const handleUpdateRole = (e: React.FormEvent) => {
    e.preventDefault();
    if (!roleName || !roleDesc || editRoleId === null) return;
    setRoles(roles.map(r => r.id === editRoleId ? { ...r, name: roleName, desc: roleDesc, permissions: rolePermissions } : r));
    setIsEditRoleOpen(false);
    setRoleName("");
    setRoleDesc("");
    setRolePermissions([]);
  };

  const handleDeleteRole = (id: number) => {
    setRoles(roles.filter(r => r.id !== id));
  };

  return (
    <div className="space-y-6 w-full max-w-[105rem] mx-auto pb-6 overflow-hidden">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3 shadow-sm">
        <div 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center justify-between cursor-pointer select-none px-2 py-1"
        >
          <div className="flex items-center gap-2.5">
            <Users className="w-5 h-5 text-emerald-600 shrink-0" />
            <div>
              <h2 className="text-base font-bold text-slate-800 dark:text-slate-100">Manajemen Pengguna (Sub-Menu)</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">Kelola sub-modul: Users, Role Hak Akses, dan Activity Log.</p>
            </div>
          </div>
          <button className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition text-slate-600 dark:text-slate-300 shrink-0">
            {isMenuOpen ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="flex flex-wrap items-center gap-2 mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={() => setActiveTab("users")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition ${
                activeTab === "users" 
                  ? "bg-emerald-600 text-white shadow-sm" 
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              <Users className="w-3.5 h-3.5 shrink-0" /> Users List ({users.length})
            </button>
            <button
              onClick={() => setActiveTab("roles")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition ${
                activeTab === "roles" 
                  ? "bg-emerald-600 text-white shadow-sm" 
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              <Key className="w-3.5 h-3.5 shrink-0" /> Role & Hak Akses ({roles.length})
            </button>
            <button
              onClick={() => setActiveTab("activity")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition ${
                activeTab === "activity" 
                  ? "bg-emerald-600 text-white shadow-sm" 
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              <Activity className="w-3.5 h-3.5 shrink-0" /> Activity Log ({activityLogs.length})
            </button>
          </div>
        )}
      </div>

      {activeTab === "users" && (
        <div className="space-y-6">
          <div className="flex justify-end">
            <button
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-medium px-4 py-2.5 rounded-lg transition shadow-sm w-full sm:w-auto shrink-0"
            >
              <UserPlus className="w-4 h-4 shrink-0" />
              <span>Tambah Pengguna</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto w-full">
                <table className="w-full text-left border-collapse min-w-[700px]">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 text-[11px] sm:text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      <th className="py-3.5 px-6">Pengguna</th>
                      <th className="py-3.5 px-6">Peran & Status</th>
                      <th className="py-3.5 px-6">Koneksi & Device</th>
                      <th className="py-3.5 px-6 text-left">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-xs sm:text-sm">
                    {users.map((user) => (
                      <tr 
                        key={user.id} 
                        onClick={() => setSelectedUser(user)}
                        className={`cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition ${selectedUser?.id === user.id ? 'bg-emerald-50/50 dark:bg-emerald-950/20' : ''}`}
                      >
                        <td className="py-3.5 px-6">
                          <div className="flex items-center gap-3">
                            <div className="relative">
                              <div className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center font-bold text-xs shrink-0 border">
                                {user.name.charAt(0)}
                              </div>
                              <span className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-white dark:border-slate-900 ${
                                user.status === "Aktif" && user.lastOnline.includes("Baru") ? "bg-emerald-500 animate-pulse" :
                                user.status === "Aktif" ? "bg-blue-500" : "bg-red-500"
                              }`} />
                            </div>
                            <div className="overflow-hidden">
                              <p className="font-semibold text-slate-800 dark:text-slate-200 truncate max-w-[160px]">{user.name}</p>
                              <p className="text-[11px] text-slate-400 truncate max-w-[160px]">{user.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-3.5 px-6 space-y-1">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 whitespace-nowrap">
                            <Shield className="w-3 h-3 text-emerald-600 shrink-0" /> {user.role}
                          </span>
                          <div>
                            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium whitespace-nowrap ${
                              user.status === "Aktif" ? "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600" : "bg-red-50 dark:bg-red-950/50 text-red-600"
                            }`}>
                              {user.status === "Aktif" ? <CheckCircle className="w-2.5 h-2.5 shrink-0" /> : <Ban className="w-2.5 h-2.5 shrink-0" />}
                              {user.status}
                            </span>
                          </div>
                        </td>
                        <td className="py-3.5 px-6 text-xs">
                          <div className="text-slate-700 dark:text-slate-300 flex items-center gap-1 font-mono whitespace-nowrap">
                            <Globe className="w-3 h-3 text-emerald-600 shrink-0" /> {user.ipAddress}
                          </div>
                          <div className="text-slate-400 text-[11px] flex items-center gap-1 mt-0.5">
                            <Monitor className="w-3 h-3 shrink-0" /> <span className="truncate max-w-[140px]">{user.device}</span>
                          </div>
                          <div className="text-[10px] text-slate-400 mt-0.5 italic whitespace-nowrap">Online: {user.lastOnline}</div>
                        </td>
                        <td className="py-3.5 px-6 text-left" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-center justify-start gap-1">
                            <button
                              onClick={() => handleOpenEdit(user)}
                              className="p-1.5 rounded-lg text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/50 transition shrink-0"
                              title="Edit Pengguna"
                            >
                              <Edit3 className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleToggleBlock(user.id)}
                              className={`p-1.5 rounded-lg transition shrink-0 ${user.status === "Aktif" ? "text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-950/50" : "text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-950/50"}`}
                              title={user.status === "Aktif" ? "Blokir Pengguna" : "Aktifkan Pengguna"}
                            >
                              {user.status === "Aktif" ? <Ban className="w-4 h-4" /> : <CheckCircle className="w-4 h-4" />}
                            </button>
                            <button
                              onClick={() => handleDelete(user.id)}
                              className="p-1.5 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-950/50 transition shrink-0"
                              title="Hapus Pengguna"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                  <h3 className="text-base font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                    <Activity className="w-4 h-4 text-emerald-600 shrink-0" /> Detail Aktivitas & Audit
                  </h3>
                  <span className="text-[11px] font-mono text-slate-400">Live Log</span>
                </div>

                {selectedUser ? (
                  <div className="space-y-4 pt-4">
                    <div className="bg-slate-50 dark:bg-slate-950/50 p-3 rounded-lg border border-slate-200 dark:border-slate-800 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center font-bold text-sm shrink-0 border">
                        {selectedUser.name.charAt(0)}
                      </div>
                      <div className="space-y-0.5 overflow-hidden">
                        <p className="font-bold text-sm text-slate-800 dark:text-slate-100 truncate">{selectedUser.name}</p>
                        <p className="text-xs text-slate-500 truncate">{selectedUser.email} • <span className="font-semibold text-emerald-600">{selectedUser.role}</span></p>
                        <p className="text-[10px] font-mono text-slate-400">IP: {selectedUser.ipAddress} | {selectedUser.device}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Riwayat CRUD & Tindakan</h4>
                      <div className="space-y-2 max-h-[250px] overflow-y-auto pr-1">
                        {selectedUser.activities.map((act: any, idx: number) => (
                          <div key={idx} className="p-2.5 bg-slate-50 dark:bg-slate-950/30 border border-slate-100 dark:border-slate-800 rounded-lg text-xs space-y-1">
                            <p className="font-medium text-slate-700 dark:text-slate-300">{act.action}</p>
                            <p className="text-[10px] text-slate-400 flex items-center gap-1">
                              <Clock className="w-3 h-3 shrink-0" /> {act.time}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="py-20 text-center space-y-2">
                    <ShieldAlert className="w-8 h-8 text-slate-300 mx-auto" />
                    <p className="text-xs text-slate-400">Klik salah satu baris pengguna di tabel untuk melihat riwayat aktivitas CRUD & log perangkat mereka.</p>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400 text-center">
                Sistem pengawasan keamanan & manajemen sesi otomatis SurplusPakaian.
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "roles" && (
        <div className="space-y-6">
          <div className="flex justify-end">
            <button
              onClick={() => { setRoleName(""); setRoleDesc(""); setRolePermissions([]); setIsRoleModalOpen(true); }}
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-medium px-4 py-2.5 rounded-lg transition shadow-sm w-full sm:w-auto shrink-0"
            >
              <Plus className="w-4 h-4 shrink-0" />
              <span>Tambah Role Baru</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {roles.map((role) => (
              <div key={role.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm space-y-4 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-md text-xs font-bold bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 whitespace-nowrap">
                      {role.name}
                    </span>
                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        onClick={() => handleOpenEditRole(role)}
                        className="p-1.5 rounded-lg text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/50 transition"
                        title="Edit Role"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteRole(role.id)}
                        className="p-1.5 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-950/50 transition"
                        title="Hapus Role"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{role.desc}</p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
                  <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Hak Akses Menu ({role.permissions?.length || 0}):</p>
                  <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto pr-1">
                    {role.permissions?.map((p, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 whitespace-nowrap">
                        ✓ {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "activity" && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
            <FileText className="w-4 h-4 text-emerald-600 shrink-0" /> Log Aktivitas Sistem (Activity Log)
          </h3>
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {activityLogs.map((log) => (
              <div key={log.id} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{log.action}</p>
                  <p className="text-xs text-slate-400">Oleh <span className="font-medium text-slate-600 dark:text-slate-300">{log.user}</span> ({log.role}) • IP: {log.ip}</p>
                </div>
                <span className="text-xs font-mono text-slate-400 bg-slate-50 dark:bg-slate-950 px-2.5 py-1 rounded-md w-fit whitespace-nowrap">
                  {log.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-md p-6 shadow-xl space-y-4 my-auto">
            <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100">Tambah Pengguna Baru</h3>
            <form onSubmit={handleAddUser} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Nama Lengkap</label>
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="Contoh: PT Toko Berkah"
                  required
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2 text-xs sm:text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Email Aktif</label>
                <input
                  type="email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  placeholder="email@domain.com"
                  required
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2 text-xs sm:text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Pilih Peran (Role)</label>
                <select
                  value={newRole}
                  onChange={(e) => setNewRole(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2 text-xs sm:text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500"
                >
                  {roles.map((r) => (
                    <option key={r.id} value={r.name}>{r.name}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col-reverse sm:flex-row justify-end gap-2 sm:gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="w-full sm:w-auto px-4 py-2 rounded-lg text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs sm:text-sm font-medium transition shadow-sm"
                >
                  Simpan User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isEditOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-md p-6 shadow-xl space-y-4 my-auto">
            <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100">Edit Pengguna & Profil</h3>
            <form onSubmit={handleUpdateUser} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Nama Lengkap</label>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  required
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2 text-xs sm:text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Email Aktif</label>
                <input
                  type="email"
                  value={editEmail}
                  onChange={(e) => setEditEmail(e.target.value)}
                  required
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2 text-xs sm:text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Pilih Peran (Role)</label>
                <select
                  value={editRole}
                  onChange={(e) => setEditRole(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2 text-xs sm:text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500"
                >
                  {roles.map((r) => (
                    <option key={r.id} value={r.name}>{r.name}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col-reverse sm:flex-row justify-end gap-2 sm:gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsEditOpen(false)}
                  className="w-full sm:w-auto px-4 py-2 rounded-lg text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs sm:text-sm font-medium transition shadow-sm"
                >
                  Simpan Perubahan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isRoleModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-xl p-6 shadow-xl space-y-4 my-auto max-h-[90vh] flex flex-col">
            <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100">Tambah Role Hak Akses Baru</h3>
            <form onSubmit={handleAddRole} className="space-y-4 overflow-y-auto pr-1">
              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Nama Role</label>
                <input
                  type="text"
                  value={roleName}
                  onChange={(e) => setRoleName(e.target.value)}
                  placeholder="Contoh: Auditor"
                  required
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2 text-xs sm:text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Deskripsi Hak Akses</label>
                <textarea
                  value={roleDesc}
                  onChange={(e) => setRoleDesc(e.target.value)}
                  placeholder="Contoh: Memeriksa audit log dan laporan sirkular"
                  required
                  rows={2}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2 text-xs sm:text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500 resize-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-2">Centang Menu Hak Akses:</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-slate-50 dark:bg-slate-950/50 p-3 rounded-xl border border-slate-200 dark:border-slate-800 max-h-48 overflow-y-auto">
                  {allSystemMenus.map((menu, idx) => {
                    const isChecked = rolePermissions.includes(menu);
                    return (
                      <div 
                        key={idx} 
                        onClick={() => handleCheckboxToggle(menu)}
                        className="flex items-center gap-2 cursor-pointer p-1.5 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-lg text-xs text-slate-700 dark:text-slate-300 select-none"
                      >
                        {isChecked ? (
                          <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0" />
                        ) : (
                          <Square className="w-4 h-4 text-slate-400 shrink-0" />
                        )}
                        <span className="truncate">{menu}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col-reverse sm:flex-row justify-end gap-2 sm:gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsRoleModalOpen(false)}
                  className="w-full sm:w-auto px-4 py-2 rounded-lg text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs sm:text-sm font-medium transition shadow-sm"
                >
                  Simpan Role
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isEditRoleOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-xl p-6 shadow-xl space-y-4 my-auto max-h-[90vh] flex flex-col">
            <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100">Edit Role & Hak Akses Menu</h3>
            <form onSubmit={handleUpdateRole} className="space-y-4 overflow-y-auto pr-1">
              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Nama Role</label>
                <input
                  type="text"
                  value={roleName}
                  onChange={(e) => setRoleName(e.target.value)}
                  required
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2 text-xs sm:text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Deskripsi Hak Akses</label>
                <textarea
                  value={roleDesc}
                  onChange={(e) => setRoleDesc(e.target.value)}
                  required
                  rows={2}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2 text-xs sm:text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500 resize-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-2">Centang Menu Hak Akses:</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-slate-50 dark:bg-slate-950/50 p-3 rounded-xl border border-slate-200 dark:border-slate-800 max-h-48 overflow-y-auto">
                  {allSystemMenus.map((menu, idx) => {
                    const isChecked = rolePermissions.includes(menu);
                    return (
                      <div 
                        key={idx} 
                        onClick={() => handleCheckboxToggle(menu)}
                        className="flex items-center gap-2 cursor-pointer p-1.5 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-lg text-xs text-slate-700 dark:text-slate-300 select-none"
                      >
                        {isChecked ? (
                          <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0" />
                        ) : (
                          <Square className="w-4 h-4 text-slate-400 shrink-0" />
                        )}
                        <span className="truncate">{menu}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col-reverse sm:flex-row justify-end gap-2 sm:gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsEditRoleOpen(false)}
                  className="w-full sm:w-auto px-4 py-2 rounded-lg text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs sm:text-sm font-medium transition shadow-sm"
                >
                  Simpan Perubahan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}