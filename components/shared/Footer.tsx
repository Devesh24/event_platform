import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex flex-col flex-center flex-between wrapper gap-4 p-5 text-center sm:flex-row">
        <Link href={"/"} className="w-36 flex gap-5 items-center">
            <Image src={"/assets/images/logo.svg"} alt="EventGlide Logo" width={30} height={30}/>
            <h1 className="text-xl tracking-wider font-extrabold">EventGlide</h1>
        </Link>
        <p>2024 EventGlide. All Rights Resreved</p>
      </div>
    </footer>
  )
}

export default Footer