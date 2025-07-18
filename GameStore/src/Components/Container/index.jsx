import { Container, Content, Title } from "./style";
import Cards from "../Cards";
function index() {
  return (
    <>
      <Container>
        <Title>Jogos em destaque</Title>
        <Content>
            <Cards></Cards>
            <Cards></Cards>
            <Cards></Cards>
            <Cards></Cards>
            <Cards></Cards>
            <Cards></Cards>
        </Content>
      </Container>
    </>
  );
}

export default index;
