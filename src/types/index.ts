export interface ConfirmationData {
  name: string;
  adults: number;
  children: number;
  toddlers: number;
  phone: string;
  attending: boolean;
}

export interface ApiResponse {
  message: string;
  data?: any;
}

export interface MenuItem {
  href: string;
  label: string;
}