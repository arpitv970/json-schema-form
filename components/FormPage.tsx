import React from 'react'
import RenderInput from './jsonForm-ui'
import { FormSchemaType } from '@/utils/types'

interface PropsType {
  formSchema: FormSchemaType[]
}

const FormPage = ({ formSchema }: PropsType) => {
  return (
    <section className='form-sec json-form-subsec'>
      {
        formSchema.map((item, key) => {
          return (
            <RenderInput key={key} {...item} />
          )
        })
      }
    </section>
  )
}

export default FormPage
