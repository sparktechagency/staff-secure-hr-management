// Salary Range Object
interface SalaryRange {
  min: number;
  max: number;
}

// Job Status Types
type JobStatus = "New" | "CVs Sent" | "Closed";

// Job Type (Full-Time, Part-Time, Contract)
type workTypeType = "Full-Time" | "Part-Time" | "Temporary";

// Location Type (Onsite, Remote, Hybrid)
type JobType = "Onsite" | "Remote" | "Hybrid";

export interface IJob {
  _id: string; // PK
  employerId: string; // FK

  title: string;
  location: string;
  county: string;
  area: string;
  postalCode: string;
  jobType: JobType; // Adjusted based on your data
  workType: workTypeType; // Adjusted based on your data
  lengthOfWork: string; // Changed to string to reflect the example ('6 Month')
  paymentType: "Hourly" | "Monthly" | "Weekly"; // Added 'Weekly' based on your data
  salaryRange: SalaryRange; // { min: number, max: number }
  overtimePayRate?: number; // Optional field based on your data
  annualPay: number;
  hourlyRequired: number;
  startDate: Date;
  startTime: string;
  finishTime: string;
  daysOfWork: string[]; // Array of weekdays
  experience: number; // Number of years
  description: string;
  candidateDuties: string[]; // List of duties
  documentationCertificates: string[]; // List of documents or certificates
  benefits: string[]; // List of benefits
  additionalInformation?: string; // Optional additional info field

  lastApplyDate: Date;
  status: JobStatus; // Adjusted status types based on the example
  isDeleted: boolean;
  jobReferralCode: string; // Unique identifier for the job

  createdAt: string;
  updatedAt: string;
  __v: number;
  isApplied: boolean;
  totalReceivedCv: number;
  reviewedCv: number;
  newCv: number;
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
