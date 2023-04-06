import sha256 from 'crypto-js/sha256'
import fs from 'fs'
import moment from 'moment'
import Stations from '../resources/Stations'

export const getStationName = (locationCode: string) => {
    const station = Stations.filter(item => item.id === locationCode).pop()
    if (station) return station.name
}

export const sha256sum = (data: any): string => {
    const rawData = typeof data === 'object' ? JSON.stringify(data) : data
    return sha256(rawData).toString()
}

export const convertDate = (dateString: string, format: string) => {
    return moment(dateString).format(format)
}

export const getFile = (filepath: string) => {
    if (!fs.existsSync(filepath))
        throw new Error(`File "${filepath}" doesnt exist!`)

    const fileContent = fs.readFileSync(filepath, { encoding: 'utf-8' })

    const { mtime } = fs.statSync(filepath)
    const latestModifiedTime = mtime.getTime()

    return { fileContent, latestModifiedTime }
}