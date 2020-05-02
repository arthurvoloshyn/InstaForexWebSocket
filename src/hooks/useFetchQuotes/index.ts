import {useEffect, useCallback, useReducer} from 'react';
import io from "socket.io-client";
import Paths from '../../constants/paths';
import { quoteSymbols } from '../../constants/lists';
import dataFetchReducer, { initState } from '../../reducers/dataFetchReducer';
import { fetchSuccess, fetchInit, fetchFailure } from '../../actions';
import {IData, IQuota} from "../../types";

const useFetchQuotes = () => {
    const [state, dispatch] = useReducer(dataFetchReducer, initState);

    const fetchData = useCallback(() => {
        const client = io(Paths.basePath);

        dispatch(fetchInit());

        try {
            client.on('connect', () => {
                client.emit('subscribe', quoteSymbols);
            });

            client.on('disconnect', () => {
                client.emit('unsubscribe', quoteSymbols);
            });

            client.on('quotes', (data: IData) => {
                const { msg = {} }: IQuota = data;

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

    return [state, fetchData];
};

export default useFetchQuotes;
