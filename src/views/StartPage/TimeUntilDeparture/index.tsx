import Paragraph from "components/Paragraph";
import Colors from "tokens/colors";
import { FontWeight } from "types";

type TimeUntilDepartureProps = {
  date?: string;
  time?: string;
  rtime?: string;
};

const TimeUntilDeparture = ({ time, date }: TimeUntilDepartureProps) => {
  const getDays = (ms: number) => {
    const days = Math.floor(ms / 86400000);
    if (days <= 0) return "";
    if (days === 1) return `${days} day `;
    return `${days} days `;
  };

  const getHours = (ms: number) => {
    const hours = Math.floor((ms % 86400000) / 3600000);
    if (hours <= 0) return "";
    if (hours === 1) return `${hours} hour `;
    return `${hours} hours `;
  };

  const getMinutes = (ms: number) => {
    const minutes = Math.round(((ms % 86400000) % 3600000) / 60000);
    if (minutes <= 0) return "";
    if (minutes === 1) return `${minutes} minute `;
    return `${minutes} minutes `;
  };

  const getTimeUntilDeparture = () => {
    if (!date || !time) return;
    const today = new Date();
    var arr: any[] = `${date} ${time}`.split(/[- :]/);
    const departure = new Date(arr[0], arr[1] - 1, arr[2], arr[3], arr[4]);

    const diffMs = departure.valueOf() - today.valueOf();
    const days = getDays(diffMs);
    const hours = getHours(diffMs);
    const minutes = getMinutes(diffMs);
    if (diffMs <= 60000) return "now";
    return `in ${days}${hours}${minutes}`;
  };

  return (
    <Paragraph fontWeight={FontWeight.bold} fontSize={14} color={Colors.vBlue}>
      {getTimeUntilDeparture()}
    </Paragraph>
  );
};

export default TimeUntilDeparture;
