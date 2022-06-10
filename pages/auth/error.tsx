import { AuthLayout } from '@/auth/layouts/AuthLayout';
import { Alert, Anchor, Mark, Stack, Text } from '@mantine/core';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const AuthErrorPage = () => {
  const router = useRouter();
  const { error } = router.query;
  const [timer, setTimer] = useState(5);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      router.push('/auth/');
    }
  }, [timer]);

  let errorMessage = 'An error occurred';
  switch (error) {
    case 'Configuration':
      errorMessage = 'There seems to be an internal problem, please try again later.';
      break;
    case 'AccessDenied':
      errorMessage = 'You are not allowed to access this page.';
      break;
    case 'Verification':
      errorMessage = 'The token has expired or has already been used.';
      break;
  }

  return (
    <Stack className="max-w-sm px-4 py-8">
      <Alert color="red" variant="filled" className="px-8">
        <Text align="center">{errorMessage}</Text>
      </Alert>
      <Text align="center">
        You will be redirected to <Mark> /auth </Mark> in {timer}s
      </Text>
    </Stack>
  );
};

AuthErrorPage.Layout = AuthLayout;

export default AuthErrorPage;
