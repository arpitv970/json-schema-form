'use client'
import { useEffect, useState } from "react";
import FormPage from "@/components/FormPage";
import JSONEditor from "@/components/JSONEditor";
import Navbar from "@/components/common/Navbar";
import jsonToForm from "@/utils";
import { FormSchemaType } from "@/utils/types";
import { useToast } from "@/components/ui/use-toast";

export default function Home() {
  const [uiSchema, setUiSchema] = useState<FormSchemaType[]>([]);
  const [formStructure, setFormStructure] = useState<any>(null);

  const { toast } = useToast();

  const handleSchemaChange = (newSchema: string) => {
    try {
      // convert the string to json
      const parsedSchema: FormSchemaType[] = [JSON.parse(newSchema)]
      setUiSchema(parsedSchema)

      console.log('parsed schema: ', parsedSchema, typeof (parsedSchema))
      if (typeof (parsedSchema) === "object") {
        setFormStructure(parsedSchema)
      } else {
        setFormStructure(null)
      }
    } catch (error: any) {
      console.log((error as Error).name)
      toast({
        variant: 'destructive',
        title: 'Something went wrong!!',
        description: `${(error as Error).name === 'SyntaxError' ? 'Please use correct JSON Syntax' : (error as Error).message}`,
        duration: 2000,
      })
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
