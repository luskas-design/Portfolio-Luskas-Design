'use client';

import { type ReactNode } from 'react';
import Cursor from './Cursor';

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <>
      <Cursor />
      {children}
    </>
  );
}
