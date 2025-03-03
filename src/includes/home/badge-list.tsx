import Badge from "./badge-component"
import type { MeasurementData } from "./types"

interface BadgeListProps {
  data: MeasurementData[]
}

export default function BadgeList({ data }: BadgeListProps) {
  return (
    <div className="flex flex-wrap gap-6 p-6 w-full max-w-[95%] mx-auto justify-start items-start">
      {data.map((measurement) => (
        <Badge key={measurement.id} data={measurement} />
      ))}
    </div>
  )
}

