import React from 'react';
import { memo } from 'react';
import { Berry } from '../PokemonApp/PokemonApp.types';
import { BerryCard } from '..';

import styles from './BerriesStyles.module.scss';

type BerriesProps = {
  berries: Berry[];
};

function Berries(props: BerriesProps) {
  console.log('props.berries', props.berries);

  const BerriesComponents = props.berries.map((berry, index) => (
    <BerryCard key={index} berry={berry} />
  ));

  return (
    <section className={styles.berries}>
      <div className={styles.berriesContainer}>{BerriesComponents}</div>
    </section>
  );
}

const BerriesMemoized = memo(Berries);

export default BerriesMemoized;
