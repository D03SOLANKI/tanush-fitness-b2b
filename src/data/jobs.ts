import { JobListing } from '../types';

export const INITIAL_JOBS: JobListing[] = [
  {
    id: 'job-1',
    title: 'Lead CSCS Master Personal Trainer',
    category: 'Personal Trainer',
    gymName: 'Apex Athletics Franchise',
    location: 'Chicago, IL',
    salaryRange: '₹35,000 - ₹60,000 / month + Commissions',
    type: 'Full-time',
    experience: '3+ Years',
    description: 'Looking for a certified master personal trainer to conduct 1-on-1 athletic strength programming, body composition assessments, and premium client training.',
    requirements: [
      'NASM, ACE, or CSCS Certification',
      'Proven track record of client retention',
      'CPR/AED Certified'
    ],
    createdAt: '2 days ago',
    applicationsCount: 14
  },
  {
    id: 'job-2',
    title: 'Senior Gym Operations & Facility Manager',
    category: 'Gym Manager',
    gymName: 'Vanguard Athletic Club',
    location: 'Austin, TX',
    salaryRange: '₹50,000 - ₹85,000 / month',
    type: 'Full-time',
    experience: '4+ Years',
    description: 'Manage day-to-day 45,000 sq ft facility operations, staff scheduling, equipment maintenance logs, and membership sales targets.',
    requirements: [
      'Bachelor Degree in Sports Management or Business Administration',
      '3+ years experience managing health clubs',
      'Strong leadership and financial budgeting skills'
    ],
    createdAt: '1 day ago',
    applicationsCount: 9
  },
  {
    id: 'job-3',
    title: 'Front Desk & Member Relations Receptionist',
    category: 'Receptionist',
    gymName: 'OmniFit High-Performance Studio',
    location: 'Miami, FL',
    salaryRange: '₹18,000 - ₹25,000 / month',
    type: 'Full-time',
    experience: '1+ Year',
    description: 'Welcoming members, managing check-ins, answering inquiries, handling POS retail smoothie bar sales, and assisting with prospective tour bookings.',
    requirements: [
      'Strong verbal communication and customer service background',
      'Familiarity with gym CRM software',
      'Enthusiastic fitness mindset'
    ],
    createdAt: '3 days ago',
    applicationsCount: 22
  },
  {
    id: 'job-4',
    title: 'Membership Sales Executive',
    category: 'Sales Executive',
    gymName: 'Pinnacle Performance Center',
    location: 'Denver, CO',
    salaryRange: '₹25,000 - ₹45,000 / month + Uncapped Incentives',
    type: 'Full-time',
    experience: '2+ Years',
    description: 'Drive high-converting phone calls, corporate wellness outreach, and local membership lead conversions.',
    requirements: [
      'Proven sales track record in fitness or retail',
      'Strong phone prospecting & CRM follow-up skills'
    ],
    createdAt: '4 days ago',
    applicationsCount: 18
  },
  {
    id: 'job-5',
    title: 'Floor Fitness Instructor & Equipment Safety Coach',
    category: 'Gym Trainer',
    gymName: 'IronEdge Health Club',
    location: 'Dallas, TX',
    salaryRange: '₹22,000 - ₹32,000 / month',
    type: 'Full-time',
    experience: '1+ Year',
    description: 'Assist floor members with proper lifting posture, re-racking safety, equipment orientation, and introductory training trials.',
    requirements: [
      'Degree in Kinesiology or Certified Fitness Trainer',
      'High energy and approachable attitude'
    ],
    createdAt: '5 days ago',
    applicationsCount: 11
  },
  {
    id: 'job-6',
    title: 'Sports Performance Nutritionist & Dietitian',
    category: 'Nutritionist',
    gymName: 'Aura Health & Performance',
    location: 'San Jose, CA',
    salaryRange: '₹30,000 - ₹50,000 / month',
    type: 'Full-time',
    experience: '2+ Years',
    description: 'Conduct body composition scans, design meal plans for bodybuilders and endurance athletes, and consult on supplement protocols.',
    requirements: [
      'Registered Dietitian (RD) or Certified Sports Nutritionist',
      'Experience with InBody / DEXA scan analysis'
    ],
    createdAt: '6 days ago',
    applicationsCount: 7
  },
  {
    id: 'job-7',
    title: 'Sanitation & Locker Room Maintenance Lead',
    category: 'Cleaning Staff',
    gymName: 'Vanguard Athletic Club',
    location: 'Austin, TX',
    salaryRange: '₹16,000 - ₹22,000 / month',
    type: 'Full-time',
    experience: '1+ Year',
    description: 'Responsible for continuous steam cleaning, locker room restocking, towel washing, and disinfectant wiping across all weight zones.',
    requirements: [
      'Attention to detail and hygiene standards',
      'Reliable attendance record'
    ],
    createdAt: '1 week ago',
    applicationsCount: 15
  }
];
