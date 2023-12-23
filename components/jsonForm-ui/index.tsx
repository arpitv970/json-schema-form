import { FormSchemaType } from '@/utils/types'
import React from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

const RenderInput = (field: FormSchemaType) => {
  const { placeholder, label, uiType } = field
  return (
    <>
      <Label>{label}</Label>
      <Input
        type={uiType}
        placeholder={placeholder}
      />
    </>
  )
}

export default RenderInput
