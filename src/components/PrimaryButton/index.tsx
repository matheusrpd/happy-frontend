import { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export default function PrimaryButton({ children, ...props }: PrimaryButtonProps) {
  return (
    <Container {...props}>
      {children}
    </Container>
  );
}