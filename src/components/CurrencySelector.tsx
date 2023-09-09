import { ChangeEvent } from 'react';
import { currencies } from '../constants';
import { useAppDispatch, useAppSelector } from '../hooks/rtkHooks';
import { setCurrency } from './slices/currencySlice';

const CurrencySelector = () => {
  const { currency } = useAppSelector((state) => state.currency);
  const dispatch = useAppDispatch();

  const handleOnChange = ({
    currentTarget: { id, value },
  }: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setCurrency({
        currency: id,
        sign: value,
      })
    );
  };

  return (
    <div className='p-3'>
      <h3 className='mb-4 font-semibold uppercase'>Валюта</h3>
      <ul className='flex h-fit shadow-sm'>
        {Object.entries(currencies).map(([curr, s], i, arr) => {
          return (
            <li key={curr} className='flex flex-grow items-center bg-white'>
              <input
                id={curr}
                type='radio'
                name='list-radio'
                value={s}
                className='peer sr-only'
                onChange={handleOnChange}
                checked={currency === curr}
              />
              <label
                htmlFor={curr}
                className={`w-full border py-3 text-center text-blue-500 hover:border-blue-400 hover:bg-blue-50 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white ${
                  i === 0 && 'rounded-l-lg'
                } ${i === arr.length - 1 && 'rounded-r-lg'}`}
              >
                {curr}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CurrencySelector;
