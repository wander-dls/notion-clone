"use client"

import { Input } from "@/components/ui/input"
import { FormEvent, useEffect, useState, useTransition } from "react"
import { Button } from "@/components/ui/button"
import { doc, updateDoc } from "firebase/firestore"
import { db } from "@/firebase"
import { useDocumentData } from "react-firebase-hooks/firestore"
import Editor from "@/components/Editor"


const Document = ({ id } : {id: string}) => {
  const [ input, setInput ] = useState<string>("")
  const [isUpdating, startTransition] = useTransition()
  const [data] = useDocumentData(doc(db, "documents", id))


  useEffect(() => {
    if(data) {
      setInput(data.title)
    }
  }, [data])

  const updateTitle = (e: FormEvent) => {
    e.preventDefault()
    
    if(input.trim()) {
      startTransition(async() => {
        // Update the title in the database
          await updateDoc(doc(db, "documents", id), {
            title: input
        })
      })
    }
}

  return (
   <>
       <div className="flex max-w-6xl mx-auto justify-between pb-5">
          <form onSubmit={updateTitle} className="flex space-x-2 flex-1">
            {/* update title... */}
            <Input value={input} onChange={(e) => setInput(e.target.value)} />
            <Button disabled={isUpdating} type="submit">{isUpdating ? "Updating..." : "Update"}</Button>
          </form>
       </div>
       <div>
          {/* Manage Users */}

          {/* Avatars */}
       </div>
       <div>
        <hr className="pb-10" />
          {/* Collaborative Editor */}
          <Editor />
       </div>
   </>
  )
}

export default Document