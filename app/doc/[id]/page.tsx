
import Document from "@/components/Document"

const DocumentPage = async ({ params }:{params: Promise<{id: string}>}) => {

  const { id } = await params
  return (
    <>
      <div><Document id={id} /></div>
    </>
  )
}

export default DocumentPage