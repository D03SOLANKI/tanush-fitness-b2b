import React, { useState } from 'react';
import { CheckCircle2, AlertTriangle, ShieldCheck, UserCheck, UserX, Search, Filter, ShieldAlert } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const UserManagementTab: React.FC = () => {
  const { showToast } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState<'ALL' | 'GYM_OWNER' | 'JOB_SEEKER'>('ALL');
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'ACTIVE' | 'SUSPENDED'>('ALL');

  // Initial Mock Users synced with DB schema
  const [users, setUsers] = useState([
    {
      id: 'u-101',
      name: 'Vikram Singhania',
      email: 'vikram@apexfitness.com',
      mobile: '+91 98765 43210',
      role: 'GYM_OWNER',
      companyName: 'Apex Commercial Fitness Studio',
      gstNumber: '27AAAAA0000A1Z5',
      city: 'Mumbai',
      status: 'ACTIVE',
      isVerified: true,
    },
    {
      id: 'u-102',
      name: 'Rahul Sharma',
      email: 'rahul.trainer@gmail.com',
      mobile: '+91 91234 56789',
      role: 'JOB_SEEKER',
      companyName: '-',
      gstNumber: '-',
      city: 'Gurugram',
      status: 'ACTIVE',
      isVerified: false,
    },
    {
      id: 'u-103',
      name: 'Ananya Verma',
      email: 'ananya@goldgym.in',
      mobile: '+91 99887 76655',
      role: 'GYM_OWNER',
      companyName: 'Golds Gym Franchise',
      gstNumber: '07BBBBB1111B2Z3',
      city: 'Delhi NCR',
      status: 'ACTIVE',
      isVerified: false,
    },
    {
      id: 'u-104',
      name: 'Spam Recruiter Bot',
      email: 'spam@fakejobs.com',
      mobile: '+91 90000 00000',
      role: 'GYM_OWNER',
      companyName: 'Fake Gym Hub',
      gstNumber: 'INVALID',
      city: 'Unknown',
      status: 'SUSPENDED',
      isVerified: false,
    },
  ]);

  const handleToggleVerify = (userId: string) => {
    setUsers(prev =>
      prev.map(u => {
        if (u.id === userId) {
          const next = !u.isVerified;
          showToast(`GST Verification ${next ? 'Granted' : 'Revoked'} for ${u.name}`);
          return { ...u, isVerified: next };
        }
        return u;
      })
    );
  };

  const handleToggleStatus = (userId: string, currentStatus: string) => {
    const nextStatus = currentStatus === 'ACTIVE' ? 'SUSPENDED' : 'ACTIVE';
    setUsers(prev =>
      prev.map(u => {
        if (u.id === userId) {
          showToast(`Account status updated to ${nextStatus} for ${u.name}`, nextStatus === 'SUSPENDED' ? 'error' : 'success');
          return { ...u, status: nextStatus };
        }
        return u;
      })
    );
  };

  const filteredUsers = users.filter(u => {
    if (roleFilter !== 'ALL' && u.role !== roleFilter) return false;
    if (statusFilter !== 'ALL' && u.status !== statusFilter) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchName = u.name.toLowerCase().includes(q);
      const matchEmail = u.email.toLowerCase().includes(q);
      const matchCompany = u.companyName.toLowerCase().includes(q);
      if (!matchName && !matchEmail && !matchCompany) return false;
    }
    return true;
  });

  return (
    <div className="space-y-6 font-mono text-xs">
      {/* Header & Toolbars */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
        <div className="relative w-full sm:w-72">
          <input
            type="text"
            placeholder="Search name, email, company..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 pl-8 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
          />
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto overflow-x-auto">
          {/* Role Filter */}
          <select
            value={roleFilter}
            onChange={e => setRoleFilter(e.target.value as any)}
            className="bg-slate-50 border border-slate-200 rounded-xl p-2 text-xs font-bold text-slate-900 uppercase focus:outline-none"
          >
            <option value="ALL">All Roles ({users.length})</option>
            <option value="GYM_OWNER">Gym Owners</option>
            <option value="JOB_SEEKER">Job Seekers</option>
          </select>

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value as any)}
            className="bg-slate-50 border border-slate-200 rounded-xl p-2 text-xs font-bold text-slate-900 uppercase focus:outline-none"
          >
            <option value="ALL">All Statuses</option>
            <option value="ACTIVE">Active</option>
            <option value="SUSPENDED">Suspended</option>
          </select>
        </div>
      </div>

      {/* Users Data Table */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left divide-y divide-slate-100">
            <thead className="bg-slate-900 text-white font-mono text-[10px] font-bold uppercase tracking-wider">
              <tr>
                <th className="py-3.5 px-4">User & Contact</th>
                <th className="py-3.5 px-4">Role & Business</th>
                <th className="py-3.5 px-4">GST Number</th>
                <th className="py-3.5 px-4">GST Verification</th>
                <th className="py-3.5 px-4">Account Status</th>
                <th className="py-3.5 px-4 text-right">Admin Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {filteredUsers.map(user => (
                <tr key={user.id} className="hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-4">
                    <div className="font-bold text-slate-900 uppercase font-heading">{user.name}</div>
                    <div className="text-[10px] text-slate-500 font-normal">{user.email}</div>
                    <div className="text-[10px] text-blue-600 font-bold">{user.mobile}</div>
                  </td>

                  <td className="py-3 px-4">
                    <span
                      className={`inline-block px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider ${
                        user.role === 'GYM_OWNER' ? 'bg-blue-100 text-blue-800' : 'bg-emerald-100 text-emerald-800'
                      }`}
                    >
                      {user.role === 'GYM_OWNER' ? 'Gym Owner' : 'Job Seeker'}
                    </span>
                    <div className="text-[10px] text-slate-700 font-bold mt-1">{user.companyName}</div>
                    <div className="text-[9px] text-slate-400">{user.city}</div>
                  </td>

                  <td className="py-3 px-4 text-xs font-mono font-bold text-slate-700">
                    {user.gstNumber}
                  </td>

                  <td className="py-3 px-4">
                    {user.isVerified ? (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-lg border border-emerald-200">
                        <ShieldCheck className="w-3 h-3 text-emerald-600" /> GST Verified
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-1 rounded-lg border border-amber-200">
                        <AlertTriangle className="w-3 h-3 text-amber-600" /> Unverified
                      </span>
                    )}
                  </td>

                  <td className="py-3 px-4">
                    <span
                      className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                        user.status === 'ACTIVE'
                          ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                          : 'bg-rose-100 text-rose-900 border border-rose-300'
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>

                  <td className="py-3 px-4 text-right space-x-2">
                    <button
                      onClick={() => handleToggleVerify(user.id)}
                      className={`px-2.5 py-1.5 rounded-lg text-[10px] font-bold uppercase transition-all ${
                        user.isVerified
                          ? 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm'
                      }`}
                    >
                      {user.isVerified ? 'Unverify' : 'Verify GST'}
                    </button>

                    <button
                      onClick={() => handleToggleStatus(user.id, user.status)}
                      className={`px-2.5 py-1.5 rounded-lg text-[10px] font-bold uppercase transition-all ${
                        user.status === 'ACTIVE'
                          ? 'bg-rose-600 text-white hover:bg-rose-700 shadow-sm'
                          : 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm'
                      }`}
                    >
                      {user.status === 'ACTIVE' ? 'Suspend' : 'Activate'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
