import Image from "next/image"
import EventCard from "strapi/components/EventCard"
import EventSection from "strapi/components/EventSection"
import { getStrapiContent } from "strapi/lib/api"
import { getHoursAndMinutes } from "strapi/lib/helpers"
export default async function Home() {
  /// TODO: Repair this code !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  const events = await getStrapiContent({
    slug: "events",
    queryObj: {
      filters: {
        startDate: {
          $gte: new Date(new Date().setHours(0, 0, 0, 0)).toISOString(),
        },
      },
    },
  })

  console.log("EVENTS>>>", events)

  const groupedByMonth = {}

  const monthNameToNumber = {
    styczeń: 1,
    luty: 2,
    marzec: 3,
    kwiecień: 4,
    maj: 5,
    czerwiec: 6,
    lipiec: 7,
    sierpień: 8,
    wrzesień: 9,
    październik: 10,
    listopad: 11,
    grudzień: 12,
  }

  events
    .sort((a, b) => a.attributes.startDate - b.attributes.startDate)
    .forEach((event) => {
      const date = new Date(event.attributes.startDate)
      const month = date.toLocaleString("pl-PL", {
        month: "long",
        year: "numeric",
      })

      if (!groupedByMonth[month]) {
        groupedByMonth[month] = []
      }

      groupedByMonth[month].push(event)
    })

  // Sortowanie według numeru miesiąca i roku
  const sortedByMonthYear = Object.entries(groupedByMonth).sort((a, b) => {
    const [monthA, yearA] = a[0].split(" ")
    const [monthB, yearB] = b[0].split(" ")

    // Porównanie lat
    if (yearA !== yearB) {
      return yearA - yearB
    }

    // Porównanie miesięcy
    return monthNameToNumber[monthA] - monthNameToNumber[monthB]
  })

  const arrayWithKeys = sortedByMonthYear.map(([key, value]) => {
    return {
      monthYear: key,
      events: value,
      sort: monthNameToNumber[key.split(" ")[0]],
    }
  })

  return (
    <>
      <main className="max-w-[1320px] w-full mx-auto py-7 xl:py-20">
        {arrayWithKeys.length > 0 ? (
          <>
            {arrayWithKeys
              .sort((a, b) => a.sort - b.sort)
              .map(({ monthYear, events }) => {
                return (
                  <EventSection key={monthYear} date={monthYear}>
                    {events
                      .sort(
                        (a, b) =>
                          new Date(a.attributes.startDate) -
                          new Date(b.attributes.startDate)
                      )
                      .map((event) => {
                        return (
                          <EventCard
                            key={event.id}
                            title={event.attributes.title}
                            date={event.attributes.startDate}
                            startHour={getHoursAndMinutes(
                              event.attributes.startDate
                            )}
                            endHour={getHoursAndMinutes(
                              event.attributes.endDate
                            )}
                            slug={event.attributes.slug}
                          />
                        )
                      })}
                  </EventSection>
                )
              })}
          </>
        ) : (
          <div className="flex justify-center">
            <span className="text-center text-2xl">
              Brak przyszłych wydarzeń
            </span>
          </div>
        )}
      </main>
    </>
  )
}
