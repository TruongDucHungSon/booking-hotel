import { InputWrapper, NumberInput, NumberInputProps } from '@mantine/core';
import React from 'react';

type InputNumberProps = {
  label?: string;
  className?: string;
} & NumberInputProps;

const InputNumber: React.FC<InputNumberProps> = ({ label, className, ...props }) => {
  return (
    <InputWrapper label={label}>
      <NumberInput className={className} {...props} />
    </InputWrapper>
  );
};

export default InputNumber;
