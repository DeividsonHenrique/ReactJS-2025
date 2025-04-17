import { Container, ContainerForm, Form, Label } from "./style";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

function Login() {
  return (
    <Container>
      <h2>Acesse a sua conta</h2>
      <p>Entre com seu e-mail e senha</p>
      <ContainerForm>
        <Form>
          <Label htmlFor="Email">E-mail</Label>
          <Input id="Email" type="email" placeholder="Informe seu E-mail" />
          <Label htmlFor="password">Senha</Label>
          <Input id="password" type="text" placeholder="Informe sua senha" />
          <Button>Fazer Login</Button>
        </Form>
      </ContainerForm>
    </Container>
  );
}

export default Login;
