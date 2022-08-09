import validator from 'validator';
import createHttpError from 'http-errors';

export const validateAlphaData = (
  data: string,
  minLength: number,
  maxLength: number
) => {
  if (
    validator.isEmpty(data) ||
    !validator.isLength(data, {
      min: minLength,
      max: maxLength,
    }) ||
    !validator.isAlpha(data)
  ) {
    return false;
  } else {
    let validatedData = validator.trim(data);
    validatedData = validator.escape(validatedData);
    return validatedData;
  }
};

export const validateAlphaNumericData = (
  data: string,
  minLength: number,
  maxLength: number
) => {
  if (
    validator.isEmpty(data) ||
    !validator.isLength(data, {
      min: minLength,
      max: maxLength,
    }) ||
    !validator.isAlphanumeric(data)
  ) {
    return false;
  } else {
    let validatedData = validator.trim(data);
    validatedData = validator.escape(validatedData);
    return validatedData;
  }
};

export const validateEmail = (
  email: string,
  minLength: number,
  maxLength: number
) => {
  if (
    validator.isEmpty(email) ||
    !validator.isLength(email, {
      min: minLength,
      max: maxLength,
    }) ||
    !validator.isEmail(email)
  ) {
    return false;
  } else {
    let validatedData = validator.trim(email);
    validatedData = validator.escape(validatedData);
    const normalizedEmail = validator.normalizeEmail(validatedData);
    if (typeof normalizedEmail === 'string') return normalizedEmail;
    else createHttpError(500, 'Failed to validate information');
  }
};

export const validateStringWithSymbols = (
  data: string,
  minLength: number,
  maxLength: number
) => {
  if (
    validator.isEmpty(data) ||
    !validator.isLength(data, {
      min: minLength,
      max: maxLength,
    })
  ) {
    return false;
  } else {
    let validatedData = validator.trim(data);
    validatedData = validator.escape(validatedData);
    return validatedData;
  }
};

export const validateNumericData = (
  data: string,
  minLength: number,
  maxLength: number
) => {
  if (
    validator.isEmpty(data) ||
    !validator.isLength(data, {
      min: minLength,
      max: maxLength,
    }) ||
    !validator.isNumeric(data)
  ) {
    return false;
  } else {
    let validatedData = validator.trim(data);
    validatedData = validator.escape(validatedData);
    return validatedData;
  }
};
