import { InputWrapper, Textarea as TextareaRoot, TextareaProps } from '@mantine/core';
import React from 'react';

type TextareaFieldProps = {
  label?: string;
  className?: string;
} & TextareaProps;

const Textarea: React.FC<TextareaFieldProps> = ({ label, className, ...props }) => {
  return (
    <InputWrapper label={label}>
      <TextareaRoot className={className} {...props} />
    </InputWrapper>
  );
};

export default Textarea;
