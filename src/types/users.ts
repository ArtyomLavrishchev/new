export type LocationType = {
  city: string;
  country: string;
}

export type UsersType = {
  id: number;
  name: string;
  photos: {
    small: string | null;
    large: string | null;
  };
  followed: boolean;
  status: string | null;
}
