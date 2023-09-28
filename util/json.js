import secureJson from 'secure-json-parse';

// add this function of the package to ensure the cookies can not be manipulated
export function parseJson(stringifiedJson) {
  if (!stringifiedJson) return undefined;
  try {
    return secureJson(stringifiedJson);
  } catch {
    return undefined;
  }
}
