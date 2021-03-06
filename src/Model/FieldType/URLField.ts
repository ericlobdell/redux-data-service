import { IFieldType } from "./IFieldType";
import { isString } from "validate.js";

export const URLField: IFieldType<string> = {
  serialize: true,
  defaultValidationRules: { url: { allowLocal: true } },
  defaultValue: "",
  isValidType: (value) => value == null || isString(value),
  type: "URL",
  normalize: async (value) => String(value),
};
