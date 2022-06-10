import { AuthLayout } from '@/auth/layouts/AuthLayout';
import { Button, Stack, Text, Title } from '@mantine/core';
import { signOut } from 'next-auth/react';
import React from 'react';

const AuthLogoutPage = () => {
  return (
    <Stack className="max-w-sm px-4 py-8">
      <Text size="xl" weight="bold" align="center">
        Check your email
      </Text>
      <Text align="center">A sign in link has been sent to your email address.</Text>
    </Stack>
  );
};
AuthLogoutPage.Layout = AuthLayout;

export default AuthLogoutPage;
