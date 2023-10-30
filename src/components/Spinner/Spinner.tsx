import { Component } from 'react';
import styles from './SpinnerStyle.module.scss';

class Spinner extends Component {
  render() {
    return (
      <div className={styles.spinnerContainer}>
        <div className={styles.ldsRoller}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default Spinner;
