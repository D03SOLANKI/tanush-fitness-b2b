export type JobRoleCategory =
  | 'Personal Trainer'
  | 'Gym Trainer'
  | 'Receptionist'
  | 'Sales Executive'
  | 'Housekeeping'
  | 'Cleaning Staff'
  | 'Nutritionist'
  | 'Gym Manager';

export interface JobListing {
  id: string;
  title: string;
  category: JobRoleCategory;
  gymName: string;
  location: string;
  salaryRange: string;
  type: 'Full-time' | 'Part-time' | 'Contract';
  experience: string;
  description: string;
  requirements: string[];
  createdAt: string;
  applicationsCount: number;
}

export interface JobApplication {
  id: string;
  jobId: string;
  jobTitle: string;
  gymName: string;
  fullName: string;
  mobile: string;
  email: string;
  resumeFileName: string;
  experience: string;
  preferredLocation: string;
  preferredCity?: string;
  preferredSalary?: string;
  skills?: string[];
  certifications: string;
  submittedAt: string;
  status: 'Pending Review' | 'Shortlisted' | 'Contacted' | 'Rejected';
}
