interface ISignInUser {
  userId: string;
  name: string;
  sureName: string;
  companyName: string;
  email: string;
  hasActiveSubscription: boolean;
  candidateProfileId: string;
  isCvExist: boolean;
  role: string;
  iat: number; // issued at (UNIX timestamp)
  exp: number; // expiration time (UNIX timestamp)
}

export type { ISignInUser };
