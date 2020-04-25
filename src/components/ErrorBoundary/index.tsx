import React, { ReactNode, Component } from 'react';
import ErrorIndicator from '../ErrorIndicator';

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
};

class ErrorBoundary extends Component<Props, State> {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    return hasError ? <ErrorIndicator /> : children;
  }
}

export default ErrorBoundary;
