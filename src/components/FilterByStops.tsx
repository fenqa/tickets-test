import { useEffect, useState } from 'react';
import { generateStopString } from '../utils/generateStopsString';
import Checkbox from './ui/Checkbox';
import { useAppDispatch, useAppSelector } from '../hooks/rtkHooks';
import { filter, reset } from './slices/ticketsSlice';

const FilterByStops = () => {
  const dispatch = useAppDispatch();
  const tickets = useAppSelector((state) => state.tickets.tickets);
  const [checked, setChecked] = useState<typeof stops>([]);
  const [stops, setStops] = useState<typeof stops>([]);

  useEffect(() => {
    setStops([...new Set(tickets.map((ticket) => ticket.stops))].sort());
  }, []);

  const handleOnChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const value = +target.value;
    let updatedChecked: typeof stops;

    if (checked.includes(value)) {
      updatedChecked = checked.filter((el) => value !== el);
    } else {
      updatedChecked = [...checked, value].sort();
    }

    setChecked(updatedChecked);
  };

  const resetFilters = () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox: HTMLInputElement) => {
      checkbox.checked = false;
    });

    setChecked([]);
  };

  useEffect(() => {
    checked.length ? dispatch(filter(checked)) : dispatch(reset());
  }, [checked]);

  return (
    <div className='flex flex-col pb-3'>
      <h3 className='m-3 font-semibold uppercase'>Количество пересадок</h3>
      {stops.map((stop) => (
        <Checkbox
          key={stop}
          value={stop}
          label={generateStopString(stop)}
          onChange={handleOnChange}
        />
      ))}
      <button
        onClick={resetFilters}
        className={`ml-auto mr-4 inline-block border-b border-dotted pb-1 text-right text-xs text-blue-400 ${
          checked.length ? 'visible' : 'invisible'
        }`}
      >
        Сбросить
      </button>
    </div>
  );
};

export default FilterByStops;
