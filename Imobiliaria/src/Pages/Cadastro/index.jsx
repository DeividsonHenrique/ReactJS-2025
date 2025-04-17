import { Container, ContainerForm, Form, Label } from "./style";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

function Cadastro() {
  return (
    <Container>
      <h2>Crie a sua conta</h2>
      <p>Cadstre-se para acessar a plataforma</p>
      <ContainerForm>
        <Form>
          <Label htmlFor="nome">Nome</Label>
          <Input id="nome" type="text" placeholder="Informe seu nome" />
          <Label htmlFor="Email">E-mail</Label>
          <Input id="Email" type="email" placeholder="Informe seu E-mail" />
          <Label htmlFor="password">Senha</Label>
          <Input id="password" type="text" placeholder="Informe sua senha" />
          <Button>Cadastrar</Button>
        </Form>
      </ContainerForm>
    </Container>
  );
}

export default Cadastro;
