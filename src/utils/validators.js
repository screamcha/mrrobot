export const required = value => (value ? "" : "The field is required");

export const minLength = length => value =>
  value.length < length ? `This field must be ${length} symbols or longer` : "";

export const confirmation = fieldName => (value, allValues) =>
  value === allValues[fieldName]
    ? ""
    : `This field must be equal to ${fieldName}`;
