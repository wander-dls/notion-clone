import { usePathname } from "next/navigation"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import { Fragment } from "react"
  

function Breadcrumbs() {
    const path = usePathname()

    const segments = path.split('/')

    console.log(segments)
  return (
   
    <>
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>

                {segments.map((segment, index) => {
                    if (!segment) return null


                    const isLastSegment = index === segments.length - 1
                    const href = `/${segments.slice(0, index + 1).join('/')}`

                    return (
                        <Fragment key={index}>
                            <BreadcrumbSeparator /> 
                            <BreadcrumbItem>
                            {isLastSegment ? (
                                <BreadcrumbPage>{segment}</BreadcrumbPage>
                            ) : (
                                <BreadcrumbLink href={href}> {segment} </BreadcrumbLink>
                            )}   
                            </BreadcrumbItem>
                        </Fragment>
                    )
                })}
            </BreadcrumbList>
        </Breadcrumb>

    </>
  )
}
export default Breadcrumbs