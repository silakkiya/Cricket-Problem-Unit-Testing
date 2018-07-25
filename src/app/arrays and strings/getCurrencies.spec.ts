import { getCurrencies } from './getCurrencies';
describe('getCurrencies',() => {
it('should contain foreign currency',() => {
 const result = getCurrencies();
 expect(result).toContain('AUSTRALIA');
 expect(result).toContain('USD');
 expect(result).toContain('MALASIA');
 expect(result).toContain('INDIA');
});
});