import { Fragment } from "react";
import { Header, Wrapper } from "./style";
import Card from "../../Components/Card";
import Banner from "../../Components/Banner";

function Home() {
  let cards = [];

  for (let i = 0; i < 4; i++) {
    cards.push(<Card key={i} />);
  }
  return (
    <Fragment>
      <Banner />
      <Header>
        <h2>Find the property of your dreams</h2>
      </Header>
      <Wrapper>{cards}</Wrapper>
    </Fragment>
  );
}

export default Home;
