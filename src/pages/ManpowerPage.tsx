import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { JobListing, JobRoleCategory } from '../types';
import { SEO } from '../components/common/SEO';
import { Users, Briefcase, Plus, Search, MapPin, CheckCircle2, UserCheck, X, Upload, PhoneCall, Send, ShieldAlert, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ManpowerPage: React.FC = () => {
  const {
    jobListings,
    jobApplications,
    addJobListing,
    submitJobApplication,
  } = useApp();

  const [activeUserRole, setActiveUserRole] = useState<'candidate' | 'employer'>('candidate');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Modals
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isPostJobModalOpen, setIsPostJobModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<JobListing | null>(null);

  // Candidate Application Form State
  const [candidateForm, setCandidateForm] = useState({
    fullName: '',
    mobile: '',
    email: '',
    experience: '2-3 Years',
    preferredCity: '',
    preferredSalary: '₹25,000 - ₹35,000 / month',
    skills: 'Personal Training, Weight Loss, Strength Conditioning',
    certifications: 'NASM-CPT / CSCS / K11 Certified',
    resumeFileName: 'Resume_2026.pdf',
  });

  // Employer Post Job Form State
  const [jobForm, setJobForm] = useState({
    title: '',
    category: 'Personal Trainer' as JobRoleCategory,
    gymName: '',
    location: '',
    salaryRange: '₹30,000 - ₹50,000 / month',
    type: 'Full-time' as 'Full-time' | 'Part-time' | 'Contract',
    experience: '1-3 Years',
    description: '',
    requirements: 'Certified trainer, strong communication skills',
  });

  // Local application status override for demo
  const [applicationStatuses, setApplicationStatuses] = useState<Record<string, string>>({});

  const handleStatusChange = (appId: string, newStatus: string) => {
    setApplicationStatuses(prev => ({ ...prev, [appId]: newStatus }));
  };

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedJob || !candidateForm.fullName || !candidateForm.mobile) {
      alert('Please fill in your Full Name and Mobile Number.');
      return;
    }

    submitJobApplication({
      jobId: selectedJob.id,
      jobTitle: selectedJob.title,
      gymName: selectedJob.gymName,
      fullName: candidateForm.fullName,
      mobile: candidateForm.mobile,
      email: candidateForm.email,
      resumeFileName: candidateForm.resumeFileName,
      experience: candidateForm.experience,
      preferredLocation: candidateForm.preferredCity || selectedJob.location,
      preferredCity: candidateForm.preferredCity,
      preferredSalary: candidateForm.preferredSalary,
      skills: candidateForm.skills.split(',').map(s => s.trim()),
      certifications: candidateForm.certifications,
    });

    setIsApplyModalOpen(false);
    setSelectedJob(null);
  };

  const handlePostJobSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!jobForm.title || !jobForm.gymName || !jobForm.location) {
      alert('Please provide Job Title, Gym Name, and Location.');
      return;
    }

    addJobListing({
      title: jobForm.title,
      category: jobForm.category,
      gymName: jobForm.gymName,
      location: jobForm.location,
      salaryRange: jobForm.salaryRange,
      type: jobForm.type,
      experience: jobForm.experience,
      description: jobForm.description,
      requirements: jobForm.requirements.split(',').map(r => r.trim()),
    });

    setIsPostJobModalOpen(false);
    setJobForm({
      title: '',
      category: 'Personal Trainer',
      gymName: '',
      location: '',
      salaryRange: '₹30,000 - ₹50,000 / month',
      type: 'Full-time',
      experience: '1-3 Years',
      description: '',
      requirements: '',
    });
  };

  const filteredJobs = jobListings.filter(j => {
    if (selectedCategory !== 'all' && j.category !== selectedCategory) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchTitle = j.title.toLowerCase().includes(q);
      const matchGym = j.gymName.toLowerCase().includes(q);
      const matchLoc = j.location.toLowerCase().includes(q);
      if (!matchTitle && !matchGym && !matchLoc) return false;
    }
    return true;
  });

  return (
    <main className="pt-28 pb-24 bg-slate-50 min-h-screen text-slate-900">
      <SEO
        title="Gym Manpower Hiring Portal | Tanush Fitness B2B"
        description="Recruit NASM/CSCS certified personal trainers, gym managers, nutritionists, & sales executives across India."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-8 h-[3px] bg-amber-500 rounded-full" />
              <span className="text-xs font-bold tracking-widest uppercase text-amber-600 font-mono">
                BUSINESS 2: MANPOWER SERVICES
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-heading uppercase">
              Gym Staffing & Recruitment Portal
            </h1>
            <p className="mt-2 text-sm text-slate-600 max-w-2xl font-normal">
              Direct recruitment portal for health club owners and certified fitness professionals.
            </p>
          </div>

          {/* User Mode Switcher Tabs */}
          <div className="bg-slate-200 p-1 rounded-2xl flex items-center font-mono text-xs font-bold shrink-0">
            <button
              onClick={() => setActiveUserRole('candidate')}
              className={`px-5 py-2.5 rounded-xl transition-all uppercase flex items-center gap-2 ${
                activeUserRole === 'candidate'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              <UserCheck className="w-4 h-4" />
              <span>Candidate Seekers</span>
            </button>

            <button
              onClick={() => setActiveUserRole('employer')}
              className={`px-5 py-2.5 rounded-xl transition-all uppercase flex items-center gap-2 ${
                activeUserRole === 'employer'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              <Briefcase className="w-4 h-4 text-amber-400" />
              <span>Gym Employers</span>
            </button>
          </div>
        </div>

        {/* CANDIDATE VIEW */}
        {activeUserRole === 'candidate' && (
          <div className="space-y-8">
            {/* Filter Bar */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
              <div className="relative w-full sm:w-80">
                <input
                  type="text"
                  placeholder="Search job title, gym name, or city..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 pl-9 text-xs text-slate-900 font-mono focus:outline-none focus:border-blue-600"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              </div>

              <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto">
                <select
                  value={selectedCategory}
                  onChange={e => setSelectedCategory(e.target.value)}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 font-bold font-mono uppercase focus:outline-none"
                >
                  <option value="all">All 8 Role Categories</option>
                  <option value="Personal Trainer">Personal Trainer</option>
                  <option value="Gym Trainer">Gym Trainer</option>
                  <option value="Receptionist">Receptionist</option>
                  <option value="Sales Executive">Sales Executive</option>
                  <option value="Housekeeping">Housekeeping</option>
                  <option value="Nutritionist">Nutritionist</option>
                  <option value="Gym Manager">Gym Manager</option>
                </select>
              </div>
            </div>

            {/* Jobs List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map(job => (
                <div
                  key={job.id}
                  className="rounded-3xl bg-white border border-slate-200/90 hover:border-blue-500 transition-all p-6 shadow-stripe flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between font-mono">
                      <span className="px-2.5 py-1 rounded bg-amber-100 text-amber-800 text-[10px] font-bold">
                        {job.category}
                      </span>
                      <span className="text-[10px] text-slate-400 font-medium">{job.type}</span>
                    </div>

                    <div>
                      <h3 className="text-base font-black text-slate-900 font-heading uppercase">
                        {job.title}
                      </h3>
                      <div className="text-xs font-bold text-blue-600 font-mono mt-0.5">{job.gymName}</div>
                    </div>

                    <div className="space-y-1 text-xs text-slate-600 font-mono">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{job.location}</span>
                      </div>
                      <div className="text-emerald-600 font-black">{job.salaryRange}</div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-2">
                      {job.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 mt-4 font-mono">
                    <button
                      onClick={() => {
                        setSelectedJob(job);
                        setIsApplyModalOpen(true);
                      }}
                      className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
                    >
                      <UserCheck className="w-4 h-4" />
                      <span>Apply For This Position</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* EMPLOYER VIEW */}
        {activeUserRole === 'employer' && (
          <div className="space-y-8 font-mono">
            {/* Top Post Job Banner */}
            <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">
                  FOR HEALTH CLUB OWNERS & DIRECTORS
                </span>
                <h2 className="text-2xl font-black font-heading uppercase">
                  Post New Gym Opening & Source Trainers
                </h2>
                <p className="text-xs text-slate-300">
                  Broadcast job openings across India to thousands of NASM/CSCS accredited personal trainers and certified facility managers.
                </p>
              </div>

              <button
                onClick={() => setIsPostJobModalOpen(true)}
                className="px-6 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center gap-2 shrink-0 shadow-lg"
              >
                <Plus className="w-5 h-5" />
                <span>Post A New Job Opening</span>
              </button>
            </div>

            {/* Received Candidate Applications List */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-black text-slate-900 uppercase font-heading flex items-center gap-2">
                  <Users className="w-5 h-5 text-amber-500" />
                  <span>Submitted Candidate Profiles ({jobApplications.length})</span>
                </h3>
              </div>

              {jobApplications.length === 0 ? (
                <div className="py-12 text-center text-xs text-slate-400">
                  No candidate applications received yet. Applied candidates will appear here with contact numbers and attached resumes.
                </div>
              ) : (
                <div className="space-y-4">
                  {jobApplications.map(app => {
                    const currentStatus = applicationStatuses[app.id] || app.status;

                    return (
                      <div key={app.id} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
                          <div>
                            <span className="text-sm font-black text-slate-900 uppercase">{app.fullName}</span>
                            <span className="text-xs text-blue-600 block font-bold">Role: {app.jobTitle} ({app.gymName})</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                              currentStatus === 'Shortlisted'
                                ? 'bg-emerald-100 text-emerald-800'
                                : currentStatus === 'Rejected'
                                ? 'bg-rose-100 text-rose-800'
                                : 'bg-amber-100 text-amber-800'
                            }`}>
                              {currentStatus}
                            </span>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-700">
                          <div>Mobile: <strong>{app.mobile}</strong></div>
                          <div>Email: {app.email}</div>
                          <div>Experience: {app.experience}</div>
                        </div>

                        {app.skills && app.skills.length > 0 && (
                          <div className="flex flex-wrap gap-1">
                            {app.skills.map((sk, i) => (
                              <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-slate-200 text-slate-800 font-bold">
                                {sk}
                              </span>
                            ))}
                          </div>
                        )}

                        <div className="pt-2 flex items-center justify-between border-t border-slate-200 text-xs">
                          <div className="text-slate-500">
                            Resume: <span className="text-blue-600 underline font-bold">{app.resumeFileName}</span>
                          </div>

                          {/* Candidate Status Action Buttons */}
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleStatusChange(app.id, 'Shortlisted')}
                              className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-bold text-[10px] uppercase"
                            >
                              Shortlist
                            </button>
                            <button
                              onClick={() => handleStatusChange(app.id, 'Rejected')}
                              className="px-3 py-1.5 rounded-lg bg-slate-200 hover:bg-rose-100 text-slate-700 hover:text-rose-700 font-bold text-[10px] uppercase"
                            >
                              Reject
                            </button>
                            <a
                              href={`tel:${app.mobile}`}
                              className="px-3 py-1.5 rounded-lg bg-slate-900 text-white font-bold text-[10px] uppercase flex items-center gap-1"
                            >
                              <PhoneCall className="w-3 h-3 text-amber-400" />
                              <span>Call Candidate</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Candidate Apply Modal */}
      <AnimatePresence>
        {isApplyModalOpen && selectedJob && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 overflow-hidden shadow-2xl border border-slate-200 relative my-8 font-mono"
            >
              <button
                onClick={() => setIsApplyModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <span className="text-[10px] font-bold uppercase text-blue-600">Candidate Job Application</span>
                <h3 className="text-xl font-black text-slate-900 font-heading uppercase mt-0.5">
                  Apply for {selectedJob.title}
                </h3>
                <div className="text-xs text-slate-500">{selectedJob.gymName} • {selectedJob.location}</div>
              </div>

              <form onSubmit={handleApplySubmit} className="space-y-4">
                <div>
                  <label className="text-[10px] font-bold text-slate-600 uppercase block mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Verma"
                    value={candidateForm.fullName}
                    onChange={e => setCandidateForm({ ...candidateForm, fullName: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-bold text-slate-600 uppercase block mb-1">Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={candidateForm.mobile}
                      onChange={e => setCandidateForm({ ...candidateForm, mobile: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-600 uppercase block mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="rahul@gmail.com"
                      value={candidateForm.email}
                      onChange={e => setCandidateForm({ ...candidateForm, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-bold text-slate-600 uppercase block mb-1">Preferred City</label>
                    <input
                      type="text"
                      placeholder="Delhi / Mumbai"
                      value={candidateForm.preferredCity}
                      onChange={e => setCandidateForm({ ...candidateForm, preferredCity: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-600 uppercase block mb-1">Experience</label>
                    <input
                      type="text"
                      placeholder="3 Years"
                      value={candidateForm.experience}
                      onChange={e => setCandidateForm({ ...candidateForm, experience: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-slate-600 uppercase block mb-1">Certifications</label>
                  <input
                    type="text"
                    placeholder="NASM-CPT / CSCS / ACE / K11"
                    value={candidateForm.certifications}
                    onChange={e => setCandidateForm({ ...candidateForm, certifications: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all mt-4"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Application</span>
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Employer Post Job Modal */}
      <AnimatePresence>
        {isPostJobModalOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 overflow-hidden shadow-2xl border border-slate-200 relative my-8 font-mono"
            >
              <button
                onClick={() => setIsPostJobModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <span className="text-[10px] font-bold uppercase text-amber-600">Employer Job Creation</span>
                <h3 className="text-xl font-black text-slate-900 font-heading uppercase mt-0.5">
                  Post New Gym Opening
                </h3>
              </div>

              <form onSubmit={handlePostJobSubmit} className="space-y-4">
                <div>
                  <label className="text-[10px] font-bold text-slate-600 uppercase block mb-1">Job Title *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Senior Personal Trainer"
                    value={jobForm.title}
                    onChange={e => setJobForm({ ...jobForm, title: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-bold text-slate-600 uppercase block mb-1">Gym Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Iron Vault Gym"
                      value={jobForm.gymName}
                      onChange={e => setJobForm({ ...jobForm, gymName: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-600 uppercase block mb-1">Location *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Connaught Place, Delhi"
                      value={jobForm.location}
                      onChange={e => setJobForm({ ...jobForm, location: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-bold text-slate-600 uppercase block mb-1">Category</label>
                    <select
                      value={jobForm.category}
                      onChange={e => setJobForm({ ...jobForm, category: e.target.value as any })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 font-bold focus:outline-none focus:border-blue-600 uppercase"
                    >
                      <option value="Personal Trainer">Personal Trainer</option>
                      <option value="Gym Trainer">Gym Trainer</option>
                      <option value="Receptionist">Receptionist</option>
                      <option value="Sales Executive">Sales Executive</option>
                      <option value="Housekeeping">Housekeeping</option>
                      <option value="Nutritionist">Nutritionist</option>
                      <option value="Gym Manager">Gym Manager</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-600 uppercase block mb-1">Salary Range</label>
                    <input
                      type="text"
                      placeholder="₹30,000 - ₹50,000 / month"
                      value={jobForm.salaryRange}
                      onChange={e => setJobForm({ ...jobForm, salaryRange: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-slate-600 uppercase block mb-1">Job Description</label>
                  <textarea
                    rows={3}
                    placeholder="Describe role responsibilities..."
                    value={jobForm.description}
                    onChange={e => setJobForm({ ...jobForm, description: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all mt-4"
                >
                  <Plus className="w-4 h-4" />
                  <span>Broadcast Job Opening</span>
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
};
