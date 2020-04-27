import {IQuota, IQuotaMap} from "../types";

export const sortBySymbol = (data: IQuotaMap): IQuota[] => Object.values(data).sort((a: IQuota, b: IQuota): number => a.symbol.localeCompare(b.symbol));
