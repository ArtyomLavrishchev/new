export type LocationType = {
  city: string;
  country: string;
}

export type UsersType = {
  id: string;
  photoUrl: string;
  followed: boolean;
  fullName: string;
  status: string;
  location: LocationType;
}
