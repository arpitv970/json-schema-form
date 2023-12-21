import FormPage from "@/components/FormPage";
import JSONEditor from "@/components/JSONEditor";
import Navbar from "@/components/common/Navbar";

export default function Home() {
  return (
    <section>
      <Navbar />
      <section className='json-form'>
        <JSONEditor />
        <FormPage />
      </section>
    </section>
  )
}
