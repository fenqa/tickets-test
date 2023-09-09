import { reformatDate } from '../utils/reformatDate';

interface IProps {
  flightTime: string;
  city: string;
  cityName: string;
  flightDate: string;
  className?: {
    dateClasses: string;
  };
}

const FlightDetails = ({
  flightTime,
  city,
  cityName,
  flightDate,
  className,
}: IProps) => {
  const { dateClasses } = className ?? {};
  return (
    <div className={`flex flex-col pt-1 ${dateClasses ? dateClasses : ''}`}>
      <span className='text-4xl'>{flightTime}</span>
      <span className='font-semibold'>
        {city}, {cityName}
      </span>
      <span>{reformatDate(flightDate)}</span>
    </div>
  );
};

export default FlightDetails;
