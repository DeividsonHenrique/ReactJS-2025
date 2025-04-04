import { Container, Logo, Menu } from "./style";
import LogoImg from "../../assets/logo.png";

function Header() {
  return (
    <Container>
      <Logo>
        <img src={LogoImg} alt="" />
      </Logo>
      <Menu>
        <ul>
          <li>
            <span>Cadastro / Login</span>
          </li>
        </ul>
      </Menu>
    </Container>
  );
}

export default Header;
