import * as React from "react";
import { Icon, Label } from "semantic-ui-react";

import Item from "../Item";

interface IState {
  data: any;
}

class List extends React.Component<{}, IState> {
  state: IState = {
    data: [
      {
        date: "seconds ago",
        name: "Linode",
        network_provider: "Linode",
        uploader: "Diego"
      },
      {
        date: "seconds ago",
        name: "Digital Ocean",
        network_provider: "Digital Ocean",
        uploader: "Diego"
      },
      {
        date: "seconds ago",
        name: "PLDT",
        network_provider: "PLDT",
        uploader: "Diego"
      }
    ]
  };
  public render() {
    return (
      <>
        <Label.Group color="blue">
          <Label as="a">
            latest from commuity
            <Icon name="close" />
          </Label>
        </Label.Group>

        <Item data={this.state.data} />
      </>
    );
  }
}

export default List;
