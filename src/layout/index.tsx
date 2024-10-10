import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  Button,
  Container,
  UnstyledButton,
} from '@mantine/core';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

const DefaultLayout = ({ children }: PropsWithChildren) => {
  return (
    <AppShell header={{ height: 52 }}>
      <AppShellHeader>
        <Container className="h-full" size="lg">
          <div className="flex h-full items-center justify-between">
            <UnstyledButton component={Link} href="/">
              <h5 className="text-sm font-bold uppercase">logo</h5>
            </UnstyledButton>

            <div className="flex items-center gap-3">
              <Button variant="light" className="font-normal" component={Link} href="/register">
                Đăng ký
              </Button>
              <Button variant="filled" className="font-normal" component={Link} href="/login">
                Đăng nhập
              </Button>
            </div>
          </div>
        </Container>
      </AppShellHeader>
      <AppShellMain>
        <div className="pt-3">{children}</div>
      </AppShellMain>
    </AppShell>
  );
};

export default DefaultLayout;
