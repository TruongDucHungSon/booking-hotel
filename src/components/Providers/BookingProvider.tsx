/** eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useLocalStorageState } from 'ahooks';
import { isEqual } from 'lodash';
import { useLayoutEffect, useMemo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const BookingProvider = ({ children }: React.PropsWithChildren) => {
  const methods = useForm();
  const [value, setValue] = useLocalStorageState<any>('booking-form', { defaultValue: undefined });

  const formValue = useMemo(() => methods.getValues(), [methods]);

  useLayoutEffect(() => {
    if (!isEqual(value, formValue)) {
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
