import React from 'react';
import { Text, Divider, Stack, Alert } from '@mantine/core';
import { AuthWithEmailForm } from '@/auth/components/AuthWithEmailForm';
import { ClientSafeProvider, getProviders, LiteralUnion } from 'next-auth/react';
import WithOAuth from '@/auth/components/WithOAuth';
import { AuthLayout } from '@/auth/layouts/AuthLayout';
import { BuiltInProviderType } from 'next-auth/providers';
import { useRouter } from 'next/router';

type OAuthsType = Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider>;
export type SignInErrorTypes =
  | 'Signin'
  | 'OAuthSignin'
  | 'OAuthCallback'
  | 'OAuthCreateAccount'
  | 'EmailCreateAccount'
  | 'Callback'
  | 'OAuthAccountNotLinked'
  | 'EmailSignin'
  | 'CredentialsSignin'
  | 'SessionRequired'
  | 'default';
const errors: Record<SignInErrorTypes, string> = {
  Signin: 'Try signing in with a different account.',
  OAuthSignin: 'Try signing in with a different account.',
  OAuthCallback: 'Try signing in with a different account.',
  OAuthCreateAccount: 'Try signing in with a different account.',
  EmailCreateAccount: 'Try signing in with a different account.',
  Callback: 'Try signing in with a different account.',
  OAuthAccountNotLinked:
    'To confirm your identity, sign in with the same account you used originally.',
  EmailSignin: 'The e-mail could not be sent.',
  CredentialsSignin: 'Sign in failed. Check the details you provided are correct.',
  SessionRequired: 'Please sign in to access this page.',
  default: 'Unable to sign in.',
};
const AuthPage = ({ oAuths }: { oAuths: OAuthsType }) => {
  const router = useRouter();
  const { error: errorType } = router.query;
  const error = errorType && (errors[errorType] ?? errors.default);
  return (
    <Stack p="lg">
      {error && (
        <Alert color="red" variant="filled">
          <Text align="center">{error}</Text>
        </Alert>
      )}
      <Text size="lg" weight={500} align="center">
        Welcome to Headless, login with
      </Text>
      <WithOAuth providers={oAuths} />
      <Divider label="Or continue with email" labelPosition="center" />
      <AuthWithEmailForm />
    </Stack>
  );
};

export async function getServerSideProps() {
  const providers = await getProviders();
  if (!providers) {
    return { props: { providers: {} } };
  }
  const oAuths = Object.keys(providers)
    .filter((key) => providers[key].type === 'oauth')
    .reduce<OAuthsType>((acc, key) => {
      acc[key] = providers[key];
      return acc;
    }, {} as OAuthsType);
  return {
    props: { oAuths },
  };
}

AuthPage.Layout = AuthLayout;

export default AuthPage;
