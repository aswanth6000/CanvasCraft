"use client"

import { useOrganizationList } from "@clerk/nextjs"
import { Item } from "./sidebar/item"


const List = () => {
    const {userMemberships} = useOrganizationList({
        userMemberships:{
            infinite: true
        }
    })
  return (
    <ul className="space-y-4">
        {userMemberships.data?.map((mem)=>(
            <Item 
            key={mem.organization.id}
                id={mem.organization.name}
                name={mem.organization.name}
                imageUrl={mem.organization.imageUrl}
           />
        ))}
    </ul>
  )
}

export default List