import React, { Component, ReactNode } from 'react';
import ErrorIndicator from '../ErrorIndicator';
import { Props, State, Error } from './types';

class ErrorBoundary extends Component<Props, State> {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(): Error {
    return { hasError: true };
  }

  render(): ReactNode {
    const { hasError } = this.state;
    const { children } = this.props;

    return hasError ? <ErrorIndicator /> : children;
  }
}

export default ErrorBoundary;
