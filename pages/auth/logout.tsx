import { AuthLayout } from '@/auth/layouts/AuthLayout';
import { Button, Stack, Text, Title } from '@mantine/core';
import { signOut } from 'next-auth/react';
import React from 'react';

const AuthLogoutPage = () => {
  return (
    <Stack className="max-w-sm px-4 py-8">
      <Text size="xl" weight="bold" align="center">
        LogOut
      </Text>
      <Text align="center">Are you sure you want to log out?</Text>
      <Button
        onClick={() => {
          signOut();
        }}
        fullWidth
      >
        Yes, Log out
      </Button>
    </Stack>
  );
};
AuthLogoutPage.Layout = AuthLayout;

export default AuthLogoutPage;
