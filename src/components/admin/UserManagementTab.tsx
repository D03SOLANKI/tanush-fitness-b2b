import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck, UserCheck, UserX, Search, Filter, ShieldAlert } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const UserManagementTab: React.FC = () => {
  const { userList, updateUserStatus, verifyUserGST, showToast, accessToken } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState<'ALL' | 'GYM_OWNER' | 'JOB_SEEKER'>('ALL');
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'ACTIVE' | 'SUSPENDED'>('ALL');

  const handleVerify = (userId: string, isVerified: boolean) => {
    verifyUserGST(userId, !isVerified);
    fetch(`http://localhost:5000/api/admin/users/${userId}/verify`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ isVerified: !isVerified }),
    }).catch(err => console.log('Backend sync notice:', err.message));
  };

  const handleStatusChange = (userId: string, status: 'ACTIVE' | 'SUSPENDED' | 'DEACTIVATED') => {
    updateUserStatus(userId, status);
    fetch(`http://localhost:5000/api/admin/users/${userId}/status`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ status }),
    }).catch(err => console.log('Backend sync notice:', err.message));
  };

  const filteredUsers = userList.filter(u => {
    if (roleFilter !== 'ALL' && u.role !== roleFilter) return false;
    if (statusFilter !== 'ALL' && u.status !== statusFilter) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        u.name.toLowerCase().includes(q) ||
        u.email.toLowerCase().includes(q) ||
        u.mobile.includes(q) ||
        (u.companyName && u.companyName.toLowerCase().includes(q))
      );
    }
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gray-900 border border-gray-800 p-6 rounded-2xl">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-amber-500" /> User Management & GST Verification Portal
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Verify Gym Owner GST business credentials and enforce account status controls (Activate, Suspend, Deactivate).
          </p>
        </div>
      </div>

      {/* Filter & Search Toolbar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-gray-900/40 p-4 rounded-xl border border-gray-800">
        <div className="relative">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Search name, email, mobile, GST..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-xl pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-amber-500"
          />
        </div>

        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-gray-400 shrink-0" />
          <select
            value={roleFilter}
            onChange={e => setRoleFilter(e.target.value as any)}
            className="w-full bg-gray-800 border border-gray-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500"
          >
            <option value="ALL">All Roles</option>
            <option value="GYM_OWNER">Gym Owners</option>
            <option value="JOB_SEEKER">Job Seekers</option>
          </select>
        </div>

        <div>
          <select
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value as any)}
            className="w-full bg-gray-800 border border-gray-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500"
          >
            <option value="ALL">All Account Statuses</option>
            <option value="ACTIVE">Active Users</option>
            <option value="SUSPENDED">Suspended / Spam</option>
          </select>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden backdrop-blur-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-900/80 border-b border-gray-800 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                <th className="py-4 px-6">User / Business</th>
                <th className="py-4 px-6">Role & Status</th>
                <th className="py-4 px-6">GST Credentials</th>
                <th className="py-4 px-6 text-right">Verification & Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/60 text-sm">
              {filteredUsers.map(u => (
                <tr key={u.id} className="hover:bg-gray-800/30 transition">
                  <td className="py-4 px-6">
                    <div className="font-semibold text-white">{u.name}</div>
                    <div className="text-xs text-gray-400">{u.email} • {u.mobile}</div>
                    {u.companyName && <div className="text-xs text-amber-500 mt-0.5">{u.companyName}</div>}
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${u.role === 'GYM_OWNER' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'}`}>
                        {u.role === 'GYM_OWNER' ? 'Gym Owner' : 'Job Seeker'}
                      </span>
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${u.status === 'ACTIVE' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                        {u.status}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="font-mono text-xs text-gray-300">{u.gstNumber || 'No GST Registered'}</div>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      {/* GST Verify Button */}
                      <button
                        onClick={() => handleVerify(u.id, u.isVerified)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                          u.isVerified
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/30'
                            : 'bg-amber-500/20 text-amber-400 border border-amber-500/30 hover:bg-amber-500/30'
                        }`}
                      >
                        {u.isVerified ? (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5" /> Verified
                          </>
                        ) : (
                          <>
                            <UserCheck className="w-3.5 h-3.5" /> Verify GST
                          </>
                        )}
                      </button>

                      {/* Status Toggle Buttons */}
                      {u.status === 'ACTIVE' ? (
                        <button
                          onClick={() => handleStatusChange(u.id, 'SUSPENDED')}
                          className="flex items-center gap-1 px-3 py-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 rounded-lg text-xs font-medium transition"
                          title="Suspend Account"
                        >
                          <UserX className="w-3.5 h-3.5" /> Suspend
                        </button>
                      ) : (
                        <button
                          onClick={() => handleStatusChange(u.id, 'ACTIVE')}
                          className="flex items-center gap-1 px-3 py-1.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 rounded-lg text-xs font-medium transition"
                          title="Activate Account"
                        >
                          <UserCheck className="w-3.5 h-3.5" /> Activate
                        </button>
                      )}
                    </div>
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
