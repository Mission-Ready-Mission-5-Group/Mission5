import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

type Props = {
  availableFrom: Date;
};
export const Calendar = ({ availableFrom }: Props) => {
  const [value, setValue] = useState({
    startDate: availableFrom,
    endDate: availableFrom,
  });

  const handleValueChange = (newValue: any) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className="text-sm">Available from</div>
      <div className="border-solid border-[1px] border-gray-400 flex gap-1 items-center pl-2 max-w-72">
        <Datepicker
          useRange={false}
          asSingle={true}
          value={value}
          onChange={handleValueChange}
        />
      </div>
    </div>
  );
};
