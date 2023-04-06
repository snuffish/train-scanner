import useSWR from "swr"

const getUniqueListBy = (arr: any[], key: string) => {
    // @ts-ignore
    return [...new Map(arr.map((item: any) => [item[key], item])).values()]
}

const fetcher = (...args: any) => fetch(args).then(res => res.json())

export const useDate = (date: string) => {
    const { data, error } = useSWR(`/api/date/${date}`, fetcher)

    const formatData = data ? getUniqueListBy(
        data.reduce((acc: any, cur: any) => acc.concat(cur.hits), []), 'TrainNumber'
    ) : null

    return {
        data: formatData,
        isLoading: !error && !data,
        isError: error
    }
}
