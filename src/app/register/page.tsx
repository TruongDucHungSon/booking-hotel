/* eslint-disable @next/next/no-img-element */
import TextField from '@/components/TextField';
import { Button, Container, Divider, Grid, GridCol, Title } from '@mantine/core';

const Page = () => {
  return (
    <Container size="md" className="flex bg-white p-2 lg:rounded-md">
      <div className="w-full flex-shrink-0 px-4 py-4 lg:w-1/2 lg:px-0">
        <div className="mx-auto lg:w-3/4">
          <Title className="mb-3" order={3}>
            Đăng ký
          </Title>

          <Grid className="flex flex-col gap-4">
            <GridCol span={6}>
              <TextField label="Họ" />
            </GridCol>
            <GridCol span={6}>
              <TextField label="Tên" />
            </GridCol>
            <GridCol>
              <TextField label="Email" />
            </GridCol>

            <GridCol>
              <TextField label="Mật khẩu" type="password" />
            </GridCol>

            <GridCol>
              <Button className="mt-2 w-full" variant="filled">
                Đăng ký
              </Button>
            </GridCol>

            <GridCol>
              <Divider my="xs" label="Or continue with" labelPosition="center" />
            </GridCol>

            <GridCol>
              <div className="flex items-center gap-3">
                <Button
                  size="md"
                  variant="outline"
                  className="flex w-1/2 items-center justify-center rounded"
                  leftSection={
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="size-4">
                      <path
                        fill="#ffc107"
                        d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"
                      ></path>
                      <path
                        fill="#ff3d00"
                        d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"
                      ></path>
                      <path
                        fill="#4caf50"
                        d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.9 11.9 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"
                      ></path>
                      <path
                        fill="#1976d2"
                        d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"
                      ></path>
                    </svg>
                  }
                >
                  Google
                </Button>
                <Button
                  size="md"
                  variant="outline"
                  className="flex w-1/2 items-center justify-center rounded"
                  leftSection={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4"
                      viewBox="0 0 128 128"
                    >
                      <rect
                        width={118.35}
                        height={118.35}
                        x={4.83}
                        y={4.83}
                        fill="#3d5a98"
                        rx={6.53}
                        ry={6.53}
                      ></rect>
                      <path
                        fill="#fff"
                        d="M86.48 123.17V77.34h15.38l2.3-17.86H86.48v-11.4c0-5.17 1.44-8.7 8.85-8.7h9.46v-16A127 127 0 0 0 91 22.7c-13.62 0-23 8.3-23 23.61v13.17H52.62v17.86H68v45.83z"
                      ></path>
                    </svg>
                  }
                >
                  Facebook
                </Button>
              </div>
            </GridCol>
          </Grid>
        </div>
      </div>

      <div className="hidden w-1/2 flex-shrink-0 overflow-hidden rounded-lg lg:block">
        <img
          src="https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2dldHR5aW1hZ2VzLTU0MTM4NTg1Ni5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgyOH19fQ=="
          alt=""
          className="size-full object-cover"
        />
      </div>
    </Container>
  );
};

export default Page;
