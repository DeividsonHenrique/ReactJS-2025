import { Fragment } from "react"
import TopBanner from "../../Components/TopBanner"
import { Container, Left, Right, Thumb, Description, Profile, ProfileImg, ProfileDescription, ProfileContact, ProfileFormContact } from "./style"

function Imobi() {
  return (
    <Fragment>
      <TopBanner />
        <Container>
         <Left>
          <Thumb>
            <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
          </Thumb>
          <Description>
            <h2>Apartamento / Alugar</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem totam nostrum aut recusandae nihil, doloribus vero esse quam, hic aliquam explicabo! Corporis commodi voluptatibus eveniet itaque doloribus consequuntur vero inventore!</p>
          </Description>
         </Left>

         <Right> 
            <Profile>
              <ProfileImg>
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </ProfileImg>
              <ProfileDescription>
                <h3>Luna Due</h3>
                <p>Descrição do usuario</p>
                <p>Teste@gmail.com</p>
              </ProfileDescription>
            </Profile>
            <ProfileContact>
                <h3>Informações para contato</h3>
                <p>(11) 99999-9999</p>
                <p>Teste@gmail.com</p>
            </ProfileContact>
            <ProfileFormContact>
              <h3>Contate o anunciante</h3>
              <form action="">
                <input type="text" placeholder="Nome:" name="" id=""/>
                <input type="text" placeholder="E-mail:" name="" id="" />
                <textarea name="" id="" cols="30" rows="10" placeholder="Mensagem:"></textarea>
                <button type="submit">Enviar mensagem</button>
              </form>
            </ProfileFormContact>
         </Right>
      </Container> 
    </Fragment>
  )
}

export default Imobi
