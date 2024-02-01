"use client"
import Link from "next/link"
import Image from "next/image"
import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils"
import { OrganizationSwitcher } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Star } from "lucide-react"
import { useSearchParams } from "next/navigation"

const font = Poppins({
    subsets: ["latin"],
    weight: ["600"]
})

export const OrgSidebar = () =>{
    const searchParams = useSearchParams();
    const favorites = searchParams.get('favorites')
    return(
        <div className="hidden lg:flex flex-col space-y-6 w-[206px] pl-5 pt-5">
            <Link href='/'>
                <div className="flex items-center justify-center flex-col">
                    {/* <Image
                    src="/logo.png"
                    alt="Logo"
                    height={30}
                    width={30}>
                    </Image> */}
                    <span className={cn("font-semibold text-2xl", font.className)}>CanvasCraft</span>
                </div>
            </Link>
            <OrganizationSwitcher
            hidePersonal
            appearance={{
                elements: {
                    rootBox: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%"
                    },
                    organizationSwitcherTrigger: {
                        padding: "6px",
                        width: "100%",
                        borderRadius: "8px",
                        border: "1px solid #E5E7EB",
                        justifyContent: "space-between",
                        backgroundColor: "white"
                    }
                }
            }}
            />
            <div className="space-y-1 w-full">
                <Button
                variant={favorites ? "ghost" : "secondary"}
                asChild
                size="lg"
                className="font-normal justify-start px-1 w-full">
                    <Link href="/">
                    <LayoutDashboard className="h-4 w-4 mr-2"/>
                    Team Boards
                    </Link>
                </Button>
                <Button
                variant={favorites ? "secondary" :"ghost"}
                asChild
                size="lg"
                className="font-normal justify-start px-1 w-full">
                    <Link href={{
                        pathname: '/',
                        query: {favorites: true}
                    }}>
                    <Star className="h-4 w-4 mr-2"/>
                    Favorites
                    </Link>
                </Button>
            </div>
        </div>
    )
}