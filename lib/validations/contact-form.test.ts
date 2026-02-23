import { describe, it, expect } from 'vitest';
import {
  validateEmail,
  validatePhone,
  validateRequired,
  validateMinLength,
  validateContactForm,
  hasFormErrors,
  type ContactFormData
} from './contact-form';

describe('validateEmail', () => {
  it('should return valid for correct email format', () => {
    const result = validateEmail('test@example.com');
    expect(result.isValid).toBe(true);
    expect(result.error).toBeUndefined();
  });

  it('should return invalid for empty email', () => {
    const result = validateEmail('');
    expect(result.isValid).toBe(false);
    expect(result.error).toBe('Email is required');
  });

  it('should return invalid for email without @', () => {
    const result = validateEmail('testexample.com');
    expect(result.isValid).toBe(false);
    expect(result.error).toBe('Please enter a valid email address');
  });

  it('should return invalid for email without domain', () => {
    const result = validateEmail('test@');
    expect(result.isValid).toBe(false);
    expect(result.error).toBe('Please enter a valid email address');
  });

  it('should return invalid for email without TLD', () => {
    const result = validateEmail('test@example');
    expect(result.isValid).toBe(false);
    expect(result.error).toBe('Please enter a valid email address');
  });

  it('should handle whitespace-only email', () => {
    const result = validateEmail('   ');
    expect(result.isValid).toBe(false);
    expect(result.error).toBe('Email is required');
  });
});

describe('validatePhone', () => {
  it('should return valid for empty phone (optional field)', () => {
    const result = validatePhone('');
    expect(result.isValid).toBe(true);
    expect(result.error).toBeUndefined();
  });

  it('should return valid for correct phone format', () => {
    const result = validatePhone('+1234567890');
    expect(result.isValid).toBe(true);
  });

  it('should return valid for phone with formatting', () => {
    const result = validatePhone('(123) 456-7890');
    expect(result.isValid).toBe(true);
  });

  it('should return valid for phone with spaces', () => {
    const result = validatePhone('123 456 7890');
    expect(result.isValid).toBe(true);
  });

  it('should return invalid for phone with letters', () => {
    const result = validatePhone('123abc7890');
    expect(result.isValid).toBe(false);
    expect(result.error).toBe('Please enter a valid phone number');
  });

  it('should return invalid for too short phone', () => {
    const result = validatePhone('123');
    expect(result.isValid).toBe(false);
    expect(result.error).toBe('Please enter a valid phone number');
  });

  it('should return invalid for too long phone', () => {
    const result = validatePhone('12345678901234567890');
    expect(result.isValid).toBe(false);
    expect(result.error).toBe('Please enter a valid phone number');
  });
});

describe('validateRequired', () => {
  it('should return valid for non-empty value', () => {
    const result = validateRequired('test', 'Field');
    expect(result.isValid).toBe(true);
    expect(result.error).toBeUndefined();
  });

  it('should return invalid for empty value', () => {
    const result = validateRequired('', 'Field');
    expect(result.isValid).toBe(false);
    expect(result.error).toBe('Field is required');
  });

  it('should return invalid for whitespace-only value', () => {
    const result = validateRequired('   ', 'Field');
    expect(result.isValid).toBe(false);
    expect(result.error).toBe('Field is required');
  });

  it('should use custom field name in error message', () => {
    const result = validateRequired('', 'Full name');
    expect(result.error).toBe('Full name is required');
  });
});

describe('validateMinLength', () => {
  it('should return valid when value meets minimum length', () => {
    const result = validateMinLength('test', 4, 'Field');
    expect(result.isValid).toBe(true);
  });

  it('should return valid when value exceeds minimum length', () => {
    const result = validateMinLength('testing', 4, 'Field');
    expect(result.isValid).toBe(true);
  });

  it('should return invalid when value is below minimum length', () => {
    const result = validateMinLength('hi', 4, 'Field');
    expect(result.isValid).toBe(false);
    expect(result.error).toBe('Field must be at least 4 characters');
  });

  it('should trim whitespace before checking length', () => {
    const result = validateMinLength('  hi  ', 4, 'Field');
    expect(result.isValid).toBe(false);
  });
});

describe('validateContactForm', () => {
  const validFormData: ContactFormData = {
    fullName: 'John Doe',
    email: 'john@example.com',
    phone: '+1234567890',
    company: 'Test Company',
    serviceInterest: 'web-development',
    message: 'This is a test message with enough characters.'
  };

  it('should return no errors for valid form data', () => {
    const errors = validateContactForm(validFormData);
    expect(Object.keys(errors).length).toBe(0);
  });

  it('should return error for missing full name', () => {
    const data = { ...validFormData, fullName: '' };
    const errors = validateContactForm(data);
    expect(errors.fullName).toBeDefined();
  });

  it('should return error for full name too short', () => {
    const data = { ...validFormData, fullName: 'A' };
    const errors = validateContactForm(data);
    expect(errors.fullName).toBe('Full name must be at least 2 characters');
  });

  it('should return error for missing email', () => {
    const data = { ...validFormData, email: '' };
    const errors = validateContactForm(data);
    expect(errors.email).toBeDefined();
  });

  it('should return error for invalid email format', () => {
    const data = { ...validFormData, email: 'invalid-email' };
    const errors = validateContactForm(data);
    expect(errors.email).toBe('Please enter a valid email address');
  });

  it('should not return error for missing phone (optional)', () => {
    const data = { ...validFormData, phone: '' };
    const errors = validateContactForm(data);
    expect(errors.phone).toBeUndefined();
  });

  it('should return error for invalid phone format', () => {
    const data = { ...validFormData, phone: 'invalid' };
    const errors = validateContactForm(data);
    expect(errors.phone).toBeDefined();
  });

  it('should return error for missing service interest', () => {
    const data = { ...validFormData, serviceInterest: '' };
    const errors = validateContactForm(data);
    expect(errors.serviceInterest).toBeDefined();
  });

  it('should return error for missing message', () => {
    const data = { ...validFormData, message: '' };
    const errors = validateContactForm(data);
    expect(errors.message).toBeDefined();
  });

  it('should return error for message too short', () => {
    const data = { ...validFormData, message: 'Short' };
    const errors = validateContactForm(data);
    expect(errors.message).toBe('Message must be at least 10 characters');
  });

  it('should return multiple errors for multiple invalid fields', () => {
    const data: ContactFormData = {
      fullName: '',
      email: 'invalid',
      serviceInterest: '',
      message: 'Short'
    };
    const errors = validateContactForm(data);
    expect(Object.keys(errors).length).toBeGreaterThan(1);
    expect(errors.fullName).toBeDefined();
    expect(errors.email).toBeDefined();
    expect(errors.serviceInterest).toBeDefined();
    expect(errors.message).toBeDefined();
  });
});

describe('hasFormErrors', () => {
  it('should return false for empty errors object', () => {
    expect(hasFormErrors({})).toBe(false);
  });

  it('should return true for errors object with errors', () => {
    expect(hasFormErrors({ email: 'Invalid email' })).toBe(true);
  });

  it('should return true for multiple errors', () => {
    expect(hasFormErrors({
      email: 'Invalid email',
      fullName: 'Required'
    })).toBe(true);
  });
});
