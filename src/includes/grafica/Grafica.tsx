
import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
  { time: "Feb 21", value: 22 },
  { time: "Feb 22", value: 21 },
  { time: "Feb 23", value: 19.8 },
  { time: "Mar 20", value: 22.2 },
];

const parameters = [
  "Temperatura (°C)", "CO2 (ppm)", "Humedad (ppb)", "Formaldehido", "TVOC (INDEX)",
  "PM1.0 (µg/m³)", "PM2.5 (µg/m³)", "PM4.0 (µg/m³)", "PM10 (µg/m³)"
];

/*interface ParametrosProps {
    id?: string;
  }*/

const timeRanges = ["24 horas", "1 semana", "2 semanas", "1 mes"];

const Grafica = () => {
  const [selectedParam, setSelectedParam] = useState(parameters[0]);
  const [selectedTime, setSelectedTime] = useState(timeRanges[1]);

  return (
    <div className="p-4 w-full bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <select 
          className="border p-2 rounded-md" 
          value={selectedParam} 
          onChange={(e) => setSelectedParam(e.target.value)}
        >
          {parameters.map((param) => (
            <option key={param} value={param}>{param}</option>
          ))}
        </select>
        <select 
          className="border p-2 rounded-md" 
          value={selectedTime} 
          onChange={(e) => setSelectedTime(e.target.value)}
        >
          {timeRanges.map((range) => (
            <option key={range} value={range}>{range}</option>
          ))}
        </select>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#82ca9d" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Grafica;
