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
  data: string | number,
  minLength: number,
  maxLength: number
) => {
  let convertedData = data;
  if (typeof data === 'number') {
    convertedData = data.toString();
  } else {
    convertedData = data;
  }
  if (
    validator.isEmpty(convertedData) ||
    !validator.isLength(convertedData, {
      min: minLength,
      max: maxLength,
    }) ||
    !validator.isNumeric(convertedData)
  ) {
    return false;
  } else {
    let validatedData = validator.trim(convertedData);
    validatedData = validator.escape(validatedData);
    return validatedData;
  }
};
