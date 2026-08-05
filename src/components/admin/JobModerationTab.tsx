import React from 'react';
import { Briefcase, CheckCircle2, XCircle, ShieldAlert, Building2, MapPin } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const JobModerationTab: React.FC = () => {
  const { jobListings, moderateJob, accessToken } = useApp();

  const handleAction = (jobId: string, action: 'APPROVE' | 'REJECT') => {
    moderateJob(jobId, action);
    fetch(`http://localhost:5000/api/admin/jobs/${jobId}/moderate`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ action }),
    }).catch(err => console.log('Backend sync notice:', err.message));
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gray-900 border border-gray-800 p-6 rounded-2xl">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-amber-500" /> Job Moderation & Spam Protection
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Review and moderate job postings submitted by Gym Owners before they appear on the live Manpower Services portal.
          </p>
        </div>
      </div>

      {/* Jobs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {jobListings.map(job => (
          <div key={job.id} className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${job.isActive ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                  {job.isActive ? 'Active & Live' : 'Moderated / Suspended'}
                </span>
                <span className="text-xs text-gray-400">Posted: {job.createdAt}</span>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">{job.title}</h3>
              
              <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 mb-3">
                <span className="flex items-center gap-1"><Building2 className="w-3.5 h-3.5 text-amber-500" /> {job.companyName || job.gymName || 'Gym Center'}</span>
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-amber-500" /> {job.location}</span>
                <span className="text-amber-400 font-semibold">{job.salaryRange}</span>
              </div>

              <p className="text-xs text-gray-300 line-clamp-3 bg-gray-800/40 p-3 rounded-xl border border-gray-800">
                {job.description}
              </p>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-gray-800">
              {job.isActive ? (
                <button
                  onClick={() => handleAction(job.id, 'REJECT')}
                  className="flex items-center gap-1.5 px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 rounded-xl text-xs font-semibold transition"
                >
                  <XCircle className="w-4 h-4" /> Reject & Flag Spammer
                </button>
              ) : (
                <button
                  onClick={() => handleAction(job.id, 'APPROVE')}
                  className="flex items-center gap-1.5 px-4 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 rounded-xl text-xs font-semibold transition"
                >
                  <CheckCircle2 className="w-4 h-4" /> Approve & Publish Live
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
