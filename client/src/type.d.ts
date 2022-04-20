type statusPropertie = "available" | "sold";

interface IPropertie {
  id: number;
  street: string;
  number: number;
  city: string;
  province: string;
  image: string;
  country: string;
  status: statusPropertie;
  type: string;
  description: string;
  contact_mail: string;
  contact_phone: string;
  condition: string;
  room: number;
  bath: number;
  size: number;
  price: number;
  pet: boolean;
  garden: boolean;
  air_conditioning: boolean;
  swimming_pool: boolean;
  terrace: boolean;
  publication_date: Date;
}

// action creators type for properties reducer

type ActionProperties = FILTERED_SEARCH | FIRST_SEARCH;
interface FIRST_SEARCH {
  type: string;
  payload: any;
}
interface FILTERED_SEARCH {
  type: string;
  payload: IPropertie[];
}

// action creators for user

type ActionsUser = signIn | signOut;

type signIn = {
  type: "LOGIN";
  payload: IUser;
};

type signOut = {
  type: "LOGOUT";
  payload: null;
};

interface IUser {
  firstName: string;
  lastName: string;
  token: string | null;
  email: string;
  created_at?: string;
  updated_at?: string;
  id?: number;
}

interface IUserForm {
  firstName?: string;
  lastName?: string;
  password: string;
  email: string;
  isRegistering?: boolean;
}

type PropertieState = {
  inputSearch: string;
  properties: IPropertie[] | [] | null;
};

type HomeType = "house" | "flat/apartment" | "duplex" | "penthouse";

type ConditionType = "new" | "good" | "need renovation";
interface IFormFilter {
  type: [HomeType] | [];
  condition: [ConditionType] | [];
  room: number | null;
  bath: number | null;
  price_gte: number | null;
  price_lte: number | null;
  pet: boolean | null;
  garden: boolean | null;
  air_conditioning: boolean | null;
  swimming_pool: boolean | null;
  terrace: boolean | null;
}
