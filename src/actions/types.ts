import { IQuota } from "../types";
import actionTypes from "../constants/actionTypes";

export type IAction = {
    type: actionTypes,
    data?: IQuota,
};
