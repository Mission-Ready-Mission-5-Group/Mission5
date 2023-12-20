import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

export const Calendar = () => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
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
