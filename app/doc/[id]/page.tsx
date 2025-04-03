'use client'

import Document from "@/components/Document"

const DocumentPage = ({ params: {id}}:{params:{id: string}}) => {
  return (
    <>
      <div><Document id={id} /></div>
    </>
  )
}

export default DocumentPage