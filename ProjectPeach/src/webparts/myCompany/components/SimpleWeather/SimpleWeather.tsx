import * as React from 'react';
import { ISimpleWeatherProps } from './ISimpleWeatherProps';
import { ISimpleWeatherState } from './ISimpleWeatherState';
import { SPComponentLoader } from '@microsoft/sp-loader';
import * as $ from 'jquery';
require('simpleWeather');

export default class SimpleWeather extends React.Component<ISimpleWeatherProps, ISimpleWeatherState> {
    constructor(props?: ISimpleWeatherProps, context?: any) {
        super(props);

        this.state = {
            error: null,
            weather: {
                code: null,
                temp: null,
                units: {
                    temp: 'f',
                },
                city: null,
                region: null,
                currently: null,
                alt: {
                    temp: null,
                    unit: null,
                },
                image: null
            }
        };
    }

    public render(): React.ReactElement<ISimpleWeatherProps> {
        const hasError = this.state.error;
        /*let errorMessage = null;*/

        if (hasError) {
            return (
                <h2>{this.state.error}</h2>
            )
        }

        return (
            <div >
                SimpleWeather
                {this.state.error}
                <div id="weather" className="weather">
                    <img src={this.state.weather.image} alt={this.state.weather.currently}/><h2>{this.state.weather.temp}°{this.state.weather.units.temp}</h2>
                    <ul><li>{this.state.weather.city}, {this.state.weather.region}</li>
                        <li>{this.state.weather.alt.temp}°{this.state.weather.alt.unit}</li></ul>
                </div>
            </div>
        )
    };

    private loadWeather(location, woeid) {
        $.simpleWeather({
            location: location,
            woeid: woeid,
            unit: 'f',
            success: (returnedWeather) => {
                this.setState({
                    error: null,
                    weather: {
                        code: returnedWeather.code,
                        temp: returnedWeather.temp,
                        units: {
                            temp: 'f',
                        },
                        city: returnedWeather.city,
                        region: returnedWeather.region,
                        currently: returnedWeather.currently,
                        alt: {
                            temp: returnedWeather.alt.temp,
                            unit: returnedWeather.alt.unit,
                        },
                        image: returnedWeather.image,
                    }
                });
            },
            error: (returnedError) => {
                this.setState({
                    error: returnedError,
                });
            }
        });
    }


    public componentDidMount(): void {
        /*@params location, woeid*/
        /* Use Center Valley if browser doesn't support geolocation */
        /* 42.3619418,-71.24311329999999 is the location of Waltham if needed for testing */
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.loadWeather(position.coords.latitude+','+position.coords.longitude, ''); //load weather using your lat/lng coordinates
            });
        }
        else {            
            this.loadWeather('Center Valley', '');
        }


        /*KEEPING THIS CODE IN HERE INCASE I EVER NEED TO USE SPComponentLoader, as this did work*/

        /**SPComponentLoader.loadScript('https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js', {
            globalExportsName: 'jquery'
        }).then(($: any): void => {
            SPComponentLoader.loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery.simpleWeather/3.1.0/jquery.simpleWeather.min.js', {
                globalExportsName: 'jquery.simpleweather'
            })/**.then(($: any): void => {
                this.setState((prevState: ISimpleWeatherState, props: ISimpleWeatherProps): ISimpleWeatherState => {
                    prevState.loadingScripts = false;
                    return prevState;
                });
        })*/
    };

}