import { NotificationsProvider } from '@mantine/notifications';
import React, { ReactNode } from 'react';
import { MinimalLayout } from './MinimalLayout';

export const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <MinimalLayout>
      <NotificationsProvider>{children}</NotificationsProvider>
    </MinimalLayout>
  );
};
