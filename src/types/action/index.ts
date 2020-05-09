import { IFetchFailure, IFetchInit, IFetchSuccess } from '../../actions/types';

type IAction = IFetchInit | IFetchFailure | IFetchSuccess;

export default IAction;
