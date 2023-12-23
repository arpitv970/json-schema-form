export interface FormSchemaType {
  sort: number,
  label: string,
  description?: string,
  validate: {
    required: boolean,
    immutable: boolean,
    defaultValue?: string,
    options?: {
      lable: string,
      value: string,
      description?: string,
      icon?: string,
    }[]
  },
  pattern?: string,
  jsonKey: string,
  uiType: React.HTMLInputTypeAttribute,
  level: number,
  placeholder?: string,
  subParameters?: FormSchemaType[],
  icon?: string,
}
