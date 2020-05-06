import React, { Component, ReactNode } from 'react';
import ErrorIndicator from '../ErrorIndicator';
import { IProps, IState } from './types';

class ErrorBoundary extends Component<IProps, IState> {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render(): ReactNode {
    const { hasError } = this.state;
    const { children } = this.props;

    return hasError ? <ErrorIndicator /> : children;
  }
}

export default ErrorBoundary;
