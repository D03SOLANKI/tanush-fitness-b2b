import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { JobListing, JobRoleCategory } from '../types';
import {
  Users,
  Briefcase,
  Plus,
  Search,
  MapPin,
  Clock,
  Send,
  FileText,
  CheckCircle2,
  X,
  UserCheck,
  Building2,
  Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ManpowerPage: React.FC = () => {
  const { jobListings, jobApplications, addJobListing, submitJobApplication } = useApp();

  const [activeUserType, setActiveUserType] = useState<'candidate' | 'employer'>('candidate');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Modal States
  const [selectedJobForApply, setSelectedJobForApply] = useState<JobListing | null>(null);
  const [isPostJobModalOpen, setIsPostJobModalOpen] = useState(false);

  // Candidate Application Form
  const [appForm, setAppForm] = useState({
    fullName: '',
    mobile: '',
    email: '',
    resumeFileName: '',
    experience: '2 Years',
    preferredLocation: '',
    certifications: '',
  });

  // Employer Post Job Form
  const [postJobForm, setPostJobForm] = useState({
    title: '',
    category: 'Personal Trainer' as JobRoleCategory,
    gymName: '',
    location: '',
    salaryRange: '₹25,000 - ₹40,000 / month',
    type: 'Full-time' as 'Full-time' | 'Part-time' | 'Contract',
    experience: '2+ Years',
    description: '',
    requirementsStr: '',
  });

  const categoriesList: JobRoleCategory[] = [
    'Personal Trainer',
    'Gym Trainer',
    'Receptionist',
    'Sales Executive',
    'Housekeeping',
    'Cleaning Staff',
    'Nutritionist',
    'Gym Manager',
  ];

  const filteredJobs = jobListings.filter(job => {
    if (activeCategory !== 'all' && job.category !== activeCategory) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchTitle = job.title.toLowerCase().includes(q);
      const matchGym = job.gymName.toLowerCase().includes(q);
      const matchLoc = job.location.toLowerCase().includes(q);
      if (!matchTitle && !matchGym && !matchLoc) return false;
    }
    return true;
  });

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedJobForApply || !appForm.fullName || !appForm.mobile) {
      alert('Please enter your Full Name and Mobile Number.');
      return;
    }

    submitJobApplication({
      jobId: selectedJobForApply.id,
      jobTitle: selectedJobForApply.title,
      gymName: selectedJobForApply.gymName,
      fullName: appForm.fullName,
      mobile: appForm.mobile,
      email: appForm.email,
      resumeFileName: appForm.resumeFileName || 'Resume_Document.pdf',
      experience: appForm.experience,
      preferredLocation: appForm.preferredLocation,
      certifications: appForm.certifications,
    });

    setSelectedJobForApply(null);
    setAppForm({
      fullName: '',
      mobile: '',
      email: '',
      resumeFileName: '',
      experience: '2 Years',
      preferredLocation: '',
      certifications: '',
    });
  };

  const handlePostJobSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postJobForm.title || !postJobForm.gymName) {
      alert('Please provide Job Title and Gym Name.');
      return;
    }

    addJobListing({
      title: postJobForm.title,
      category: postJobForm.category,
      gymName: postJobForm.gymName,
      location: postJobForm.location || 'Mumbai, MH',
      salaryRange: postJobForm.salaryRange,
      type: postJobForm.type,
      experience: postJobForm.experience,
      description: postJobForm.description || 'Join our health club team.',
      requirements: postJobForm.requirementsStr
        ? postJobForm.requirementsStr.split('\n').filter(Boolean)
        : ['Fitness qualification', 'Customer service mindset'],
    });

    setIsPostJobModalOpen(false);
    setPostJobForm({
      title: '',
      category: 'Personal Trainer',
      gymName: '',
      location: '',
      salaryRange: '₹25,000 - ₹40,000 / month',
      type: 'Full-time',
      experience: '2+ Years',
      description: '',
      requirementsStr: '',
    });
  };

  return (
    <main className="pt-28 pb-24 bg-slate-50 min-h-screen text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-8 h-[3px] bg-blue-600 rounded-full" />
            <span className="text-xs font-bold tracking-widest uppercase text-blue-600 font-mono">
              BUSINESS 2: MANPOWER SERVICES
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-heading uppercase">
            Commercial Gym Hiring & Talent Portal
          </h1>
          <p className="mt-2 text-sm text-slate-600 max-w-2xl font-normal">
            Connecting commercial gym owners with certified NASM/CSCS Personal Trainers, Gym Managers, Receptionists, Sales Executives, & Sanitation Staff.
          </p>
        </div>

        {/* User Type Switcher Tabs (Job Seeker Candidate vs Employer Gym Owner) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-2 rounded-2xl bg-white border border-slate-200 shadow-sm mb-10">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setActiveUserType('candidate')}
              className={`flex-1 sm:flex-none px-6 py-3 rounded-xl text-xs font-black uppercase font-mono tracking-wider transition-all flex items-center justify-center gap-2 ${
                activeUserType === 'candidate'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Job Seekers (Find Jobs)</span>
            </button>

            <button
              onClick={() => setActiveUserType('employer')}
              className={`flex-1 sm:flex-none px-6 py-3 rounded-xl text-xs font-black uppercase font-mono tracking-wider transition-all flex items-center justify-center gap-2 ${
                activeUserType === 'employer'
                  ? 'bg-slate-900 text-amber-400 shadow-md font-bold'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Building2 className="w-4 h-4 text-amber-400" />
              <span>Gym Owners (Employer Portal)</span>
            </button>
          </div>

          {activeUserType === 'employer' && (
            <button
              onClick={() => setIsPostJobModalOpen(true)}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>Post New Gym Job Opening</span>
            </button>
          )}
        </div>

        {/* Candidate / Job Seeker View */}
        {activeUserType === 'candidate' && (
          <div>
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none border-b border-slate-200">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase font-mono whitespace-nowrap ${
                  activeCategory === 'all'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900'
                }`}
              >
                All Roles ({jobListings.length})
              </button>
              {categoriesList.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap ${
                    activeCategory === cat
                      ? 'bg-blue-600 text-white shadow-sm font-black'
                      : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="mb-8 max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search role, gym name, location..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl py-3 px-4 pl-10 text-xs font-mono text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 shadow-sm"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              </div>
            </div>

            {/* Job Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredJobs.map(job => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-stripe flex flex-col justify-between space-y-4 hover:border-blue-500 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono mb-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 font-bold border border-blue-200">
                        {job.category}
                      </span>
                      <span className="text-slate-400 text-[10px] font-semibold">{job.createdAt}</span>
                    </div>

                    <h3 className="text-lg font-black text-slate-900 font-heading uppercase">
                      {job.title}
                    </h3>
                    <div className="text-xs font-bold text-slate-600 font-mono mt-0.5">
                      {job.gymName}
                    </div>

                    <div className="mt-3 flex flex-wrap gap-4 text-xs text-slate-500 font-mono">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-blue-600" /> {job.location}
                      </span>
                      <span className="flex items-center gap-1 font-bold text-slate-900">
                        {job.salaryRange}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {job.type} • {job.experience}
                      </span>
                    </div>

                    <p className="mt-3 text-xs text-slate-600 leading-relaxed font-normal">
                      {job.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400 font-mono font-semibold">
                      {job.applicationsCount} Applicants
                    </span>
                    <button
                      onClick={() => setSelectedJobForApply(job)}
                      className="py-2.5 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs font-mono uppercase tracking-wider flex items-center gap-2 shadow-md transition-all"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Apply Now</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Employer / Gym Owner View */}
        {activeUserType === 'employer' && (
          <div className="space-y-8">
            <div className="p-8 rounded-3xl bg-slate-900 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase font-mono tracking-widest">
                  GYM RECRUITMENT SUITE
                </span>
                <h2 className="text-2xl font-black font-heading uppercase mt-1">
                  Hire Vetted Trainers & Staff for Your Club
                </h2>
                <p className="text-xs text-slate-400 mt-1 max-w-xl font-normal">
                  Post gym job openings and access candidate applications with certified qualifications, experience, and contact numbers.
                </p>
              </div>
              <button
                onClick={() => setIsPostJobModalOpen(true)}
                className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs font-mono uppercase tracking-wider flex items-center gap-2 shadow-lg shrink-0"
              >
                <Plus className="w-4 h-4" />
                <span>Post Job Opening</span>
              </button>
            </div>

            {/* Applications List */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-stripe">
              <h3 className="text-lg font-black text-slate-900 font-heading uppercase mb-4">
                Received Candidate Applications ({jobApplications.length})
              </h3>

              {jobApplications.length === 0 ? (
                <div className="py-12 text-center text-xs text-slate-500 font-mono">
                  No candidate applications received yet. Post a job opening above to start receiving candidates.
                </div>
              ) : (
                <div className="divide-y divide-slate-100">
                  {jobApplications.map(app => (
                    <div key={app.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-black text-slate-900 uppercase font-heading">{app.fullName}</span>
                          <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold font-mono">
                            {app.status}
                          </span>
                        </div>
                        <div className="text-xs text-blue-600 font-bold font-mono mt-0.5">
                          Applied for: {app.jobTitle} ({app.gymName})
                        </div>
                        <div className="text-xs text-slate-500 font-mono mt-1">
                          Mobile: <strong>{app.mobile}</strong> • Email: {app.email} • Exp: {app.experience}
                        </div>
                        {app.certifications && (
                          <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                            Certifications: {app.certifications}
                          </div>
                        )}
                      </div>

                      <button
                        onClick={() => alert(`Contacting candidate ${app.fullName} at ${app.mobile}...`)}
                        className="px-4 py-2 rounded-xl bg-slate-900 text-white font-mono font-black text-xs uppercase"
                      >
                        Contact Applicant
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Candidate Apply Modal */}
      <AnimatePresence>
        {selectedJobForApply && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 overflow-hidden shadow-2xl border border-slate-200 relative my-8"
            >
              <button
                onClick={() => setSelectedJobForApply(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <span className="text-[10px] font-bold uppercase text-blue-600 font-mono">
                  Job Application Form
                </span>
                <h3 className="text-xl font-black text-slate-900 font-heading uppercase mt-0.5">
                  Apply for {selectedJobForApply.title}
                </h3>
                <p className="text-xs text-slate-500 font-mono">At {selectedJobForApply.gymName}</p>
              </div>

              <form onSubmit={handleApplySubmit} className="space-y-4">
                <div>
                  <label className="text-[10px] font-bold text-slate-600 uppercase font-mono block mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={appForm.fullName}
                    onChange={e => setAppForm({ ...appForm, fullName: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 font-medium focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-bold text-slate-600 uppercase font-mono block mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={appForm.mobile}
                      onChange={e => setAppForm({ ...appForm, mobile: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 font-medium focus:outline-none focus:border-blue-600"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-600 uppercase font-mono block mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="rahul@example.com"
                      value={appForm.email}
                      onChange={e => setAppForm({ ...appForm, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 font-medium focus:outline-none focus:border-blue-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-bold text-slate-600 uppercase font-mono block mb-1">
                      Years of Experience
                    </label>
                    <select
                      value={appForm.experience}
                      onChange={e => setAppForm({ ...appForm, experience: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 font-medium focus:outline-none focus:border-blue-600"
                    >
                      <option value="Fresher">Fresher / Under 1 Year</option>
                      <option value="1-2 Years">1-2 Years</option>
                      <option value="3-5 Years">3-5 Years</option>
                      <option value="5+ Years">5+ Years</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-slate-600 uppercase font-mono block mb-1">
                      Preferred Location
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Mumbai / Austin"
                      value={appForm.preferredLocation}
                      onChange={e => setAppForm({ ...appForm, preferredLocation: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 font-medium focus:outline-none focus:border-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-slate-600 uppercase font-mono block mb-1">
                    Upload Resume (PDF / DOC) *
                  </label>
                  <input
                    type="file"
                    onChange={e =>
                      setAppForm({
                        ...appForm,
                        resumeFileName: e.target.files?.[0]?.name || 'My_Resume.pdf',
                      })
                    }
                    className="w-full text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-mono file:font-black file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold text-slate-600 uppercase font-mono block mb-1">
                    Certifications (e.g. NASM, ACE, CSCS, CPR)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. NASM Certified Personal Trainer, CPR/AED"
                    value={appForm.certifications}
                    onChange={e => setAppForm({ ...appForm, certifications: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 font-medium focus:outline-none focus:border-blue-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all mt-4"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Application</span>
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Post Job Modal (Employer) */}
      <AnimatePresence>
        {isPostJobModalOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 overflow-hidden shadow-2xl border border-slate-200 relative my-8"
            >
              <button
                onClick={() => setIsPostJobModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <span className="text-[10px] font-bold uppercase text-amber-600 font-mono">
                  Employer Recruitment Portal
                </span>
                <h3 className="text-xl font-black text-slate-900 font-heading uppercase mt-0.5">
                  Post New Gym Job Opening
                </h3>
              </div>

              <form onSubmit={handlePostJobSubmit} className="space-y-4">
                <div>
                  <label className="text-[10px] font-bold text-slate-600 uppercase font-mono block mb-1">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Head Personal Trainer"
                    value={postJobForm.title}
                    onChange={e => setPostJobForm({ ...postJobForm, title: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 font-medium focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-bold text-slate-600 uppercase font-mono block mb-1">
                      Role Category
                    </label>
                    <select
                      value={postJobForm.category}
                      onChange={e =>
                        setPostJobForm({ ...postJobForm, category: e.target.value as JobRoleCategory })
                      }
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 font-medium focus:outline-none focus:border-blue-600"
                    >
                      {categoriesList.map(c => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-600 uppercase font-mono block mb-1">
                      Gym Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Health Club"
                      value={postJobForm.gymName}
                      onChange={e => setPostJobForm({ ...postJobForm, gymName: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 font-medium focus:outline-none focus:border-blue-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-bold text-slate-600 uppercase font-mono block mb-1">
                      Location
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Mumbai, MH"
                      value={postJobForm.location}
                      onChange={e => setPostJobForm({ ...postJobForm, location: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 font-medium focus:outline-none focus:border-blue-600"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-600 uppercase font-mono block mb-1">
                      Salary Range
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. ₹30,000 - ₹50,000"
                      value={postJobForm.salaryRange}
                      onChange={e => setPostJobForm({ ...postJobForm, salaryRange: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 font-medium focus:outline-none focus:border-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-slate-600 uppercase font-mono block mb-1">
                    Job Description
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Describe daily responsibilities..."
                    value={postJobForm.description}
                    onChange={e => setPostJobForm({ ...postJobForm, description: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 font-medium focus:outline-none focus:border-blue-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-400 font-black text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all mt-4"
                >
                  <Plus className="w-4 h-4 text-amber-400" />
                  <span>Publish Job Opening</span>
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
};
