import { Input, InputProps, InputWrapper } from '@mantine/core';
import React from 'react';

type TextFieldProps = {
  label?: string;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} & InputProps & { [x: string]: any };

const TextField: React.FC<TextFieldProps> = ({ label, className, ...props }) => {
  return (
    <InputWrapper label={label}>
      <Input className={className} {...props} />
    </InputWrapper>
  );
};

export default TextField;
