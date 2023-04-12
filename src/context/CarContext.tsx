import { differenceInDays, eachDayOfInterval, format } from "date-fns";
import { ReactNode, createContext, useContext, useState } from "react";
import { MarkedDateProps } from "../components/Calendar/Calendar";
import { getPlatformDate } from "../utils/getPlatformDate";

interface CarProviderProps {
  children: ReactNode;
}

interface CarContextData {
  car: Car;
  scheduling: SchedulingDate;
  unavailableDates: MarkedDateProps;
  handleSetCar(car: Car): void;
  handleSetScheduling(start_Date: Date, end_Date: Date): void;
  handleUnavailableDates(dates: MarkedDateProps): void;
}

export interface Car {
  id: string;
  brand: string;
  name: string;
  about: string;
  rent: {
    period: string;
    price: number;
  };
  fuel_type: string;
  thumbnail: string;
  accessories: {
    type: string;
    name: string;
  }[];
  photos: string[];
}

interface SchedulingProps {
  user_id: string;
  car_id: string;
  date: SchedulingDate;
  days: number;
}

interface SchedulingDate {
  start_Date: Date;
  end_Date: Date;
  days: number;
  interval: string[];
}

export const CarContext = createContext({} as CarContextData);

export function CarProvider({ children }: CarProviderProps) {
  const [car, setCarData] = useState<Car>({} as Car);
  const [scheduling, setScheduling] = useState<SchedulingDate>({} as SchedulingDate);
  const [unavailableDates, setUnavailableDates] = useState<MarkedDateProps>(
    {} as MarkedDateProps
  );

  function handleSetCar(car: Car) {
    setCarData(car);
  }

  function handleSetScheduling(start_Date: Date, end_Date: Date) {
    const days = differenceInDays(end_Date, start_Date) + 1;
    let interval: string[] = [];

    eachDayOfInterval({
      start: new Date(start_Date),
      end: new Date(end_Date),
    }).forEach((item) => {
      const date = format(getPlatformDate(item), "yyyy-MM-dd");
      interval = [...interval, date];
      return interval;
    });
    console.log("🚀 / handleSetScheduling / interval:", interval);

    setScheduling({
      start_Date: getPlatformDate(start_Date),
      end_Date: getPlatformDate(end_Date),
      days,
      interval,
    });
  }

  function handleUnavailableDates(dates: MarkedDateProps) {
    setUnavailableDates(dates);
  }

  return (
    <CarContext.Provider
      value={{
        car,
        handleSetCar,
        scheduling,
        handleSetScheduling,
        handleUnavailableDates,
        unavailableDates,
      }}
    >
      {children}
    </CarContext.Provider>
  );
}

export function useCarData() {
  const context = useContext(CarContext);

  return context;
}
