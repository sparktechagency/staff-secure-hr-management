export * from "./auth.type";
export * from "./job.type";

export interface IMySubscription {
  _id: string;
  employerId: string; // user/employer ID
  type: "Bronze" | "Silver" | "Gold" | "Platinum" | "Diamond";
  buyTime: string; // ISO date
  howManyMonths: number;
  expireDate: string; // ISO date
  paymentId: string;
  status: "active" | "expired" | "cancelled";
  isDeleted: boolean;
  createdAt: string; // ISO date
  updatedAt: string; // ISO date
  __v: number;
  limit: number; // total CV limit
  usedCV: number; // used CV count
}
