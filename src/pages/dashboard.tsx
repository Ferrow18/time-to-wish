import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

const birthdays = [
  {
    name: "Terence",
    date: new Date("2025-02-12"),
  },
  {
    name: "Alfred",
    date: new Date("2025-02-14"),
  },
  {
    name: "Mia",
    date: new Date("2025-02-20"),
  },
  {
    name: "Ellie",
    date: new Date("2025-02-26"),
  },
  {
    name: "John Doe",
    date: new Date("2025-05-01"),
  },
  {
    name: "Jane Doe",
    date: new Date("2025-05-02"),
  },
  {
    name: "Matt",
    date: new Date("1988-05-05"),
  },
];

export const Dashboard = () => {
  const [hoveredDay, setHoveredDay] = useState<Date | null>(null);

  const now = new Date();
  const oneMonthLater = new Date();
  oneMonthLater.setMonth(now.getMonth() + 1);

  const handleDayMouseEnter = (day: Date) => {
    setHoveredDay(day);
  };

  const handleDayMouseLeave = () => {
    setHoveredDay(null);
  };

  const birthdaysOnHoveredDay = birthdays.filter(
    (birthday) =>
      hoveredDay &&
      birthday.date.getDate() === hoveredDay.getDate() &&
      birthday.date.getMonth() === hoveredDay.getMonth(),
  );

  function getRelevantBirthdayDates(birthday: Date, now: Date): Date[] {
    const currentYear = now.getFullYear();
    const thisYearBirthday = new Date(
      currentYear,
      birthday.getMonth(),
      birthday.getDate(),
    );
    const lastYearBirthday = new Date(
      currentYear - 1,
      birthday.getMonth(),
      birthday.getDate(),
    );
    const nextYearBirthday = new Date(
      currentYear + 1,
      birthday.getMonth(),
      birthday.getDate(),
    );
    return [lastYearBirthday, thisYearBirthday, nextYearBirthday];
  }

  // Get all relevant dates for all birthdays to display in calendar
  const allBirthdayCalendarDates = birthdays.flatMap((birthday) =>
    getRelevantBirthdayDates(birthday.date, now),
  );

  return (
    <div className="container mx-auto flex min-h-[calc(100vh-120px)] flex-col items-center justify-center gap-8">
      <h1>Dashboard</h1>
      <div className="flex gap-12">
        <div className="relative h-[330px]">
          <Calendar
            mode="multiple"
            selected={allBirthdayCalendarDates}
            onDayMouseEnter={handleDayMouseEnter}
            onDayMouseLeave={handleDayMouseLeave}
            fromYear={now.getFullYear() - 1}
            toYear={now.getFullYear() + 1}
            className="rounded-md border"
          />
          {hoveredDay && birthdaysOnHoveredDay.length > 0 && (
            <div className="absolute top-0 right-[100%] z-10 mr-4 w-max rounded bg-white px-3 py-2 text-sm text-black">
              <strong>{hoveredDay.toLocaleDateString()}:</strong>
              <ul>
                {birthdaysOnHoveredDay.map((birthday, i) => (
                  <li key={i}>{birthday.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-4">
          <h2>Upcoming Birthdays</h2>
          <ul>
            {birthdays
              .filter(
                (birthday) =>
                  birthday.date > now && birthday.date <= oneMonthLater,
              )
              .map((birthday, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">
                    {birthday.date.toLocaleDateString()}
                  </span>
                  <span className="font-medium">{birthday.name}</span>
                  <span className="font-medium">
                    Age: {birthday.date.getFullYear() - now.getFullYear()}
                  </span>
                </li>
              ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h2>Previous Birthdays</h2>
          <ul>
            {birthdays
              .filter((birthday) => birthday.date < now)
              .map((birthday, index) => (
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
