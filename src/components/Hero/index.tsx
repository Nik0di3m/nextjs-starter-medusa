"use client"
import HeroImage from "../../../public/img/piw-hero.jpg"
import BooksImage from "../../../public/img/books.png"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
const Hero = ({ isHomepage = false }) => {
  const pathName = usePathname()
  console.log(pathName)
  if (pathName === "/pl") {
    return (
      <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
        <div className="absolute bottom-0 left-5 z-30 aspect-[635/415] w-full max-w-[635px] bg-black/50 p-6">
          <p className="uppercase text-white font-semibold text-[40px] text-center max-w-[585px]">
            Słuchowisko na podstawie książki „Zsunęła się z krzesła. Ciennik”
            Krzysztofa Bieleckiego{" "}
          </p>
          <div className="caption-description"></div>
          <div className="pt-6 flex justify-center">
            <Link
              className="bg-yellow-400 py-4 px-14 rounded-md text-black font-bold text-center text-xl uppercase"
              href="https://info.piw.pl/wydarzenie/event-67"
            >
              TĘDY
            </Link>
          </div>
        </div>
        <Image
          src={HeroImage}
          alt="Hero Image"
          fill
          priority
          className="z-0 object-cover"
        />
      </div>
    )
  } else {
    return (
      <div className="h-[40vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
        <Image
          src={BooksImage}
          alt="Hero Image"
          fill
          priority
          className="z-0 object-cover"
        />
      </div>
    )
  }
}

export default Hero
