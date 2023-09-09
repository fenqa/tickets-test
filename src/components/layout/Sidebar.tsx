import CurrencySelector from '../CurrencySelector';
import FilterByStops from '../FilterByStops';

const Sidebar = () => {
  return (
    <div className='col-span-2 flex h-fit flex-col gap-5 rounded-lg bg-white shadow-md'>
      <CurrencySelector />
      <FilterByStops />
    </div>
  );
};

export default Sidebar;
