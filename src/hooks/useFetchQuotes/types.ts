import { Reducer } from 'react';
import { IAction, IReducerState } from '../../types';

export type IReducer = Reducer<IReducerState, IAction>;
