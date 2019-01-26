import * as React from 'react';
import 'semantic-ui-css/semantic.min.css'
import  Header  from "./components/Header";
import  List  from "./components/List";
import MessageExampleDismissibleBlock from './components/widgets/Message'

class App extends React.Component {

  public render() {
    return (
      <>
      <Header/>
      <MessageExampleDismissibleBlock/>
      <List />
      </>
    );
  }
}

export default App;
