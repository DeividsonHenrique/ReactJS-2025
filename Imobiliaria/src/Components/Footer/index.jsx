import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Container, Item, Copy } from "./style";
import LogoImg from "../../assets/logo.png";
import { Fragment } from "react";

function Footer() {
  return (
    <Fragment>
      <Container>
        <Item>
          <img src={LogoImg} alt="" />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <nav>
            <li>
              <span>
                <FaFacebook size={32} />
              </span>
            </li>
            <li>
              <span>
                <FaInstagram size={32} />
              </span>
            </li>
            <li>
              <span>
                <FaWhatsapp size={32} />
              </span>
            </li>
          </nav>
        </Item>

        <Item>
          <h3>Our Services</h3>
          <ul>
            <li>
              <span>Comprar</span>
            </li>
            <li>
              <span>Alugar</span>
            </li>
            <li>
              <span>Vender</span>
            </li>
          </ul>
        </Item>

        <Item>
          <h3>Our Services</h3>
          <ul>
            <li>
              <span>Comprar</span>
            </li>
            <li>
              <span>Alugar</span>
            </li>
            <li>
              <span>Vender</span>
            </li>
          </ul>
        </Item>

        <Item>
          <h3>Our Services</h3>
          <ul>
            <li>
              <span>Comprar</span>
            </li>
            <li>
              <span>Alugar</span>
            </li>
            <li>
              <span>Vender</span>
            </li>
          </ul>
        </Item>
      </Container>
      <Copy>
        <p>Copyright © 2025 - Todos os direitos reservados</p>
        <ul>
          <li>
            <span>Termos de uso</span>
          </li>
          <li>
            <span>Políticas de privacidade</span>
          </li>
          <li>
            <span>Políticas de cookies</span>
          </li>
        </ul>
      </Copy>
    </Fragment>
  );
}

export default Footer;
