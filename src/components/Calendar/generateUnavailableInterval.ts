import { format } from "date-fns";
import { getPlatformDate } from "../../utils/getPlatformDate";
import { MarkedDateProps } from "./Calendar";

export function generateUnavailableInterval(days: string[]) {
  let interval: MarkedDateProps = {};

  days.forEach((item) => {
    const date = format(getPlatformDate(new Date(item)), "yyyy-MM-dd");

    interval = {
      ...interval,
      [date]: {
        color: null,
        textColor: null,
        disabled: true,
      },
    };
  });

  return interval;
}
