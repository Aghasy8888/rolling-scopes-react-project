import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SearchProps } from './Search.type';
import { getBerries } from '../../helpers/getBerries';
import useInnerWidth from '../../hooks/useInnerWidth';

import styles from './SearchStyles.module.scss';

function Search(props: SearchProps) {
  const windowWidth = useInnerWidth();

  const handleSubmit = () => {
    const { searchValue, setBerries, setShowAuthSpinner } = props;

    setShowAuthSpinner(true);
    localStorage.setItem('search', `${searchValue?.trim()}`);

    getBerries(setBerries, setShowAuthSpinner, searchValue?.trim());
  };

  return (
    <section className={styles.searchContainer}>
      <div className={styles.inputGroup}>
        <input
          className={styles.formControl}
          placeholder="Search..."
          value={props.searchValue ? props.searchValue : ''}
          onChange={(event) => props.setSearch(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              handleSubmit();
            }
          }}
        />

        <button className={styles.search} onClick={handleSubmit}>
          {windowWidth < 720 ? <FontAwesomeIcon icon={faSearch} /> : 'Search'}
        </button>
      </div>
    </section>
  );
}

export default Search;
