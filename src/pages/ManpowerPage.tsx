import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { JobListing, JobRoleCategory } from '../types';
import { SEO } from '../components/common/SEO';
import {
  Users,
  Briefcase,
  Plus,
  Search,
  MapPin,
  CheckCircle2,
  UserCheck,
  X,
  Phone,
  Send,
  Sparkles,
  Award,
  ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MarqueeStrip } from '../components/common/MarqueeStrip';

export const ManpowerPage: React.FC = () => {
  const {
    jobListings,
    addJobListing,
    submitJobApplication,
    showToast
  } = useApp();

  const [activeUserRole, setActiveUserRole] = useState<'candidate' | 'employer'>('candidate');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Modals
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isPostJobModalOpen, setIsPostJobModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<JobListing | null>(null);

  // Candidate Form
  const [candidateForm, setCandidateForm] = useState({
    fullName: '',
    mobile: '',
    email: '',
    experience: '3-5 Years',
    preferredCity: '',
    preferredSalary: '₹40,000 - ₹60,000 / month',
    skills: 'Personal Training, Club Management, Biomechanics, Sales, Group Fitness',
    certifications: 'NASM-CPT / CSCS / ACE / K11 / RYT-200 Certified',
    resumeFileName: 'Resume_Executive.pdf',
  });

  // Employer Post Job Form
  const [jobForm, setJobForm] = useState({
    title: '',
    category: 'Fitness Team' as JobRoleCategory,
    gymName: '',
    location: '',
    salaryRange: '₹45,000 - ₹75,000 / month',
    type: 'Full-time' as 'Full-time' | 'Part-time' | 'Contract',
    experience: '2-4 Years',
    description: '',
    requirements: 'Certified in designated discipline, 2+ Years Commercial Experience',
  });

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedJob || !candidateForm.fullName || !candidateForm.mobile) {
      showToast('Please provide your Full Name and Mobile Number.', 'error');
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

    showToast('Application sent directly to Gym Director!', 'success');
    setIsApplyModalOpen(false);
    setSelectedJob(null);
  };

  const handlePostJobSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!jobForm.title || !jobForm.gymName || !jobForm.location) {
      showToast('Please provide Job Title, Gym/Club Name, and Location.', 'error');
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

    showToast('Role published to Master Coaches board!', 'success');
    setIsPostJobModalOpen(false);
    setJobForm({
      title: '',
      category: 'Fitness Team',
      gymName: '',
      location: '',
      salaryRange: '₹45,000 - ₹75,000 / month',
      type: 'Full-time',
      experience: '2-4 Years',
      description: '',
      requirements: '',
    });
  };

  const MANPOWER_SERVICES = [
    {
      category: 'Management',
      roles: 'Club Manager',
      description: 'Senior club general managers, operations directors, and P&L managers responsible for executive facility governance and membership growth.',
      badge: 'Executive Level'
    },
    {
      category: 'HR & Administration',
      roles: 'HR/Admin',
      description: 'Human resources coordinators, facility administrators, payroll specialists, compliance officers, and staff roster managers.',
      badge: 'Operations & HR'
    },
    {
      category: 'Sales & Front Desk',
      roles: 'Sales Executive + Receptionist',
      description: 'High-converting membership sales executives, VIP club receptionists, desk officers, and member relationship coordinators.',
      badge: 'Client Servicing'
    },
    {
      category: 'Fitness Team',
      roles: 'Head Trainer + Gym Trainers + Personal Trainers (PTs)',
      description: 'Certified master biomechanics coaches, floor gym trainers, and dedicated 1-on-1 personal trainers (NASM, CSCS, ACE, K11).',
      badge: 'Core Athletic Team'
    },
    {
      category: 'Group Classes',
      roles: 'Yoga, Zumba, CrossFit/HIIT + Sound Healing',
      description: 'Dynamic group studio instructors specialized in Vinyasa Yoga, licensed Zumba dance fitness, CrossFit/HIIT conditioning, and sound healing.',
      badge: 'Studio Specialists'
    },
    {
      category: 'Nutrition & Recovery',
      roles: 'Dietitian/Nutritionist + Physiotherapist',
      description: 'Sports nutritionists designing metabolic meal protocols and licensed physiotherapists delivering musculoskeletal recovery and rehabilitation.',
      badge: 'Clinical & Wellness'
    },
    {
      category: 'Facility Operations',
      roles: 'Housekeeping + Maintenance + Security',
      description: '24/7 facility sanitation crew, steam/sauna hygiene leads, equipment preventive maintenance engineers, and access security personnel.',
      badge: 'Sanitation & Safety'
    }
  ];

  const CATEGORY_TABS = [
    'all',
    'Management',
    'HR & Administration',
    'Sales & Front Desk',
    'Fitness Team',
    'Group Classes',
    'Nutrition & Recovery',
    'Facility Operations'
  ];

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
    <main className="pt-24 pb-20 bg-[#090C10] min-h-screen text-[#F0EBE3] ">
      <SEO
        title="Master Coaches & Staffing Sanctuary | Tanush Fitness B2B"
        description="Recruit Club Managers, HR/Admin, Sales Executives, Fitness Trainers, Group Class Coaches, Nutritionists & Physiotherapists nationwide."
      />

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/80 tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ELITE COMMERCIAL TALENT SANCTUARY</span>
            </div>

            <h1 className="font-satoshi text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase text-white tracking-tight">
              MASTER STAFFING
            </h1>

            <p className="text-sm sm:text-base text-white/90 max-w-2xl font-sans leading-relaxed">
              Full-spectrum gym manpower solutions spanning Club Management, HR & Admin, Sales & Front Desk, Fitness Teams, Group Classes, Nutrition & Recovery, and Facility Operations.
            </p>
          </div>

          {/* Role Switcher Tabs */}
          <div className="flex items-center bg-[#0D1118] p-1.5 rounded-full border border-white/10 shrink-0">
            <button
              type="button"
              onClick={() => setActiveUserRole('candidate')}
              className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition ${
                activeUserRole === 'candidate'
                  ? 'bg-[#D26539] text-[#090C10] font-bold shadow-md'
                  : 'text-[#A8A090] hover:text-white'
              }`}
            >
              Certified Talent
            </button>
            <button
              type="button"
              onClick={() => setActiveUserRole('employer')}
              className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition ${
                activeUserRole === 'employer'
                  ? 'bg-[#1A2018] text-[#F0EBE3] font-bold shadow-md'
                  : 'text-[#A8A090] hover:text-white'
              }`}
            >
              Club Employers
            </button>
          </div>
        </div>
      </section>

      {/* Marquee Banner */}
      <MarqueeStrip theme="orange" speed="slow" />

      {/* 7 MANPOWER SERVICES SHOWCASE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <span className="text-xs font-mono text-white/80 uppercase tracking-widest block mb-1">
            SANCTUARY MANPOWER VERTICALS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase font-satoshi">
            Complete Facility Staffing Solutions
          </h2>
          <p className="text-sm text-[#A8A090] max-w-2xl mt-1">
            Explore our 7 specialized talent recruitment and staffing divisions designed for commercial health clubs and high-performance gyms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {MANPOWER_SERVICES.map((serv) => (
            <div
              key={serv.category}
              onClick={() => setSelectedCategory(serv.category)}
              className={`p-5 rounded-none border transition-all cursor-pointer flex flex-col justify-between space-y-4 group ${
                selectedCategory === serv.category
                  ? 'bg-[#1A2018] border-white/40 shadow-lg'
                  : 'bg-[#0D1118] border-white/10 hover:border-white/30'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-none bg-white/5 border border-white/10 text-white/80">
                    {serv.badge}
                  </span>
                  <Award className="w-4 h-4 text-white/50 group-hover:text-white transition" />
                </div>
                <h3 className="font-satoshi text-lg font-bold text-white uppercase">
                  {serv.category}
                </h3>
                <div className="text-xs font-mono text-white/90 font-bold">
                  {serv.roles}
                </div>
                <p className="text-xs text-[#A8A090] font-sans leading-relaxed">
                  {serv.description}
                </p>
              </div>

              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-white/70 group-hover:text-white">
                <span>View Openings</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-8">
        {/* Candidate Portal View */}
        {activeUserRole === 'candidate' ? (
          <div className="space-y-6">
            {/* Search & Categories */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6B6358]" />
                <input
                  type="text"
                  placeholder="Search role, club, city (Bengaluru, Mumbai, Delhi)..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full bg-[#0D1118] border border-white/10 rounded-full pl-10 pr-4 py-2.5 text-xs text-white placeholder-[#6B6358] focus:outline-none focus:border-white"
                />
              </div>

              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                {CATEGORY_TABS.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition whitespace-nowrap ${
                      selectedCategory === cat
                        ? 'bg-[#D26539] text-[#090C10] font-bold'
                        : 'bg-[#0D1118] text-[#A8A090] border border-white/5 hover:border-white/20'
                    }`}
                  >
                    {cat === 'all' ? 'All Services' : cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Jobs Roster */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-[#0D1118] border border-white/10 rounded-none p-6 luxury-card flex flex-col justify-between space-y-5"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-0.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono text-[#A8A090] uppercase tracking-wider font-bold">
                        {job.category}
                      </span>
                      <span className="text-xs font-mono text-emerald-400 font-bold">
                        {job.salaryRange}
                      </span>
                    </div>

                    <h3 className="font-satoshi text-lg font-bold text-white uppercase">
                      {job.title}
                    </h3>

                    <div className="flex items-center gap-4 text-xs font-mono text-[#A8A090]">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-3.5 h-3.5 text-[#D26539]" />
                        {job.gymName}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#6B6358]" />
                        {job.location}
                      </span>
                    </div>

                    <p className="text-xs text-[#A8A090] font-sans line-clamp-2 leading-relaxed">
                      {job.description}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSelectedJob(job);
                      setIsApplyModalOpen(true);
                    }}
                    className="btn-vault w-full py-2.5 text-xs flex items-center justify-center gap-2"
                  >
                    <UserCheck className="w-3.5 h-3.5" />
                    <span>Apply with 1-Click</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Employer View */
          <div className="space-y-8">
            <div className="bg-[#0D1118] border border-white/10 rounded-none p-8 flex flex-col md:flex-row items-center justify-between gap-6 ">
              <div className="space-y-2">
                <span className="text-xs font-mono text-[#D26539] uppercase tracking-widest block">
                  COMMERCIAL CLUB TALENT ACQUISITION
                </span>
                <h2 className="font-satoshi text-2xl sm:text-3xl font-extrabold text-white uppercase">
                  Recruit Master Certified Staff for Your Facility
                </h2>
                <p className="text-sm text-[#A8A090] font-sans max-w-2xl">
                  Post open head trainer, general manager, and sales coordinator positions. Receive verified candidates screened for NASM/CSCS credentials.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsPostJobModalOpen(true)}
                className="btn-vault shrink-0 px-6 py-3.5 text-xs flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                <span>Post Staff Opening</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Candidate Apply Modal */}
      <AnimatePresence>
        {isApplyModalOpen && selectedJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80  flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-[#0D1118] border border-white/10 rounded-none max-w-lg w-full p-6 sm:p-8 space-y-6 "
            >
              <div className="flex items-start justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-[10px] font-mono text-[#D26539] uppercase tracking-widest block mb-1">
                    EXECUTIVE CANDIDATE APPLICATION
                  </span>
                  <h3 className="font-satoshi text-xl font-bold text-white uppercase">
                    {selectedJob.title} // {selectedJob.gymName}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setIsApplyModalOpen(false)}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-[#A8A090] hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleApplySubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-[#A8A090] uppercase mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={candidateForm.fullName}
                    onChange={e => setCandidateForm({ ...candidateForm, fullName: e.target.value })}
                    className="w-full bg-[#090C10] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#6B6358] focus:outline-none focus:border-[#D26539]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#A8A090] uppercase mb-1">Mobile Hotline</label>
                    <input
                      type="tel"
                      required
                      value={candidateForm.mobile}
                      onChange={e => setCandidateForm({ ...candidateForm, mobile: e.target.value })}
                      className="w-full bg-[#090C10] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#6B6358] focus:outline-none focus:border-[#D26539]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-[#A8A090] uppercase mb-1">Current City</label>
                    <input
                      type="text"
                      placeholder="Delhi NCR"
                      value={candidateForm.preferredCity}
                      onChange={e => setCandidateForm({ ...candidateForm, preferredCity: e.target.value })}
                      className="w-full bg-[#090C10] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#6B6358] focus:outline-none focus:border-[#D26539]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#A8A090] uppercase mb-1">Certifications & Accreditations</label>
                  <input
                    type="text"
                    value={candidateForm.certifications}
                    onChange={e => setCandidateForm({ ...candidateForm, certifications: e.target.value })}
                    className="w-full bg-[#090C10] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#6B6358] focus:outline-none focus:border-[#D26539]"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-vault w-full py-3 text-xs uppercase tracking-wider mt-2"
                >
                  Submit Application to Gym Director
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Employer Post Job Modal */}
      <AnimatePresence>
        {isPostJobModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80  flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-[#0D1118] border border-white/10 rounded-none max-w-lg w-full p-6 sm:p-8 space-y-6 "
            >
              <div className="flex items-start justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-[10px] font-mono text-[#D26539] uppercase tracking-widest block mb-1">
                    PUBLISH CLUB VACANCY
                  </span>
                  <h3 className="font-satoshi text-xl font-bold text-white uppercase">
                    New Staffing Requirement
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setIsPostJobModalOpen(false)}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-[#A8A090] hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handlePostJobSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-[#A8A090] uppercase mb-1">Role Title</label>
                  <input
                    type="text"
                    required
                    placeholder="Head Biomechanics Coach"
                    value={jobForm.title}
                    onChange={e => setJobForm({ ...jobForm, title: e.target.value })}
                    className="w-full bg-[#090C10] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#6B6358] focus:outline-none focus:border-[#D26539]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#A8A090] uppercase mb-1">Gym / Club Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Empire Fitness"
                      value={jobForm.gymName}
                      onChange={e => setJobForm({ ...jobForm, gymName: e.target.value })}
                      className="w-full bg-[#090C10] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#6B6358] focus:outline-none focus:border-[#D26539]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-[#A8A090] uppercase mb-1">Location</label>
                    <input
                      type="text"
                      required
                      placeholder="Indiranagar, Bengaluru"
                      value={jobForm.location}
                      onChange={e => setJobForm({ ...jobForm, location: e.target.value })}
                      className="w-full bg-[#090C10] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#6B6358] focus:outline-none focus:border-[#D26539]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#A8A090] uppercase mb-1">Category</label>
                    <select
                      value={jobForm.category}
                      onChange={e => setJobForm({ ...jobForm, category: e.target.value as any })}
                      className="w-full bg-[#090C10] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-white uppercase font-mono"
                    >
                      <option value="Management">Management (Club Manager)</option>
                      <option value="HR & Administration">HR & Administration (HR/Admin)</option>
                      <option value="Sales & Front Desk">Sales & Front Desk (Sales Executive + Receptionist)</option>
                      <option value="Fitness Team">Fitness Team (Head Trainer, Gym Trainers, PTs)</option>
                      <option value="Group Classes">Group Classes (Yoga, Zumba, CrossFit/HIIT, Sound Healing)</option>
                      <option value="Nutrition & Recovery">Nutrition & Recovery (Dietitian/Nutritionist, Physiotherapist)</option>
                      <option value="Facility Operations">Facility Operations (Housekeeping, Maintenance, Security)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-[#A8A090] uppercase mb-1">Salary Range</label>
                    <input
                      type="text"
                      placeholder="₹45,000 - ₹75,000 / month"
                      value={jobForm.salaryRange}
                      onChange={e => setJobForm({ ...jobForm, salaryRange: e.target.value })}
                      className="w-full bg-[#090C10] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#6B6358] focus:outline-none focus:border-[#D26539]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#A8A090] uppercase mb-1">Job Description</label>
                  <textarea
                    rows={3}
                    placeholder="Describe role responsibilities, required certifications..."
                    value={jobForm.description}
                    onChange={e => setJobForm({ ...jobForm, description: e.target.value })}
                    className="w-full bg-[#090C10] border border-white/10 rounded-xl p-3 text-sm text-white placeholder-[#6B6358] focus:outline-none focus:border-[#D26539]"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-vault w-full py-3 text-xs uppercase tracking-wider mt-2"
                >
                  Publish Opening to Roster
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};
