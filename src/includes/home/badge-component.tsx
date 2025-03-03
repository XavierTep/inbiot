import { Link } from "react-router"
import type { MeasurementData } from "./types.ts"
import { getStatus, formatMeasurementName, getMeasurementUnit } from "./utils/status-ranges.ts"

interface BadgeProps {
  data: MeasurementData
}

export default function Badge({ data }: BadgeProps) {
  const { dispositivo,iaq, updateTime, ...measurements } = data

  // Excluir campos que no son mediciones
  const excludeFields = ["id", "dispositivo", "updateTime"]

  const measurementEntries = Object.entries(measurements).filter(([key]) => !excludeFields.includes(key))
  
  const formatDate = (updateTime: number[]) => {
    const [year, month, day, hour, minute] = updateTime
    const date = new Date(year, month - 1, day, hour, minute)
    return date.toLocaleString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const color = getStatus("iaq", iaq)
  const radius = 18
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (iaq / 100) * circumference

  const isRuning = (dateArray: number[]) => {
    const givenDate = new Date(dateArray[0], dateArray[1] - 1, dateArray[2], dateArray[3], dateArray[4], dateArray[5]);
    const now = new Date();
    
    const differenceInMs = now.getTime() - givenDate.getTime();
    const differenceInMinutes = differenceInMs / (1000 * 60); // Convertir a minutos
  
    return differenceInMinutes <= 20;
  };

  return (
    <div className="relative group">
      <Link to={`/submenu/parametros/${dispositivo.id}`}>
      <div className="inline-flex items-center px-4 py-2 bg-neutral-100 rounded-full w-fit hover:bg-neutral-200 transition-colors cursor-pointer">
        <span className="text-neutral-800 font-medium mr-3 text-sm">{dispositivo.ndispositivo}</span>
        <div className="relative flex items-center justify-center shrink-0">
          <svg width="44" height="44" viewBox="0 0 44 44">
            <circle cx="22" cy="22" r={radius} fill="transparent" stroke="#e6e6e6" strokeWidth="2" />
            <circle
              cx="22"
              cy="22"
              r={radius}
              fill="transparent"
              stroke={isRuning(updateTime) ? color : "#626567"}
              strokeWidth="2"
              strokeDasharray={circumference}
              strokeDashoffset={isRuning(updateTime) ? offset : 0}
              strokeLinecap="round"
              transform="rotate(-90 22 22)"
            />
            <text x="22" y="22" textAnchor="middle" dy=".3em" fontSize="10" fontWeight="bold" fill={isRuning(updateTime) ? color : "#626567"}>
              {isRuning(updateTime) ? iaq : "OFF"}
            </text>
          </svg>
        </div>
      </div>
      </Link>
      {isRuning(updateTime) && (
      <div
        className="absolute left-0 top-full mt-2 w-full opacity-0 invisible 
                    group-hover:opacity-100 group-hover:visible 
                    transition-all duration-200 ease-in-out 
                    transform origin-top scale-95 group-hover:scale-100 z-50"
      >
        <div className="bg-white rounded-xl shadow-lg p-4 border border-neutral-200 min-w-[280px]">
          <div className="mb-3 pb-2 border-b border-neutral-100">
            <h3 className="font-medium text-neutral-800">{dispositivo.ndispositivo}</h3>
            <p className="text-xs text-neutral-500">{formatDate(updateTime)}</p>
          </div>
          <div className="space-y-2.5">
            {measurementEntries.map(([key, value]) => (
              <div key={key} className="flex items-center justify-between group/item">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      getStatus(key, value) === "#22c55e"
                      ? "bg-green-500"
                      : getStatus(key, value) === "#eab308"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                    }`}
                  />
                  <span className="text-sm text-neutral-600">{formatMeasurementName(key)}</span>
                </div>
                <span
                  className={`text-sm ${
                    getStatus(key, value) === "#22c55e"
                    ? "text-green-500"
                    : getStatus(key, value) === "#eab308"
                        ? "text-yellow-600"
                        : "text-red-600"
                  }`}
                >
                  {value.toFixed(1)} {getMeasurementUnit(key)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      )}


    </div>
  )
}