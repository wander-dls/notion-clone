"use client"
import { useCollection } from "react-firebase-hooks/firestore"
import { useUser } from "@clerk/nextjs"
import NewDocumentButton from "@/components/NewDocumentButton"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"
import { collectionGroup, query, where, DocumentData } from "firebase/firestore"
import { db } from "@/firebase"
import { useEffect, useState } from "react"
import SidebarOption from "@/components/SidebarOption"

  

interface RoomDocument extends DocumentData {
    createAt: string
    role: 'owner' | 'editor'
    roomId: string
    userId: string
}

const SideBar = () => {
    const { user } = useUser()
    const [groupData, setGroupData] = useState<{
        owner: RoomDocument[]
        editor: RoomDocument[]
    }>({
        owner: [],
        editor: []
    })
    const [ data ] = useCollection(
        user && (
            query(
                collectionGroup(db, "rooms"),
                where('userId', '==', user.emailAddresses[0].toString())
            )
        )
    )

    useEffect(() => {
        if(!data) return

      const  grouped = data.docs.reduce<{
            owner: RoomDocument[]
            editor: RoomDocument[]
      }>(
            (acc, curr) => {
                const roomData = curr.data() as RoomDocument
                if(roomData.role === 'owner') {
                    acc.owner.push({
                        id: curr.id,
                        ...roomData
                    })
                } else {
                    acc.editor.push({
                        id: curr.id,
                        ...roomData
                    })
                }
                return acc
            },
            { 
                owner: [], 
                editor: [] 
            }
        )

        setGroupData(grouped)
    }, [data])
    const menuOptions = (
        <>
        <NewDocumentButton />

        {/* My Documents */}
        <div className="flex py-4 flex-col space-y-4 md:max-w-36 gap-2">
            {groupData.owner.length === 0 ? (
            <>
                <h2 className="text-gray-500 font-semibold text-sm">No document found</h2>
            </>
            ) : (
                <>
                    <h2 className="text-gray-500 font-semibold text-sm">My Documents</h2>
                    {groupData.owner.map((doc) => (
                       
                        <SidebarOption key={doc.id} id={doc.id} href={`/doc/${doc.id}`} />
                    ))}
                </>
            )}
        </div>
        </>
    )
    
  return (
    <>
        <div className="p-2 md:p-5 bg-gray-200 relative">
            <Sheet>
                <SheetTrigger>
                    <MenuIcon className="p-2 hover:opacity-30 rounded-lg md:hidden" size={40} />
                </SheetTrigger>
                <SheetContent side="left">
                    <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                    <div>{menuOptions}</div>
                    </SheetHeader>
                </SheetContent>
            </Sheet>

            <div className="hidden md:inline">
              {menuOptions}
            </div>
        </div>

        {/* Shared with Me */}
        {groupData.editor.length > 0 && (
                <>
                <h2 className="text-gray-500 font-semibold text-sm">My Documents</h2>
                {groupData.owner.map((doc) => (
                   
                    <SidebarOption key={doc.id} id={doc.id} href={`/doc/${doc.id}`} />
                ))}
            </>
        )}
    </>
  )
}
export default SideBar