import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

const birthdays = [
  {
    name: "Alice",
    date: new Date("1999-03-15"),
  },
  {
    name: "Bob",
    date: new Date("1998-07-21"),
  },
  {
    name: "Charlie",
    date: new Date("1997-12-05"),
  },
  {
    name: "Diana",
    date: new Date("1996-01-30"),
  },
  {
    name: "Edward",
    date: new Date("1995-06-14"),
  },
  {
    name: "Fiona",
    date: new Date("1994-09-09"),
  },
  {
    name: "George",
    date: new Date("1993-11-23"),
  },
  {
    name: "Hannah",
    date: new Date("1992-04-18"),
  },
  {
    name: "Ian",
    date: new Date("1991-08-12"),
  },
  {
    name: "Julia",
    date: new Date("1990-02-27"),
  },
  {
    name: "Kevin",
    date: new Date("1989-05-16"),
  },
  {
    name: "Laura",
    date: new Date("1988-10-03"),
  },
  {
    name: "Michael",
    date: new Date("1987-07-25"),
  },
  {
    name: "Nina",
    date: new Date("1986-03-11"),
  },
  {
    name: "Oscar",
    date: new Date("1985-12-19"),
  },
  {
    name: "Paula",
    date: new Date("1984-06-28"),
  },
  {
    name: "Quentin",
    date: new Date("1983-09-14"),
  },
  {
    name: "Rachel",
    date: new Date("1982-11-30"),
  },
  {
    name: "Steve",
    date: new Date("1981-01-07"),
  },
  {
    name: "Tina",
    date: new Date("1980-05-22"),
  },
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
    date: new Date("2020-05-01"),
  },
  {
    name: "Jane Doe",
    date: new Date("2024-05-02"),
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

  const upcomingBirthdays = birthdays
    .map((birthday) => ({
      ...birthday,
      virtualDate: new Date(
        now.getFullYear(),
        birthday.date.getMonth(),
        birthday.date.getDate(),
      ),
    }))
    .filter((birthday) => birthday.virtualDate >= now)
    .sort((a, b) => a.virtualDate.getTime() - b.virtualDate.getTime())
    .slice(0, 10);

  const previousBirthdays = birthdays
    .map((birthday) => ({
      ...birthday,
      virtualDate: new Date(
        now.getFullYear(),
        birthday.date.getMonth(),
        birthday.date.getDate(),
      ),
    }))
    .filter((birthday) => {
      if (birthday.date.getFullYear() - now.getFullYear() === 0) {
        return null;
      } else {
        return (
          birthday.virtualDate < now && !upcomingBirthdays.includes(birthday)
        );
      }
    })
    .sort((a, b) => b.virtualDate.getTime() - a.virtualDate.getTime())
    .slice(0, 10);

  return (
    <div className="container mx-auto flex min-h-[calc(100vh-120px)] flex-col items-center justify-center gap-8">
      <h1 className="text-3xl">
        Dashboard - <span className="text-yellow-500">Work in progress</span>
      </h1>
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
            {upcomingBirthdays.map((birthday, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  {birthday.date.toLocaleDateString()}
                </span>
                <span className="font-medium">{birthday.name}</span>
                <span className="font-medium text-yellow-500">
                  {Math.abs(birthday.date.getFullYear() - now.getFullYear())}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h2>Previous Birthdays</h2>
          <ul>
            {previousBirthdays.map((birthday, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  {birthday.date.toLocaleDateString()}
                </span>
                <span className="font-medium">{birthday.name}</span>
                <span className="font-medium text-yellow-500">
                  {Math.abs(birthday.date.getFullYear() - now.getFullYear())}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
