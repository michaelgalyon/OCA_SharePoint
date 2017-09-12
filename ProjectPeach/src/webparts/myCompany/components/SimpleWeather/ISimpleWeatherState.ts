export interface ISimpleWeatherState {
    weather?: {
        code: number;
        temp: number;
        units: {
            temp: string;
        }
        city: string;
        region: string;
        currently: string;
        alt: {
            temp: number;
            unit: string;
        }
        image: string;
    }
    error: string;
}