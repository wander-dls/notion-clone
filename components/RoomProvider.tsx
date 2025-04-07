'use client'

import { ReactNode } from "react"
import { ClientSideSuspense, RoomProvider as RoomProviderWrapper } from "@liveblocks/react/suspense"
import LoadingSpinner from "@/components/LoadingSpinner"
import LiveCursorProvider from "@/components/LiveCursorProvider"

const RoomProvider = ({roomId, children} : {children: ReactNode, roomId: string}) => {
  return (
    <>
        <RoomProviderWrapper id={roomId} initialPresence={{cursor: null}}>
            <ClientSideSuspense fallback={<LoadingSpinner />}>
                <LiveCursorProvider>
                    {children}
                </LiveCursorProvider>
            </ClientSideSuspense>
        </RoomProviderWrapper>
    </>
  )
}
export default RoomProvider