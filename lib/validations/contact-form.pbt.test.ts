import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import {
  validateEmail,
  validatePhone,
  validateContactForm,
  hasFormErrors,
  type ContactFormData
} from './contact-form';

describe('Contact Form - Property-Based Tests', () => {
  describe('Property 2: Form Validation Consistency', () => {
    it('should always accept valid email addresses', () => {
      fc.assert(
        fc.property(fc.emailAddress(), (email) => {
          const result = validateEmail(email);
          return result.isValid === true;
        }),
        { numRuns: 100 }
      );
    });

    it('should always reject invalid email formats', () => {
      // Generate strings that are definitely not valid emails
      const invalidEmailArbitrary = fc.string().filter(s => {
        // Filter out strings that might accidentally be valid emails
        return !s.includes('@') || !s.includes('.') || s.length < 5;
      });

      fc.assert(
        fc.property(invalidEmailArbitrary, (invalidEmail) => {
          const result = validateEmail(invalidEmail);
          return result.isValid === false && result.error !== undefined;
        }),
        { numRuns: 100 }
      );
    });

    it('should always accept empty phone (optional field)', () => {
      fc.assert(
        fc.property(fc.constantFrom('', '   ', '\t'), (emptyPhone) => {
          const result = validatePhone(emptyPhone);
          return result.isValid === true;
        }),
        { numRuns: 50 }
      );
    });

    it('should consistently validate phone numbers with valid formats', () => {
      // Generate valid phone numbers
      const validPhoneArbitrary = fc.integer({ min: 1000000000, max: 999999999999999 }).map(n => `+${n}`);

      fc.assert(
        fc.property(validPhoneArbitrary, (phone) => {
          const result = validatePhone(phone);
          return result.isValid === true;
        }),
        { numRuns: 100 }
      );
    });

    it('should always show errors for required fields when empty', () => {
      const emptyFormArbitrary = fc.record({
        fullName: fc.constantFrom('', '   '),
        email: fc.constantFrom('', '   '),
        phone: fc.string(),
        company: fc.string(),
        serviceInterest: fc.constantFrom('', '   '),
        message: fc.constantFrom('', '   ')
      });

      fc.assert(
        fc.property(emptyFormArbitrary, (emptyForm) => {
          const errors = validateContactForm(emptyForm as ContactFormData);
          return errors.fullName !== undefined &&
                 errors.email !== undefined &&
                 errors.serviceInterest !== undefined &&
                 errors.message !== undefined;
        }),
        { numRuns: 100 }
      );
    });

    it('should never show errors for valid complete form', () => {
      const validFormArbitrary = fc.record({
        fullName: fc.string({ minLength: 2, maxLength: 50 }),
        email: fc.emailAddress(),
        phone: fc.option(fc.integer({ min: 1000000000, max: 999999999999999 }).map(n => `+${n}`), { nil: '' }),
        company: fc.string({ maxLength: 100 }),
        serviceInterest: fc.constantFrom(
          'web-development',
          'mobile-development',
          'tech-training',
          'innovation-labs',
          'custom-software-development',
          'it-consulting',
          'general-inquiry'
        ),
        message: fc.string({ minLength: 10, maxLength: 500 })
      });

      fc.assert(
        fc.property(validFormArbitrary, (validForm) => {
          const errors = validateContactForm(validForm as ContactFormData);
          return !hasFormErrors(errors);
        }),
        { numRuns: 100 }
      );
    });

    it('should be deterministic - same input produces same output', () => {
      const formArbitrary = fc.record({
        fullName: fc.string(),
        email: fc.string(),
        phone: fc.string(),
        company: fc.string(),
        serviceInterest: fc.string(),
        message: fc.string()
      });

      fc.assert(
        fc.property(formArbitrary, (form) => {
          const errors1 = validateContactForm(form as ContactFormData);
          const errors2 = validateContactForm(form as ContactFormData);
          
          // Same input should produce same errors
          const keys1 = Object.keys(errors1).sort();
          const keys2 = Object.keys(errors2).sort();
          
          return JSON.stringify(keys1) === JSON.stringify(keys2);
        }),
        { numRuns: 100 }
      );
    });

    it('should validate message minimum length consistently', () => {
      const shortMessageArbitrary = fc.string({ maxLength: 9 });

      fc.assert(
        fc.property(shortMessageArbitrary, (shortMessage) => {
          const form: ContactFormData = {
            fullName: 'John Doe',
            email: 'john@example.com',
            serviceInterest: 'web-development',
            message: shortMessage
          };
          
          const errors = validateContactForm(form);
          return errors.message !== undefined;
        }),
        { numRuns: 100 }
      );
    });

    it('should validate fullName minimum length consistently', () => {
      const shortNameArbitrary = fc.string({ maxLength: 1 });

      fc.assert(
        fc.property(shortNameArbitrary, (shortName) => {
          const form: ContactFormData = {
            fullName: shortName,
            email: 'john@example.com',
            serviceInterest: 'web-development',
            message: 'This is a valid message with enough characters.'
          };
          
          const errors = validateContactForm(form);
          return errors.fullName !== undefined;
        }),
        { numRuns: 100 }
      );
    });
  });
});
