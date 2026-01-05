interface IProfile {
  _id: string;
  name: string;
  email: string;
  profileImage: string;
  role: "candidate" | "admin" | "recruiter";
  mySubscriptionsId: string;
  companyName: string;
  phone: string;
  status: "active" | "inactive" | "blocked";
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface ICandidateProfile {
  _id: string;
  name: string;
  email: string;
  profileImage: string;
  role: "candidate" | "admin" | "recruiter";
  companyName: string;
  phone: string;
  status: "active" | "inactive" | "blocked";
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  candidateProfileId: {
    _id: string;
    userId: string;

    name: string;
    email: string;
    location: string;
    area: string;
    postalCode: string;
    county: string;
    designation: string;
    availability: string;

    dateOfBirth: string | null;
    yearsOfExperience: number;

    qualifications: string[];
    skills: string[];
    bio: string;

    cv: string;
    documentAndCertifications: string[];

    createdAt: string;
    updatedAt: string;

    __v: number;
  };
}

export type { IProfile, ICandidateProfile };
