import secureJson from 'secure-json-parse';
import { AddedQuantity } from '../app/items/[itemId]/actions';

// add this function of the package to ensure the cookies can not be manipulated
export function parseJson(
  stringifiedJson: string,
): AddedQuantity[] | undefined {
  if (!stringifiedJson) return undefined;
  try {
    return secureJson(stringifiedJson);
  } catch {
    return undefined;
  }
}
