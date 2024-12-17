import Hero from "@modules/home/components/hero"

export default async function CartLayout(props: { children: React.ReactNode }) {
  return (
    <>
      <Hero />
      {props.children}
    </>
  )
}
