import React from 'react'
import RenderInput from './jsonForm-ui'
import { FormSchemaType } from '@/utils/types'
import { Label } from './ui/label'

interface PropsType {
  formSchema: FormSchemaType[]
}

const FormPage = ({ formSchema }: PropsType) => {
  return (
    <section className='form-sec json-form-subsec'>
      <Label htmlFor='form-sec'>Here is your Form!!</Label>
      <section id='form-sec' className='json-form-sec json-editor-common'>
        {
          formSchema.map((item, key) => {
            return (
              <RenderInput key={key} {...item} />
            )
          })
        }
      </section>
    </section>
  )
}

export default FormPage
