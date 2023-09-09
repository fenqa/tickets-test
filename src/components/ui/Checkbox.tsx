interface IProps {
  value: number;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = ({ value, label, onChange }: IProps) => {
  return (
    <label className='relative flex items-center gap-3 px-3 py-2 hover:bg-blue-50'>
      <input
        type='checkbox'
        value={value}
        name={label}
        onChange={onChange}
        className='peer h-6
            w-6 shrink-0 appearance-none rounded-sm border-2 border-gray-300 bg-white checked:border-blue-300 checked:bg-blue-50'
      />
      {label}
      <svg
        className='absolute left-[18px] top-[10px] mt-1 hidden h-3 w-3 text-blue-400 peer-checked:block'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='4'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <polyline points='20 6 9 17 4 12'></polyline>
      </svg>
    </label>
  );
};

export default Checkbox;
