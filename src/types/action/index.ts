import { IFetchFailure, IFetchInit, IFetchSuccess } from "../../actions/types";

export type IAction = IFetchInit | IFetchFailure | IFetchSuccess;
