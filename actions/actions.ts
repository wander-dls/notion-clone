"use server"

import { adminDb } from "@/firebase-admin"
import { auth } from "@clerk/nextjs/server"


export async function createNewDocument() {
    const { userId, redirectToSignIn } = await auth()
    if (!userId) return redirectToSignIn()

    const { sessionClaims } = await auth()
    const docCollectionRef = adminDb.collection("documents")
    const docRef = await docCollectionRef.add({
        title: "New Doc"
    })
    
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    await adminDb.collection('users').doc(sessionClaims?.email!).collection('rooms').doc(docRef.id).set({
        userId: sessionClaims?.email,
        role: 'owner',
        createAt: new Date(),
        roomId: docRef.id,
    })

    return {docId: docRef.id}
}
