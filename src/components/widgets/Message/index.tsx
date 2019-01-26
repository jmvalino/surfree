import * as React from 'react'
import { Message } from 'semantic-ui-react'

class MessageExampleDismissibleBlock extends React.Component {
  state = { visible: true }

  handleDismiss = () => {
    this.setState({ visible: false })

    setTimeout(() => {
      this.setState({ visible: true })
    }, 2000)
  }

  render() {
    if (this.state.visible) {
      return (
        <Message
          onDismiss={this.handleDismiss}
          header='Welcome to Surfree!'
          content='This is a special notification which you can dismiss.'
        />
      )
    }

    return (
      <p>
        <br />
        <i>The message will return in 2s</i>
        <br />
        <br />
      </p>
    )
  }
}

export default MessageExampleDismissibleBlock
