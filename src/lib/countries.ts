import countries from 'world-countries';

const sending = new Set(['AE','SA','QA','KW','OM','BH','GB','DE','FR','IT','ES','NL','IE','BE','CH','AT','PT','NO','SE','DK','US','CA','SG','MY','AU','NZ','HK','JP']);
export const countryList = countries.map(c => ({
  code: c.cca2,
  name: c.name.common === 'United States' ? 'United States' : c.name.common,
  currency: Object.keys(c.currencies)[0] || '',
  flag: c.flag,
  canSend: sending.has(c.cca2)
})).sort((a, b) => a.name.localeCompare(b.name));
export type Country = typeof countryList[number];
export function country(code: string) { return countryList.find(c => c.code === code); }
