"use client"

import { useOrganizationList } from "@clerk/nextjs"


const List = () => {
    const {userMemberships} = useOrganizationList({
        userMemberships:{
            infinite: true
        }
    })
  return (
    <ul className="space-y-4">
        {userMemberships.data?.map((mem)=>(
            <p key={mem.organization.id}>
                {mem.organization.name}
            </p>
        ))}
    </ul>
  )
}

export default List