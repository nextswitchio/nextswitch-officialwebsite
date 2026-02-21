export interface ContactFormData {
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  serviceInterest: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  company?: string;
  serviceInterest?: string;
  message?: string;
}

/**
 * Validates email format
 */
export const validateEmail = (email: string): ValidationResult => {
  if (!email || email.trim() === '') {
    return {
      isValid: false,
      error: 'Email is required'
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailRegex.test(email)) {
    return {
      isValid: false,
      error: 'Please enter a valid email address'
    };
  }

  return { isValid: true };
};

/**
 * Validates phone number format (optional field)
 */
export const validatePhone = (phone: string): ValidationResult => {
  // Phone is optional, so empty is valid
  if (!phone || phone.trim() === '') {
    return { isValid: true };
  }

  // Remove common formatting characters
  const cleanedPhone = phone.replace(/[\s\-\(\)\.]/g, '');
  
  // Check if it contains only digits and optional + at start
  const phoneRegex = /^\+?\d{10,15}$/;
  
  if (!phoneRegex.test(cleanedPhone)) {
    return {
      isValid: false,
      error: 'Please enter a valid phone number'
    };
  }

  return { isValid: true };
};

/**
 * Validates required field
 */
export const validateRequired = (value: string, fieldName: string): ValidationResult => {
  if (!value || value.trim() === '') {
    return {
      isValid: false,
      error: `${fieldName} is required`
    };
  }

  return { isValid: true };
};

/**
 * Validates minimum length
 */
export const validateMinLength = (
  value: string,
  minLength: number,
  fieldName: string
): ValidationResult => {
  if (value.trim().length < minLength) {
    return {
      isValid: false,
      error: `${fieldName} must be at least ${minLength} characters`
    };
  }

  return { isValid: true };
};

/**
 * Validates the entire contact form
 */
export const validateContactForm = (data: ContactFormData): FormErrors => {
  const errors: FormErrors = {};

  // Validate full name
  const nameValidation = validateRequired(data.fullName, 'Full name');
  if (!nameValidation.isValid) {
    errors.fullName = nameValidation.error;
  } else {
    const minLengthValidation = validateMinLength(data.fullName, 2, 'Full name');
    if (!minLengthValidation.isValid) {
      errors.fullName = minLengthValidation.error;
    }
  }

  // Validate email
  const emailValidation = validateEmail(data.email);
  if (!emailValidation.isValid) {
    errors.email = emailValidation.error;
  }

  // Validate phone (optional)
  if (data.phone) {
    const phoneValidation = validatePhone(data.phone);
    if (!phoneValidation.isValid) {
      errors.phone = phoneValidation.error;
    }
  }

  // Validate service interest
  const serviceValidation = validateRequired(data.serviceInterest, 'Service interest');
  if (!serviceValidation.isValid) {
    errors.serviceInterest = serviceValidation.error;
  }

  // Validate message
  const messageValidation = validateRequired(data.message, 'Message');
  if (!messageValidation.isValid) {
    errors.message = messageValidation.error;
  } else {
    const minLengthValidation = validateMinLength(data.message, 10, 'Message');
    if (!minLengthValidation.isValid) {
      errors.message = minLengthValidation.error;
    }
  }

  return errors;
};

/**
 * Checks if form has any errors
 */
export const hasFormErrors = (errors: FormErrors): boolean => {
  return Object.keys(errors).length > 0;
};
