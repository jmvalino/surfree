import * as React from "react";
import { Button, Image, List } from "semantic-ui-react";

interface IProps {
  data: any;
}
function Item({ data }: IProps) {
  const items = data.map((item: any, index: number) => {
    return (
      <List.Item key={index}>
        <List.Content floated="right">
          <Button>OpenVPN</Button>
        </List.Content>
        <Image avatar src="/images/avatar/small/lena.png" />
        <List.Content>{item.network_provider}</List.Content>
      </List.Item>
    );
  });
  return (
    <>
      <List divided verticalAlign="middle">
        {items}
      </List>
    </>
  );
}

export default Item;
