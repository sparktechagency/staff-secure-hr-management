// Salary Range Object
interface SalaryRange {
  min: number;
  max: number;
}

// Job Status Types
type JobStatus = "active" | "closed";

// Job Type (Full-Time, Part-Time, Contract)
type workTypeType = "Full-Time" | "Part-Time" | "Contract";

// Location Type (Onsite, Remote, Hybrid)
type JobType = "Onsite" | "Remote" | "Hybrid";

export interface IJob {
  _id: string; // PK
  employerId: string; // FK

  title: string;
  location: string;
  salaryRange: SalaryRange;
  experience: number;
  workType: workTypeType;
  jobType: JobType;
  workersNeeded: number;

  description: string;
  keyResponsibilities: string[];
  requirements: string[];
  benefits: string[];
  skillsRequired: string[];

  lastApplyDate: Date;
  status: JobStatus;

  isDeleted: boolean;
  jobReferralCode: string; // Unique

  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IApplication {
  _id: string;

  candidateId: {
    _id: string;
    name: string;
    email: string;
    bio: string;
    yearsOfExperience: number;
    cv: string;
  };

  jobId: {
    jobReferralCode: string;
    _id: string;
    title: string;
  };

  jobProviderOwnerId: {
    _id: string;
    name: string;
    email: string;
  };

  status: "pending" | "forwarded" | "selected" | "rejected";

  adminNotes: string;
  aiScore: number | null;
  aiReason: string;

  appliedAt: string;
  forwardedAt: string | null;
  selectedAt: string | null;
  rejectedAt: string | null;

  isDeleted: boolean;

  createdAt: string;
  updatedAt: string;
}
