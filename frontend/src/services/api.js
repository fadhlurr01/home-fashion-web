import localCats from '../data/cats.json';
import localTemplates from '../data/templates.json';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

export async function fetchCategories() {
  try {
    const res = await fetch(`${API_BASE_URL}/categories`, { signal: AbortSignal.timeout(3000) });
    if (!res.ok) throw new Error('API Error');
    const data = await res.json();
    return data.data || data;
  } catch (err) {
    // Graceful fallback to local high-fidelity data
    return localCats;
  }
}

export async function fetchTemplates(params = {}) {
  try {
    const query = new URLSearchParams(params).toString();
    const res = await fetch(`${API_BASE_URL}/templates?${query}`, { signal: AbortSignal.timeout(3000) });
    if (!res.ok) throw new Error('API Error');
    const data = await res.json();
    return data.data || data;
  } catch (err) {
    // Graceful fallback to local high-fidelity data
    let list = [...localTemplates];
    if (params.category && params.category !== 'all') {
      list = list.filter(t => t.cat === params.category);
    }
    if (params.search) {
      const q = params.search.toLowerCase();
      list = list.filter(t => 
        (t.name && t.name.toLowerCase().includes(q)) ||
        (t.desc && t.desc.toLowerCase().includes(q)) ||
        (t.cat && t.cat.toLowerCase().includes(q)) ||
        (t.tags && t.tags.some(tag => tag.toLowerCase().includes(q)))
      );
    }
    return list;
  }
}

export async function submitInquiry(inquiryData) {
  try {
    const res = await fetch(`${API_BASE_URL}/inquiries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(inquiryData),
    });
    return await res.json();
  } catch (err) {
    console.warn('API inquiry fallback, forwarding to WhatsApp directly', err);
    return { success: true, fallback: true };
  }
}
