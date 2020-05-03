import { useEffect, useCallback, useReducer } from 'react';
import io from "socket.io-client";
import Paths from '../../constants/paths';
import Lists from '../../constants/lists';
import dataFetchReducer, { initState } from '../../reducers/dataFetchReducer';
import { fetchSuccess, fetchInit, fetchFailure } from '../../actions';
import { IData, IFetchQuotes } from "../../types";
import { IReducer, ISocket, IReducerValue } from './types';

const useFetchQuotes = () => {
    const [state, dispatch]: IReducerValue = useReducer<IReducer>(dataFetchReducer, initState);

    const fetchData = useCallback(() => {
        const client: ISocket = io(Paths.basePath);

        dispatch(fetchInit());

        try {
            client.on('connect', () => {
                client.emit('subscribe', Lists.quoteSymbols);
            });

            client.on('disconnect', () => {
                client.emit('unsubscribe', Lists.quoteSymbols);
            });

            client.on('quotes', (data: IData) => {
                const { msg = {} }: IData = data;

                dispatch(fetchSuccess(msg));
            });
        } catch {
            dispatch(fetchFailure());
        }

        return () => {
            client.close();
        };
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return [state, fetchData] as IFetchQuotes;
};

export default useFetchQuotes;
