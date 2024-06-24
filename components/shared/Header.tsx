import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <header className="w-full border-b">
        <div className="wrapper flex items-center justify-between">
            <Link href={"/"} className="w-36 flex gap-5 items-center">
                <Image src={"/assets/images/logo.svg"} alt="EventGlide Logo" width={30} height={30}/>
                <h1 className="text-xl tracking-wider font-extrabold">EventGlide</h1>
            </Link>
            
            <SignedIn>
                <nav className="md:flex-between hidden w-full max-w-xs">
                    <NavItems />
                </nav>
            </SignedIn>
            
            <div className="flex w-32 justify-end gap-3">
                <SignedIn>
                    <UserButton afterSignOutUrl="/" />
                    <MobileNav />
                </SignedIn>
                <SignedOut>
                    <Button asChild className="rounded-full" size={"lg"}>
                        <SignInButton />
                    </Button>
                </SignedOut>
            </div>
        </div>
    </header>
  )
}

export default Header