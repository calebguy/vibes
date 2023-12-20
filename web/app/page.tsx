import Map from "@/components/Map";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12 w-full">
      <div>
        vibes only
      </div>
      <div className="grow w-full min-h-[1px]">
        <Map />
      </div>
    </main>
  )
}
