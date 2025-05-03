import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

const birthdays = [
  {
    name: "John Doe",
    date: new Date("2025-05-01"),
  },
  {
    name: "Jane Doe",
    date: new Date("2025-05-02"),
  },
  {
    name: "Ferrowec",
    date: new Date("2025-05-05"),
  },
];

export const Dashboard = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="container mx-auto flex min-h-[calc(100vh-120px)] flex-col items-center justify-center gap-8">
      <h1>Dashboard</h1>
      <div className="flex gap-20">
        <div className="h-[330px]">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border shadow"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h2>Upcoming Birthdays</h2>
          <ul>
            {birthdays.map((birthday, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  {birthday.date.toLocaleDateString()}
                </span>
                <span className="font-medium">{birthday.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
