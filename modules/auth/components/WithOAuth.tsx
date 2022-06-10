import { LogosGithubIcon, LogosGoogleIcon } from '@/icons';
import { Badge, Group } from '@mantine/core';
import { GitHubLogoIcon } from '@modulz/radix-icons';
import { signIn } from 'next-auth/react';
import React from 'react';

const ProviderSpecfics = {
  google: {
    icon: LogosGoogleIcon,
    color: {
      light: '#4285f4',
      dark: '#4285f4',
    },
  },
  github: {
    icon: LogosGithubIcon,
    color: {
      light: '#181717',
      dark: '#fff',
    },
  },
};

const Provider = ({ name, id }) => {
  const { icon: Icon, bg, color } = ProviderSpecfics[name.toLowerCase()];
  return (
    <Badge
      color={color}
      size="lg"
      onClick={(e) => {
        e.preventDefault();
        signIn(id);
      }}
      leftSection={<Icon />}
      variant="outline"
      classNames={{
        root: 'cursor-pointer',
        outline: color || '',
      }}
      styles={(theme) => ({
        root: {
          cursor: 'pointer',
        },
        outline: {
          borderColor: theme.colorScheme === 'dark' ? color.dark : color.light,
          color: theme.colorScheme === 'dark' ? color.dark : color.light,
          fill: theme.colorScheme === 'dark' ? color.dark : color.light,
        },
      })}
    >
      {name}
    </Badge>
  );
};

const WithOAuth = ({ providers }) => {
  if (!providers) {
    return null;
  }
  return (
    <Group position="center">
      {Object.values(providers).map((provider) => (
        <Provider key={provider.name} name={provider.name} id={provider.id} />
      ))}
    </Group>
  );
};

export default WithOAuth;
