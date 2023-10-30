import { Component } from 'react';
import { Person } from '../StartWarsApp/StartWarsApp.types';
import { PersonCard } from '../../components';

import styles from './PeopleStyles.module.scss';

type PeopleProps = {
  people: Person[];
  search: string | null;
};

class People extends Component<PeopleProps> {
  render() {
    const peopleComponents = this.props.people.map((person, index) => (
      <PersonCard key={index} person={person} />
    ));

    return (
      <section className={styles.people}>
        <div className={styles.peopleContainer}>{peopleComponents}</div>
      </section>
    );
  }
}

export default People;
