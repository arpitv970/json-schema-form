import { z } from 'zod'

const ZodFormSchema: z.ZodObject<any> = z.object({
  sort: z.number(),
  label: z.string(),
  description: z.string().optional(),
  validate: z.object({
    required: z.boolean(),
    immutable: z.boolean(),
    defaultValue: z.string().optional(),
    options: z.array(
      z.object({
        label: z.string(),
        value: z.string(),
        description: z.string().optional(),
        icon: z.string().optional(),
      })
    ).optional(),
  }),
  pattern: z.string().optional(),
  jsonKey: z.string(),
  uiType: z.string(), // String type for HTMLInputTypeAttribute
  level: z.number(),
  placeholder: z.string().optional(),
  subParameters: z.array(z.lazy(() => ZodFormSchema)).optional(),
  icon: z.string().optional(),
});
