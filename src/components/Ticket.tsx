import { v4 as uuidv4 } from 'uuid';
import plane from '../assets/plane-solid.svg';
import FlightDetails from './FlightDetails';
import { generateStopString } from '../utils/generateStopsString';
import { ITicket } from './slices/ticketsSlice';
import { useAppSelector } from '../hooks/rtkHooks';
import { priceCalculator } from '../utils/calculatePrice';
import Button from './ui/Button';

interface IProps {
  ticket: ITicket;
}

const Ticket = ({ ticket }: IProps) => {
  const {
    price,
    departure_time,
    origin,
    origin_name,
    departure_date,
    stops,
    arrival_date,
    arrival_time,
    destination,
    destination_name,
    carrier,
  } = ticket;
  const { currency, sign } = useAppSelector((state) => state.currency);

  return (
    <div className='grid grid-cols-3 divide-x rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl'>
      <div className='col-span-1 flex w-full flex-col gap-5 px-6 py-7 align-bottom'>
        <div className='w-full py-1 text-center text-4xl'>{carrier} Logo</div>
        <Button>
          {`Купить \n за ${priceCalculator(price, currency, sign)}`}
        </Button>
      </div>
      <div className='col-span-2 flex w-full justify-between gap-6 px-5 py-7'>
        <FlightDetails
          key={uuidv4()}
          flightDate={departure_date}
          flightTime={departure_time}
          city={origin}
          cityName={origin_name}
        />
        <div
          className={`flex flex-grow flex-col items-center font-semibold text-gray-400`}
        >
          <span>{generateStopString(stops)}</span>
          <div className='relative before:absolute before:bottom-[-8.5px] before:left-[-70px] before:block before:h-[1px] before:w-[124px] before:bg-gray-300'></div>
          <img src={plane} alt='plane' className='relative ml-auto h-4 w-4' />
        </div>
        <FlightDetails
          key={uuidv4()}
          flightDate={arrival_date}
          flightTime={arrival_time}
          city={destination}
          cityName={destination_name}
          className={{ dateClasses: 'text-right' }}
        />
      </div>
    </div>
  );
};

export default Ticket;
