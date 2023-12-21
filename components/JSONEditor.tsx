'use client'
import React, { useState } from 'react'
import { Textarea } from './ui/textarea'
import { Label } from './ui/label'

interface PropsType {
  onSchemaChange: (schema: string) => void
}
const JSONEditor = ({ onSchemaChange }: PropsType) => {
  const [schema, setSchema] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newSchema = event.target.value
    setSchema(newSchema)
    onSchemaChange(newSchema)
    console.log('type of newSchema: ', typeof (newSchema), newSchema)
  }
  return (
    <section className='json-sec json-form-subsec'>
      <Label htmlFor='json-editor'>Enter Correct JSON Syntax</Label>
      <Textarea
        value={schema}
        id='json-editor'
        placeholder='Type Your Schema...'
        onChange={handleChange}
        rows={20}
      />
    </section>
  )
}

export default JSONEditor
