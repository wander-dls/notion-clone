import NewDocumentButton from "@/components/NewDocumentButton"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"
  

const SideBar = () => {
    const menuOptions = (
        <NewDocumentButton />
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
    </>
  )
}
export default SideBar