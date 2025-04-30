"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

export const data = [
  { percentile: 0, students: 1 },
  { percentile: 10, students: 2 },
  { percentile: 20, students: 3 },
  { percentile: 30, students: 5 }, // your percentile sets to default
  { percentile: 40, students: 8 },
  { percentile: 50, students: 12 },
  { percentile: 60, students: 10 },
  { percentile: 70, students: 6 },
  { percentile: 80, students: 4 },
  { percentile: 90, students: 2 },
  { percentile: 100, students: 1 },
];

const yourPercentile = 30;

export default function GraphComponent() {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 25 }}>
            <XAxis 
              dataKey="percentile" 
              domain={[0, 100]}
              ticks={[0, 50, 100]}
            />
            <YAxis hide={true} />
            <Tooltip 
              formatter={(value) => [`${value}`, "Number of Students"]}
              labelFormatter={(label) => `Percentile: ${label}`}
            />
            <Line
              type="monotone"
              dataKey="students"
              stroke="#8884d8"
              strokeWidth={2}
              dot={{ r: 3 }}
              activeDot={{ r: 6, fill: "#8884d8" }}
            />
            <ReferenceLine
              x={yourPercentile}
              stroke="gray"
              strokeDasharray="3 3"
              label={{
                value: "your percentile",
                position: "bottom",
                offset: 15,
                fill: "#666",
                fontSize: 12
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}