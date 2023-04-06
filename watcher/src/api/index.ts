import fetch, { Response } from 'node-fetch'
import { BASE_URL } from '../config/settings.json'
import { FORMAT, getDate } from '../utils'
import { StationDoc, TrainDoc } from './types'

const createResponse = async <T>(request: Response): Promise<T> => {
    let body = await request.text()
    body = body.replace('fetch(', '').replace(');', '')

    return JSON.parse(body)
}

export const fetchTrain = async (trainNumber: number): Promise<TrainDoc> => {
    const url = `${BASE_URL}/TrainRoute?callback=fetch&AnnouncedTrainNumber=${trainNumber}&FilterCode=DEFAULT`
    const request = await fetch(url)
    
    if (request.status !== 200) throw new Error(`fetchTrain Failed`)
    return createResponse<TrainDoc>(request)
}

export const fetchStation = async (stationCode: string): Promise<StationDoc> => {
    const url = `${BASE_URL}/StationConnections?callback=fetch&LocationCode=${stationCode.toUpperCase()}&DateTime=${getDate(FORMAT.SJ)}&FilterCode=DEFAULT`
    const request = await fetch(url)
    
    if (request.status !== 200) throw new Error(`fetchStation Failed`)
    return createResponse<StationDoc>(request)
}