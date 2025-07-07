import { styled } from "styled-components"

const StyledButton = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.color.blue400};
  border-radius: ${({ theme }) => theme.borderRadius.button};
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
  display: block;
  font-size: 16px;
  padding: ${({ theme }) => `${theme.spacings.xs} ${theme.spacings.s}`};

  &:hover {
    background-color: ${({ theme }) => theme.color.blue500};
  }
`

const Button = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>
}

export default Button
