import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { getQuery } from '../../utils/navigation';
import { PaymentPopupView } from './View';

export const PaymentPopup = ({ ...props }) => {
  const [title, setTitle] = useState();
  const { pathname } = useRouter();
  const { socket } = useSelector(({ socket }) => ({
    socket,
  }));

  useEffect(() => {
    if (pathname.includes('chelovek_iz_podolska')) {
      setTitle('The Man from Podolsk');
    } else if (pathname.includes('dvoe_na_kachelyakh')) {
      setTitle('Two on a swing');
    } else if (pathname.includes('eti_svobodnye_babochki')) {
      setTitle('These free butterflies');
    } else if (pathname.includes('fantazii_faryateva')) {
      setTitle('Fantasies by Faryatyev');
    } else if (pathname.includes('kankun')) {
      setTitle('Cancun');
    } else if (pathname.includes('kazanova')) {
      setTitle('Casanova');
    } else if (pathname.includes('khorosho_ochen')) {
      setTitle('Good. Very!');
    } else if (pathname.includes('lir')) {
      setTitle('Lear');
    } else if (pathname.includes('onegin')) {
      setTitle('Onegin');
    } else if (pathname.includes('prestuplenie_i_nakazanie')) {
      setTitle('Crime and punishment');
    } else if (pathname.includes('prizraki')) {
      setTitle('Larve');
    } else if (pathname.includes('tri_tovarishcha')) {
      setTitle('Three comrades');
    }
  }, [pathname]);

  const open = typeof window !== 'undefined' && document.querySelector('.popup')?.style?.display === 'block';

  useEffect(() => {
    const ref = getQuery('ref') || localStorage.getItem('ref');
    const service = 7;

    if (open && ref && socket) {
      socket.emit('PAYMENT_NOTIFICATION', { type: 'MODAL_OPEN', telegramId: ref, service });
    }
  }, [open, socket]);

  return <PaymentPopupView {...props} title={title} />;
};
