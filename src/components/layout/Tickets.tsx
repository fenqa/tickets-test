import { v4 as uuidv4 } from 'uuid';
import Ticket from '../Ticket';
import { useAppSelector } from '../../hooks/rtkHooks';
import { getScrollbarWidth } from '../../utils/getScrollbarWidth';
import { useBodyScrollable } from '../../hooks/useBodyScrollable';
import { useLayoutEffect } from 'react';

const Tickets = () => {
  const tickets = useAppSelector((state) => state.tickets.tickets);

  const scrollbarWidth = getScrollbarWidth();

  const bodyScrollable = useBodyScrollable();

  useLayoutEffect(() => {
    if (bodyScrollable) {
      document.body.style.paddingRight = '0px';
    } else {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
  }, [bodyScrollable]);

  return (
    <div className='col-span-5 flex flex-col gap-5'>
      {tickets.map((ticket) => (
        <Ticket key={uuidv4()} ticket={ticket} />
      ))}
    </div>
  );
};

export default Tickets;
