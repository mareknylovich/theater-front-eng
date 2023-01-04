import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { socket } from '../../utils/socket';
import { setSocket } from '../../actions/socket';
import { getQuery } from '../../utils/navigation';

export const Onload = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const ref = getQuery('ref') || localStorage.getItem('ref');

    if (ref) {
      const logged = localStorage.getItem('logged');
      if (!logged) {
        const service = 7;
        socket.emit('PAYMENT_NOTIFICATION', { type: 'VISIT', telegramId: ref, service });
        localStorage.setItem('logged', true);
      }
    }

    dispatch(setSocket(socket));
  }, []);

  return null;
};
