import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

const visitorStorageKey = 'karataka-visitor-count';
const orderStorageKey = 'karataka-order-count';
const visitorSessionKey = 'karataka-visitor-counted';

export async function registerVisit(initialVisitors = 0, initialOrders = 0) {
  if (supabase) {
    const { error } = await supabase.from('site_visits').insert({});
    if (error) throw error;
    return getStats(initialVisitors, initialOrders);
  }

  const savedVisitors = Number(localStorage.getItem(visitorStorageKey)) || initialVisitors;
  if (!localStorage.getItem(visitorSessionKey)) {
    localStorage.setItem(visitorStorageKey, String(savedVisitors + 1));
    localStorage.setItem(visitorSessionKey, 'true');
  }

  return getStats(initialVisitors, initialOrders);
}

export async function getStats(initialVisitors = 0, initialOrders = 0) {
  if (supabase) {
    const { data, error } = await supabase.rpc('get_site_stats');
    if (error) throw error;
    return {
      visitors: data?.visitors ?? initialVisitors,
      orders: data?.orders ?? initialOrders
    };
  }

  return {
    visitors: Number(localStorage.getItem(visitorStorageKey)) || initialVisitors,
    orders: Number(localStorage.getItem(orderStorageKey)) || initialOrders
  };
}

export async function createPreorder(email) {
  if (supabase) {
    const { error } = await supabase.from('preorders').insert({ email, status: 'pending' });
    if (error) throw error;
    return;
  }

  const orders = Number(localStorage.getItem(orderStorageKey)) || 0;
  localStorage.setItem(orderStorageKey, String(orders + 1));
}
