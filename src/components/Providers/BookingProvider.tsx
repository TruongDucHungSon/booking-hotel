/** eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useLocalStorageState } from 'ahooks';
import dayjs from 'dayjs';
import { isEmpty, isEqual } from 'lodash';
import { useLayoutEffect, useMemo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const BookingProvider = ({ children }: React.PropsWithChildren) => {
  const methods = useForm<any>({
    defaultValues: {
      location_id: 1,
      startDate: dayjs().toISOString(),
    },
  });
  const [value, setValue] = useLocalStorageState<any>('booking-form', { defaultValue: undefined });

  const formValue = useMemo(() => methods.getValues(), [methods]);

  useLayoutEffect(() => {
    if (!isEqual(value, formValue) && !isEmpty(value)) {
      methods.reset(value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  useLayoutEffect(() => {
    if (!isEqual(formValue, value)) setValue(formValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formValue]);

  return <FormProvider {...methods}>{children}</FormProvider>;
};

export default BookingProvider;
