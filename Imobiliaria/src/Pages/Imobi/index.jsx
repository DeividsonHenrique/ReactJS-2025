import { Fragment } from "react"
import TopBanner from "../../Components/TopBanner"
import { Container, Left, Right, Thumb } from "./style"

function Imobi() {
  return (
    <Fragment>
      <TopBanner />
        <Container>
         <Left>
          <Thumb>
            <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
          </Thumb>
         </Left>

         <Right>

         </Right>
      </Container> 
    </Fragment>
  )
}

export default Imobi
