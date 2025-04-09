import { Container } from "./style";

function Button({ props, children }) {
  return <Container {...props}>{children}</Container>;
}

export default Button;
