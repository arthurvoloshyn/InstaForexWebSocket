import { Dispatch, Reducer } from "react";
import { IAction, IReducerState } from "../../types";

export type IReducer = Reducer<IReducerState, IAction>;

export type IReducerValue = [IReducerState, Dispatch<IAction>];

export type ISocket = SocketIOClient.Socket;
