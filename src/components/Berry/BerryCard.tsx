import React from 'react';
import { Berry } from '../PokemonApp/PokemonApp.types';

import styles from './BerryCardStyles.module.scss';

type BerryProps = {
  berry: Berry;
};

function BerryCard(props: BerryProps) {
  const { berry } = props;

  return (
    <article className={styles.berryCard}>
      <h3 className={styles.berryName}>{berry.name}</h3>
      <p className={styles.description}>A berry</p>
    </article>
  );
}

export default BerryCard;
