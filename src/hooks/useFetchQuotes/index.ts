import {useEffect, useCallback, useState} from 'react';
import io from "socket.io-client";
import { BASE_PATH } from '../../constants/paths';
import { quoteSymbols } from '../../constants/lists';
import { sortBySymbol } from '../../utils';
import {IData, IQuota, IQuotaMap} from "../../types";

const useFetchQuotes = () => {
    const [quotesMap, setQuotesMap] = useState<IQuotaMap>({});

    const fetchData: () => () => void = useCallback(() => {
        const client = io(BASE_PATH);

        client.on('connect', () => {
            client.emit('subscribe', quoteSymbols);
        });

        client.on('disconnect', () => {
            client.emit('unsubscribe', quoteSymbols);
        });

        client.on('quotes', (data: IData) => {
            setQuotesMap((prevState) => ({
                ...prevState,
                [data.msg.symbol]: data.msg,
            }));
        });

        return () => {
            client.close();
        };
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const quotes: IQuota[] = sortBySymbol(quotesMap);

    return [quotes, fetchData];
};

export default useFetchQuotes;
