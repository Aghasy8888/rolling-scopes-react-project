import { Component } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SearchProps, SearchState } from './Search.type';
import { getPeople } from '../../helpers/getPeople';

import styles from './SearchStyles.module.scss';

class Search extends Component<SearchProps, SearchState> {
  state = {
    windowWidth: window.innerWidth,
  };

  handleResize = () => {
    this.setState({ windowWidth: window.innerWidth });
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleSubmit = () => {
    const { searchValue, setPeople, setShowAuthSpinner } = this.props;
    const searchData = {
      search: searchValue?.trim(),
    };

    setShowAuthSpinner(true);
    localStorage.setItem('search', `${searchValue?.trim()}`);

    getPeople(searchData, setPeople, setShowAuthSpinner);
  };

  render() {
    return (
      <section className={styles.searchContainer}>
        <div className={styles.inputGroup}>
          <input
            className={styles.formControl}
            placeholder="Search..."
            value={this.props.searchValue ? this.props.searchValue : ''}
            onChange={(event) => this.props.setSearch(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                this.handleSubmit();
              }
            }}
          />

          <button className={styles.search} onClick={this.handleSubmit}>
            {this.state.windowWidth < 720 ? (
              <FontAwesomeIcon icon={faSearch} />
            ) : (
              'Search'
            )}
          </button>
        </div>
      </section>
    );
  }
}

export default Search;
