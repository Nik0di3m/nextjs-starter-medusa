import Link from "next/link"
import React from "react"
import { formatDateToLocale } from "strapi/lib/helpers"
import { parseContent } from "strapi/lib/richTextParser"
import ArrowBack from "strapi/components/Icons/ArrowBack"
import { getStrapiContent } from "strapi/lib/api"

type Props = {
  params: Promise<{ slug: string }>
}

export default async function EventPage(props: Props) {
  const params = await props.params
  const { slug } = params
  console.log("SLUG>>>", slug)
  const events = await getStrapiContent({
    slug: "events",
    queryObj: {
      filters: {
        slug: {
          $eq: slug,
        },
      },
    },
  })

  const startDate = new Date(events[0].attributes.startDate)
  const endDate = new Date(events[0].attributes.endDate)

  // Opcje formatowania daty i czasu dla Polski
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Europe/Warsaw",
  }

  const startHour = startDate.toLocaleString("pl-PL", options)
  const endHour = endDate.toLocaleString("pl-PL", options)

  return (
    <>
      {/* <Hero title={events[0].attributes.title} image={"/ksiegarnia.jpg"} /> */}
      <main className="max-w-[1320px] w-full mx-auto py-7 xl:py-20">
        <section className="flex flex-col xl:flex-row p-5">
          <div className="pb-12">
            <div
              id="EventRoot"
              className="bg-white xl:flex flex-col justify-start p-6 pl-0 gap-24 w-full  items-start col-span-2"
            >
              <div className="flex flex-row gap-3 xl:w-full items-start">
                <div className="flex flex-col gap-2 w-4/5 items-start">
                  <div className="flex flex-row gap-1 items-start">
                    <div className="text-xl font-sans font-bold  text-[#1e1e1e] mt-1">
                      {formatDateToLocale(events[0].attributes.startDate)}
                    </div>
                  </div>
                  <div className="flex flex-row gap-3 w-full items-center">
                    <div
                      id="Element3"
                      className="text-xl font-sans font-light text-[#1e1e1e]"
                    >
                      {startHour}
                    </div>
                    <div id="Line" className="bg-[#ffc800] w-3/4 h-px" />
                    <div
                      id="Element4"
                      className="text-right text-xl font-sans font-light text-[#1e1e1e]"
                    >
                      {endHour}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col mt-8 gap-4 w-12 items-start"></div>
              </div>
            </div>
            <Link
              href={"/wydarzenia"}
              className="flex flex-row gap-2 w-full cursor-pointer items-center"
            >
              <ArrowBack />
              <div className="font-bold text-[#6c757d]">
                Wróć do listy wydarzeń
              </div>
            </Link>
          </div>
          <div
            className="prose max-w-[976px] mx-auto"
            dangerouslySetInnerHTML={{
              __html: parseContent(events[0].attributes.content),
            }}
          />
        </section>
      </main>
    </>
  )
}
