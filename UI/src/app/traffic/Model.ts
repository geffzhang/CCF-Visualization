export interface NameValueSet {
    Name: string,
    Value: number
}

export interface IDashBoard {
    TotalOrderCnt: number;
    TotalFee: number;
    AvgFeePerOrder: number;
    TotalDistanceKm: number;
    AvgDistanceKmPerOrder: number;
    FeePerKm: number;
    TotalDayCnt: number;
    AvgOrderCntEveryDay: number;
    AvgFeeEveryDay: number;
    AvgDistanceKmEveryDay: number;
    weeklyinfos: {
        Name: string, Value: {
            ordercnt: number,
            fee: number,
            normaltime: number,
            distance: number,
            premier: number,
            reserve: number,
            pickup: number,
            airport: number,
            train: number,
            longbus: number,
            school: number,
            hospital: number,
            travel: number,
            waittime_1: number,
            waittime_2: number,
            waittime_3: number,
            waittime_4: number,
            distance_1: number,
            distance_2: number,
            distance_3: number,
            distance_4: number,
        }
    }[],
    TravellerCnt: NameValueSet[],
    product_ids: NameValueSet[],
    order_type: NameValueSet[],
    traffic_types: NameValueSet[],
    countys: NameValueSet[],
    product_1levels: NameValueSet[],
    NormalTime: NameValueSet[],
    Distance: NameValueSet[],
    starting_poi: NameValueSet[],
    starting_pois: NameValueSet[],
    dest_pois: NameValueSet[],
    WaitTime: NameValueSet[],
    speed: NameValueSet[],
    distance_km: NameValueSet[],
    weekday_hour_speed: NameValueSet[],
    weekday_hour_speed_airport: NameValueSet[],
    weekday_hour_speed_train: NameValueSet[],
    weekday_hour_speed_longbus: NameValueSet[],
    weekday_hour_speed_cbd: NameValueSet[],
    weekday_hour_speed_hospital: NameValueSet[],
    weekday_hour_speed_school: NameValueSet[],
    weekday_hour_speed_travel: NameValueSet[],
}

export interface IDiaryinfo {
    Name: string,
    Value: {
        weather: IWeather;
        ordercnt: number;
        airport: number;
        train: number;
        longbus: number;
        cbd: number;
        school: number;
        hospital: number;
        travel: number;

        distance: number;
        fee: number;
        holiday: number;
        isWorkday: boolean;
        Weekno: string;
    }
}

export interface IWeather {
    Description: string,
    Tempera: string,
    Wind: string
}

export interface ITimeAnaysis {
    weekday_hour_orderCnt: NameValueSet[],
    weekday_hour_orderCnt_airport: NameValueSet[],
    weekday_hour_orderCnt_train: NameValueSet[],
    weekday_hour_orderCnt_longbus: NameValueSet[],
    weekday_hour_orderCnt_cbd: NameValueSet[],
    weekday_hour_orderCnt_hospital: NameValueSet[],
    weekday_hour_orderCnt_school: NameValueSet[],
    weekday_hour_orderCnt_travel: NameValueSet[],
}

export interface MapValue {
    hour: number,
    name: string,
    value: number[],
    weekno: number
}

export interface ITraceItem {
    coords: any,
    lineStyle: {
        width: number;
    }
}

export interface IPointAttr {
    lng: number;
    lat: number;
    StartCount: number;
    DestCount: number;
    WatiTime: number;
    NormalTime: number;
    Distance: number;
}

export interface IRelationship {
    coord: number[];
    ENC: number;
    PageRank: number;
    Betweenness: number;
}

export interface ICommunity {
    lng: number;
    lat: number;
    community_walktrap: number;
}