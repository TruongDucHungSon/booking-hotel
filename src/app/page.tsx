import InputNumber from '@/components/InputNumber';
import TextField from '@/components/TextField';
import {
  Button,
  Container,
  Grid,
  GridCol,
  InputWrapper,
  Text,
  Textarea,
  Title,
} from '@mantine/core';
import { DateInput, TimeInput } from '@mantine/dates';

export default function Home() {
  return (
    <div>
      <Container size="lg">
        <Grid>
          <GridCol span={{ base: 12, md: 8, lg: 7 }}>
            <div className="rounded-xl bg-white p-5">
              <Title className="mb-3 mt-4 font-medium text-[#222]" order={4}>
                Thông tin người đặt
              </Title>
              <Grid>
                <GridCol span={12}>
                  <TextField label="Tên liên lạc" />
                </GridCol>
                <GridCol span={{ base: 12, sm: 6 }}>
                  <TextField label="Số điện thoại" />
                </GridCol>
                <GridCol span={{ base: 12, sm: 6 }}>
                  <TextField label="Email" />
                </GridCol>
                <GridCol span={12}>
                  <Textarea label="Ghi chú" />
                </GridCol>
                <GridCol span={12}>
                  <div className="flex justify-end">
                    <Button>Tiếp tục</Button>
                  </div>
                </GridCol>
              </Grid>
            </div>
          </GridCol>
          <GridCol span={{ base: 12, md: 4, lg: 5 }}>
            <div className="rounded-xl bg-white p-5">
              <div className="rounded-lg border border-gray-200 p-4">
                <Title
                  className="-mx-4 mb-2 border-b border-gray-200 px-4 pb-2 font-medium text-[#222]"
                  order={4}
                >
                  Thông tin phòng
                </Title>
                <Grid>
                  <GridCol span={{ base: 12, sm: 6 }}>
                    <InputNumber label="Số lượng người lớn" min={1} />
                  </GridCol>
                  <GridCol span={{ base: 12, sm: 6 }}>
                    <InputNumber label="Số lượng trẻ em" min={0} />
                  </GridCol>
                  <GridCol span={{ base: 12, sm: 6 }}>
                    <InputWrapper label="Ngày đến">
                      <DateInput defaultDate={new Date()} />
                    </InputWrapper>
                  </GridCol>
                  <GridCol span={{ base: 12, sm: 6 }}>
                    <InputWrapper label="Giờ đến">
                      <TimeInput />
                    </InputWrapper>
                  </GridCol>
                </Grid>
              </div>

              <button className="mt-3 flex w-full items-center justify-between gap-3 rounded-lg border border-red-500 px-3 py-2 text-sm font-semibold text-red-500">
                <Text>Sản phẩm chọn kèm</Text>
                <Text>Khám phá ngay {'>'}</Text>
              </button>
            </div>
          </GridCol>
        </Grid>
      </Container>
    </div>
  );
}
