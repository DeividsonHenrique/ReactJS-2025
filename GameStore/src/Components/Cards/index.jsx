import { Card, Image, Subtitle, Price, Text } from "./style";
function Cards() {
  return (
    <>
      <Card>
        <Image/>
        <Text>
            <Subtitle>Call of Duty</Subtitle>
            <Price><span>$25,00</span> 45,00</Price>
        </Text>
      </Card>
    </>
  )
}

export default Cards
