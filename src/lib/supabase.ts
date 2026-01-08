import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  stock: number;
  spiritual_properties: string;
  created_at: string;
};

export type Activity = {
  id: string;
  day_number: number;
  title: string;
  description: string;
  duration: string;
  created_at: string;
};

export type Reservation = {
  id: string;
  start_date: string;
  end_date: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  number_of_people: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  created_at: string;
};

export type AvailableDate = {
  id: string;
  start_date: string;
  end_date: string;
  max_capacity: number;
  current_bookings: number;
  is_available: boolean;
};
