import React, { Component, ReactNode } from 'react';
import ErrorIndicator from '../ErrorIndicator';
import { IProps, IState, IGetDerivedStateFromError } from './types';

class ErrorBoundary extends Component<IProps, IState> {
  readonly state = {
    hasError: false,
  };

  static getDerivedStateFromError(): IGetDerivedStateFromError {
    return { hasError: true };
  }

  render(): ReactNode {
    const { hasError } = this.state;
    const { children } = this.props;

    return hasError ? <ErrorIndicator /> : children;
  }
}

export default ErrorBoundary;
