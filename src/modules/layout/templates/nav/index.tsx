"use client"

import { Suspense, useEffect, useState } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import LogoSvg from "components/SVG/logo"
import { clx } from "@medusajs/ui"

export default function Nav({ children }: { children?: React.ReactNode }) {
  const [opacity, setOpacity] = useState(1)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      if (scrollPosition > 200) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={clx(
        "fixed top-0 inset-x-0 z-50 group duration-300",
        isScrolled && "-top-[200px]"
      )}
    >
      <header className="relative h-auto mx-auto duration-200 bg-gradient-to-b from-black to-transparent py-4">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          <div className="flex-1 basis-0 h-full flex items-center gap-5">
            <div className="h-full">{/* <SideMenu /> */}</div>
            <LocalizedClientLink
              href="/wydarzenia"
              className="txt-compact-xlarge-plus hover:text-ui-fg-base text-white text-xl"
              data-testid="nav-store-link"
            >
              Wydarzenia
            </LocalizedClientLink>
          </div>

          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
              data-testid="nav-store-link"
            >
              <LogoSvg scale={0.5} />
            </LocalizedClientLink>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end !text-white">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              {process.env.NEXT_PUBLIC_FEATURE_SEARCH_ENABLED && (
                <LocalizedClientLink
                  className="hover:text-ui-fg-base text-xl"
                  href="/search"
                  scroll={false}
                  data-testid="nav-search-link"
                >
                  Search
                </LocalizedClientLink>
              )}
              <LocalizedClientLink
                className="hover:text-ui-fg-base text-xl"
                href="/account"
                data-testid="nav-account-link"
              >
                Account
              </LocalizedClientLink>
            </div>
            {children}
          </div>
        </nav>
      </header>
    </div>
  )
}
