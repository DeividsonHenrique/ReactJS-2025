import { Card, Image, Subtitle, Price, Text } from "./style";
import { useEffect, useState } from "react";

function Cards() {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    const fetchItens = async () => {
      const response = await fetch("Data/Catalago.json");
      const data = await response.json();
      setItens(data.Itens);
    };

    fetchItens();
  }, []);

  return (
    <>
      {itens.map((item, index) => (
        <Card key={index}>
          <Image src={item.image} />
          <Text>
            <Subtitle>{item.name}</Subtitle>
            <Price>R$ {item.price} <span>R$ {item.realPrice}</span></Price>
          </Text>
        </Card>
      ))}
    </>
  );
}

export default Cards;
