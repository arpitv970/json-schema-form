'use client'
import { useState } from "react";
import FormPage from "@/components/FormPage";
import JSONEditor from "@/components/JSONEditor";
import Navbar from "@/components/common/Navbar";
import jsonToForm from "@/utils";
import { FormSchemaType } from "@/utils/types";
import { useToast } from "@/components/ui/use-toast";

export default function Home() {
  const [uiSchema, setUiSchema] = useState<string>('');
  const [formStructure, setFormStructure] = useState<any>(null);

  const { toast } = useToast();

  const handleSchemaChange = (newSchema: string) => {
    try {
      setUiSchema(newSchema)

      // convert the string to json
      const parsedSchema: FormSchemaType[] = JSON.parse(newSchema)
      console.log('parsed schema: ', parsedSchema)
      setFormStructure(parsedSchema)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section>
      <Navbar />
      <section className='json-form'>
        <JSONEditor onSchemaChange={handleSchemaChange} />
        <FormPage />
      </section>
    </section>
  )
}
