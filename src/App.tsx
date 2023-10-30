import { Component } from 'react';
import { Spinner, StarWarsApp } from './components';

type AppState = {
  showAuthSpinner: boolean;
};

class App extends Component<Record<string, never>, AppState> {
  state = {
    showAuthSpinner: false,
  };

  setShowAuthSpinner = (showAuthSpinner: boolean) => {
    this.setState({
      showAuthSpinner,
    });
  };

  render() {
    return (
      <div>
        <StarWarsApp setShowAuthSpinner={this.setShowAuthSpinner} />
        {this.state.showAuthSpinner && <Spinner />}
      </div>
    );
  }
}

export default App;
