interface ISignInUser {
  userId: string;
  name: string;
  sureName: string;
  companyName: string;
  email: string;
  candidateProfileId: string;
  isCvExist: boolean;
  role: string;
  iat: number; // issued at (UNIX timestamp)
  exp: number; // expiration time (UNIX timestamp)
}

export type { ISignInUser };
