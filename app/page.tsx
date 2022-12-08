'use client';

import { useAppDispatch, useAppSelector } from '@context/hooks';
import {
  decrement,
  increment,
  selectCount,
} from '@features/counter/counterSlice';
import { NextPage } from 'next';

function HomePage(): NextPage {
  const value = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
}

export default HomePage;
