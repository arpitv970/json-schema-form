export interface FormSchemaType {
  sort: number;
  label: string;
  description?: string;
  validate: {
    required: boolean;
    immutable: boolean;
    defaultValue?: string;
    options?: {
      label: string;
      value: string;
      description?: string;
      icon?: string;
    }[];
  };
  pattern?: string;
  jsonKey: string;
  uiType: string; // Change to string for Zod compatibility
  level: number;
  placeholder?: string;
  subParameters?: FormSchemaType[];
  icon?: string;
}
