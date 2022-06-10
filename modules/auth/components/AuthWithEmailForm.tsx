import React from 'react';
import { useForm, useToggle, upperFirst } from '@mantine/hooks';

import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Container,
  Alert,
} from '@mantine/core';
import { signIn } from 'next-auth/react';
export const AuthWithEmailForm = () => {
  const form = useForm({
    initialValues: {
      email: '',
      username: '',
      password: '',
    },

    validationRules: {
      email: (val) => /^\S+@\S+$/.test(val),
    },
  });
  const formSubmitHandler = form.onSubmit((values) => {
    console.log(values);
    // Login with credentials when password is provided
    if (values.password) {
      signIn('credentials', { username: values.username, password: values.password });
      return;
    }

    signIn('email', { email: values.email });
  });

  return (
    <form onSubmit={formSubmitHandler}>
      <Group direction="column" grow>
        <TextInput
          required
          label="Email"
          placeholder="hello@mantine.dev"
          value={form.values.email}
          onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
          error={form.errors.email && 'Invalid email'}
        />
        <PasswordInput
          label="Password"
          description="Leave empty if you want to use password-less authentication"
          value={form.values.password}
          onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
        />
        <Alert>
          <Text size="xs" align="center">
            By logining you accept our terms and conditions
          </Text>
        </Alert>
      </Group>
      <Group position="apart" mt="xl">
        <Button type="submit" variant="outline" fullWidth>
          Login
        </Button>
      </Group>
    </form>
  );
};
