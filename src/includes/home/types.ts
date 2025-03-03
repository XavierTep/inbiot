
  
  export interface DeviceData {
    id: number
    referencia: string
    ndispositivo: string
  }
  
  export interface MeasurementData {
    id: number
    dispositivo: DeviceData
    temperature: number
    formaldehyde: number
    o3: number
    co: number
    no2: number
    humidity: number
    pm1: number
    pm4: number
    co2: number
    vocs: number
    pm10: number
    pm25: number
    covid19: number
    iaq: number
    thermalIndicator: number
    ventilationIndicator: number
    updateTime: number[]
  }
  
  export interface RoomData {
    id: number
    name: string
    devices: MeasurementData[]
  }
  
  export interface HospitalData {
    id: number
    name: string
    rooms: RoomData[]
  }
  
  
  export type Status = "good" | "warning" | "danger"