import { Component } from 'react';
import { Person } from '../StartWarsApp/StartWarsApp.types';

import styles from './PersonCardStyles.module.scss';

type PersonProps = {
  person: Person;
};

class PersonCard extends Component<PersonProps> {
  render() {
    const { person } = this.props;

    return (
      <article className={styles.personCard}>
        <h3 className={styles.personName}>{person.name}</h3>
        <p className={styles.description}>
          A {person.skin_color} {person.gender} {person.height} cm tall with{' '}
          {person.eye_color} eyes․
        </p>
      </article>
    );
  }
}

export default PersonCard;
