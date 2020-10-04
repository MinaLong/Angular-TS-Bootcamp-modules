import { UsernameValidator } from './username-validator';

describe('UsernameValidator', () => {
  it('should create an instance', () => {
    expect(new UsernameValidator(null)).toBeTruthy();
  });
});
