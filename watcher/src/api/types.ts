export type RequestType = 'Station' | 'Train'

export type StationAttr = {
    id: string
    name: string
    lon: string
    lat: string
}

export interface RequestResponse {
    ErrorCodeText: string
    ErrorCodeValue: number
    Success: boolean
}

type TrainRunningData = {
    DelayAgainstBooked: string
    LastUpdatedDateTime: string
    Latitude: string
    Longitude: string
}

type GpsData = {
    LastUpdatedDateTime: string
    Latitude: string
    Longitude: string
    Speed: string
}

/**
 * Train
 */
export interface TrainDoc extends RequestResponse {
    ErrorCodeText: string
    ErrorCodeValue: number
    Success: boolean
    AnnouncedTrainNumber: number
    Operator: string
    FinalDestinationLocationCode: string
    GpsData: Array<GpsData>
    InformationOwner: string
    IsParallelTrain: false
    OTN: Array<string>
    ParallelTrainList: Array<any>
    ProductInfoCode: string
    StartDepartureLocationCode: string
    Stations: Array<Station>
    TrafficTypeCode: string
    TrainRunningData: Array<TrainRunningData>
    UpdatedDateTime: string
}

type Station = {
    HasArrived: boolean
    HasDeparted: boolean
    IsAlighting: boolean
    IsBoarding: boolean
    IsCancelled: boolean
    IsChangedTrack: boolean
    IsDelayed: boolean
    Latitude: number
    Longitude: number
    Arrival: StationInfo
    Departure: StationInfo
    IsMarkDelayed: boolean
    LocationCode: string
}

type StationInfo = {
    Date: string
    IsCancelled: boolean
    IsDelayed: boolean
    IsMarkDelayed: boolean
    PreviousTrack: string
    RealDate: string
    RealTime: string
    RealTimeInformation: string
    RemarksCodes: Array<string>
    RemarksMetadata: Array<string>
    Time: string
    Track: string
}

export interface StationDoc extends RequestResponse {
    LocationCode: string
    ArrivalConnectionsUpdatedDateTime: string
    DepartureConnectionsUpdatedDateTime: string
    ArrivalConnections: Array<Connection>
    DepartureConnections: Array<Connection>
}

type Connection = {
    AnnouncedTrainNumber: number
    IsCancelled: boolean
    IsChangedTrack: boolean
    IsDelayed: boolean
    OTN: number
    Operator: string
    PreviousTrack: string
    Status: string
    StatusDate: string
    StatusTime: string
    Track: string
    Date: string
    DepartureLocationCode: string
    DestinationLocationCode: string
    GpsData: Array<GpsData>
    HasArrived: boolean
    HasDeparted: boolean
    InformationOwner: string
    IsMarkDelayed: boolean
    ProductInfoCode: string
    RemarksCodes: Array<string>
    RemarksMetadata: Array<string>
    Time: string
    TrafficTypeCode: string
    TrainRunningData: Array<TrainRunningData>
}


export type ScanResponse = {
    Success: boolean
    LocationCode: string
    ScanForDelayedMinutes: number
    hits: Array<Location>
}

export type Location = {
    TrainNumber: number
    Operator: string
    Departure: string
    Destination: string
    DelayedConnections: Array<DelayedConnection>
    image: string
}

export type DelayedConnection = {
    LocationCode: string
    MinutesDelayed: number,
    DepartureTime: string
    DepartureRealTime: string
    ArrivalTime: string
    ArrivalRealTime: string
}