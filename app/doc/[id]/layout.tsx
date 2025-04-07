import RoomProvider from "@/components/RoomProvider"
import { auth } from "@clerk/nextjs/server"
import { ReactNode } from "react"


const DocLayout = async ({children, params: {id} } : {children: ReactNode, params: {id: string}}) => {
    const { userId, redirectToSignIn } = await auth()
    if (!userId) return redirectToSignIn()

  return (
    <RoomProvider roomId={id}>
        {children}
    </RoomProvider>
  )
}
export default DocLayout