import { Component } from 'react';
import { People, Search } from '..';
import { StarWarsAppState, setShowAuthSpinner } from './StartWarsApp.types';
import { getPeople } from '../../helpers/getPeople';

import styles from './StarWarsAppStyle.module.scss';

type StarWarsAppProps = {
  setShowAuthSpinner: setShowAuthSpinner;
};

class StarWarsApp extends Component<StarWarsAppProps, StarWarsAppState> {
  state = {
    people: [],
    searchValue: localStorage.getItem('search')
      ? localStorage.getItem('search')
      : '',
    hasError: false,
  };

  setPeople = (newPeople: StarWarsAppState['people']) => {
    this.setState({ people: newPeople });
  };

  setSearch = (newSearchValue: StarWarsAppState['searchValue']) => {
    this.setState({ searchValue: newSearchValue });
  };

  throwAnError = () => {
    this.setState({
      hasError: true,
    });
  };

  componentDidMount(): void {
    const { setShowAuthSpinner } = this.props;
    const searchData = {
      search: this.state.searchValue?.trim(),
    };
    setShowAuthSpinner(true);
    getPeople(searchData, this.setPeople, setShowAuthSpinner);
  }

  componentDidUpdate(): void {
    if (this.state.hasError) {
      throw new Error();
    }
  }

  render() {
    const { people, searchValue } = this.state;

    return (
      <div className={styles.starWarsApp}>
        <h1 className={styles.logo}>
          Star<span>Wars</span>
        </h1>
        <Search
          searchValue={searchValue}
          setPeople={this.setPeople}
          setSearch={this.setSearch}
          setShowAuthSpinner={this.props.setShowAuthSpinner}
        />
        <main>
          <People search={searchValue} people={people} />
        </main>
        <button
          className={styles.testErrorBounderyBtn}
          onClick={this.throwAnError}
        >
          Test Error Boundery
        </button>
      </div>
    );
  }
}

export default StarWarsApp;
