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

type PropertieState = {
  inputSearch: string;
  properties: IPropertie[] | [];
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
