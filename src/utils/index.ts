import {IQuota, IQuotaMap} from "../types";

export const sortBySymbol = (data: IQuotaMap): IQuota[] => {
    const dataValues: IQuota[] = Object.values(data);

    return dataValues.sort((a: IQuota, b: IQuota): number => a.symbol.localeCompare(b.symbol));
};
