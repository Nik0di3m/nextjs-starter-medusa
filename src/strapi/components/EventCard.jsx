import { formatDateToLocale } from "strapi/lib/helpers"
import Link from "next/link"
import React from "react"

const EventCard = ({ title, date, startHour, endHour, slug }) => {
  const day = new Date(date).getDate()
  return (
    <div className="bg-[#f8f8f8] flex flex-col justify-center p-6 gap-6 w-full h-[280px] items-start">
      <div className="flex flex-row gap-3 w-full items-start">
        <div className="flex flex-col gap-5 w-4/5 items-start">
          <div className="flex flex-row gap-1 items-start">
            <div
              className="font-sans font-bold  text-[#1e1e1e] mt-1"
              style={{
                fontSize: "34px",
                textTransform: "capitalize",
              }}
            >
              {day.lenght === 1 ? "0" : ""}
              {day}
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
      <Link
        href={`/wydarzenia/${slug}`}
        className="text-2xl font-sans font-bold text-[#1e1e1e] w-full"
      >
        {title}
      </Link>
    </div>
  )
}

export default EventCard
