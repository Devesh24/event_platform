import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from "next/image"
import { Separator } from "../ui/separator"
import Link from "next/link"
import NavItems from "./NavItems"
  
const MobileNav = () => {
  return (
    <nav className="md:hidden">
        <Sheet>
            <SheetTrigger className="align-middle">
                <Image src={"/assets/icons/menu.svg"} alt="menu" width={24} height={24} className="cursor-pointer"/>
            </SheetTrigger>
            <SheetContent className="bg-white flex flex-col gap-6 md:hidden">
                <Link href={"/"} className="w-36 flex gap-3 items-center">
                    <Image src={"/assets/images/logo.svg"} alt="EventGlide Logo" width={30} height={30}/>
                    <h1 className="text-xl tracking-wider font-extrabold">EventGlide</h1>
                </Link>
                <Separator className="border border-gray-50" />
                <NavItems />
            </SheetContent>
        </Sheet>

    </nav>
  )
}

export default MobileNav