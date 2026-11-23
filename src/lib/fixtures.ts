export type Quote = {
  id: string; name: string; short: string; style: string; url: string;
  rate: number; sendingFee: number; receivingFee: number; payout: number;
  minutes: number; delivery: string; method: string; payment: string;
  type: 'demo' | 'live_executable' | 'live_indicative' | 'cached';
  sourceTimestamp: string; expiresAt: string; complete: boolean;
};

export const exampleQuotes: Quote[] = [
  { id: 'wise', name: 'Wise', short: 'wise', style: 'wise', url: 'https://wise.com/', rate: 23.48, sendingFee: 8.50, receivingFee: 0, payout: 23280.42, minutes: 10, delivery: 'In minutes', method: 'Bank transfer', payment: 'Bank transfer', type: 'demo', sourceTimestamp: '2026-11-23T08:00:00Z', expiresAt: '2026-11-23T08:05:00Z', complete: true },
  { id: 'remitly', name: 'Remitly', short: 'remitly', style: 'remitly', url: 'https://www.remitly.com/', rate: 23.42, sendingFee: 10, receivingFee: 0, payout: 23185.80, minutes: 120, delivery: 'Within 2 hours', method: 'Bank transfer', payment: 'Debit card', type: 'demo', sourceTimestamp: '2026-11-23T08:00:00Z', expiresAt: '2026-11-23T08:05:00Z', complete: true },
  { id: 'western-union', name: 'Western Union', short: 'WU', style: 'western', url: 'https://www.westernunion.com/', rate: 23.35, sendingFee: 15, receivingFee: 0, payout: 22999.75, minutes: 15, delivery: 'In minutes', method: 'Cash pickup', payment: 'Debit card', type: 'demo', sourceTimestamp: '2026-11-23T08:00:00Z', expiresAt: '2026-11-23T08:05:00Z', complete: true },
  { id: 'xe', name: 'Xe', short: 'xe', style: 'xe', url: 'https://www.xe.com/', rate: 23.30, sendingFee: 12, receivingFee: 0, payout: 23020.40, minutes: 1440, delivery: '1 business day', method: 'Bank transfer', payment: 'Bank transfer', type: 'demo', sourceTimestamp: '2026-11-23T08:00:00Z', expiresAt: '2026-11-23T08:05:00Z', complete: true }
];

export function getExampleQuotes(amount: number): Quote[] {
  return exampleQuotes.map(q => ({ ...q, payout: Math.round(Math.max(0, amount - q.sendingFee) * q.rate * 100) / 100 }));
}

export const exampleHistory = [23.18, 23.22, 23.19, 23.26, 23.21, 23.28, 23.27, 23.30, 23.23, 23.31, 23.33, 23.29, 23.38, 23.35, 23.37, 23.42, 23.39, 23.44, 23.41, 23.48];
