import { FormSchemaType } from '@/utils/types'
import React from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

const RenderInput = (field: FormSchemaType) => {
  const { placeholder, label, uiType, sort, level, icon, jsonKey, validate, pattern, description, subParameters } = field
  return (
    <>
      <Label>{label}{validate.required ?
        <span className='text-red-500'>*</span> : ''}
      </Label>
      <Input
        hidden={validate.immutable}
        type={uiType}
        placeholder={placeholder}
      />
    </>
  )
}

export default RenderInput
