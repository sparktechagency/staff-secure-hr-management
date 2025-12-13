interface IProfile {
  _id: string;
  name: string;
  email: string;
  profileImage: string;
  role: "candidate" | "admin" | "recruiter"; // extend if needed
  companyName: string;
  phone: string;
  status: "active" | "inactive" | "blocked";
  isDeleted: boolean;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  __v: number;
}

export type { IProfile };
