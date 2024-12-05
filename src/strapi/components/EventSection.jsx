import React from "react"

const EventSection = ({ children, date }) => {
  const mounth = date.split(" ")[0]
  const year = date.split(" ")[1]
  return (
    <div
      id="ElementRoot"
      className="flex flex-col xl:flex-row justify-between w-full items-start py-2 border-b-2 border-[#e5e5e5]"
    >
      <div
        id="Month"
        className="bg-white flex flex-col gap-1 w-[400px] xl:h-[280px] items-start pl-6 py-6"
      >
        <div
          className="font-sans font-bold text-[#1e1e1e] capitalize"
          style={{
            fontSize: "44px",
            textTransform: "capitalize",
          }}
        >
          {mounth}
        </div>
        <div className="text-4xl font-sans font-light text-[#1e1e1e]">
          {year}
        </div>
      </div>
      <div className="grid grid-cols-2 w-full gap-2 p-5">{children}</div>
    </div>
  )
}

export default EventSection
