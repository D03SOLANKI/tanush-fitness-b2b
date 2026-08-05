import React, { useState } from 'react';
import { Briefcase, CheckCircle2, XCircle, ShieldAlert, Building2, MapPin } from 'lucide-react';
import { INITIAL_JOBS } from '../../data/jobs';
import { JobListing } from '../../types';
import { useApp } from '../../context/AppContext';

export const JobModerationTab: React.FC = () => {
  const { showToast } = useApp();
  const [jobs, setJobs] = useState<JobListing[]>(INITIAL_JOBS);

  const handleModerate = (jobId: string, action: 'APPROVE' | 'REJECT') => {
    setJobs(prev =>
      prev.map(j => {
        if (j.id === jobId) {
          return { ...j, isActive: action === 'APPROVE' };
        }
        return j;
      })
    );

    if (action === 'APPROVE') {
      showToast('Job Approved & Published to Candidate Feed');
    } else {
      showToast('Job Rejected & Recruiter Flagged', 'error');
    }
  };

  return (
    <div className="space-y-6 font-mono text-xs">
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
        <div>
          <h3 className="text-sm font-black text-slate-900 font-heading uppercase">
            Job Posting Moderation & Anti-Spam Queue ({jobs.length} Jobs)
          </h3>
          <p className="text-[10px] text-slate-500 font-normal">
            Approve recruiter job posts before candidate publication to prevent unverified spam listings.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {jobs.map(job => (
          <div key={job.id} className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold text-blue-600 uppercase font-mono">{job.category}</span>
                <span
                  className={`px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase ${
                    job.isActive !== false ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                  }`}
                >
                  {job.isActive !== false ? 'Published' : 'Rejected'}
                </span>
              </div>

              <h4 className="text-base font-black text-slate-900 font-heading uppercase">{job.title}</h4>

              <div className="flex items-center gap-3 text-[11px] text-slate-600 font-bold mt-1">
                <span className="flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5 text-slate-400" /> {job.companyName || job.gymName}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" /> {job.location}
                </span>
              </div>

              <div className="mt-3 p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-700 leading-relaxed font-normal">
                {job.description}
              </div>

              <div className="mt-3 text-[10px] text-slate-500 font-bold">
                Salary: <span className="text-slate-900">{job.salaryRange}</span> • Type: <span className="text-slate-900">{job.type}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-100">
              <button
                onClick={() => handleModerate(job.id, 'APPROVE')}
                className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black uppercase flex items-center justify-center gap-1.5 shadow-sm"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Approve & Publish</span>
              </button>

              <button
                onClick={() => handleModerate(job.id, 'REJECT')}
                className="py-2.5 px-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-black uppercase flex items-center justify-center gap-1.5 shadow-sm"
              >
                <XCircle className="w-4 h-4" />
                <span>Reject & Flag</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
