import { Component, ErrorInfo } from 'react';
import { ErrorBounderyProps, ErrorBounderyState } from './ErrorBoundery.types';
import styles from './ErrorBounderyStyles.module.scss';

class ErrorBoundery extends Component<ErrorBounderyProps, ErrorBounderyState> {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(): ErrorBounderyState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h3 className={styles.error}>{this.props.fallback}</h3>;
    }
    return this.props.children;
  }
}

export default ErrorBoundery;
