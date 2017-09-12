import * as React from 'react';
import { INewsCrawlProps } from './INewsCrawlProps';
import { INewsCrawlState } from './INewsCrawlState';
import { IListItem } from './IListItem';
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { Image, ImageFit } from 'office-ui-fabric-react/lib/Image';
import { Environment, EnvironmentType } from '@microsoft/sp-core-library';

import 'pure-react-carousel/dist/react-carousel.es.css';
import './NewsCrawl.css';



export default class NewsCrawl extends React.Component<INewsCrawlProps, INewsCrawlState> {
    constructor(props, state) {
        super(props);

        this.state = {
            status: 'Initializing News Items',
            items: [],
            error: false
        };
    }

    private listNotConfigured(props): boolean {
        return props.listName === undefined ||
            props.listName === null ||
            props.listName.length === 0;
    }

    public componentDidMount(): void {
        if (Environment.type === EnvironmentType.Local) {
            this.readMockItems();
        } else {
            this.readItems();
        }
    }

    public componentWillMount(): void {
        this.setState({
            status: this.listNotConfigured(this.props) ? 'Please configure news list in Web Part properties' : 'News Ready',
            items: []
        });
    }


    public render(): React.ReactElement<INewsCrawlProps> {
        const items: JSX.Element[] = this.state.items.map((item: IListItem, i: number): JSX.Element => {
            return (
                <a href={item.Url}>
                    <Slide index={i} className='NewsSlide' >
                        <Image src={item.ImgUrl}
                            className='NewsSlideImage'
                            maximizeFrame={true}
                            imageFit={ImageFit.contain} />
                        <div className='NewsSlideTitle'>
                            <div className='NewsSlideTitleContent'>
                                {item.Title}
                            </div>
                        </div>
                    </Slide>
                </a>
            );
        });

        return (
            <CarouselProvider
                naturalSlideWidth={80}
                naturalSlideHeight={75}
                totalSlides={items.length}
                visibleSlides={2}
                  >                            
                <ButtonBack className='NewsSliderBackBtn'>&lt;</ButtonBack>
                <ButtonNext className='NewsSliderForwardBtn '>></ButtonNext>
                <Slider className='NewsSlider'>
                    {items}
                </Slider>    
            </CarouselProvider>            
        );
    }

    private readMockItems(): void {

        this.setState({
            status: 'Loading Mock News Items...',
            items: []
        });

        var mockData = require('json-loader!./Mock.json') as IListItem[];

        this.setState({
            status: 'Successfully Loaded Mock News Data',
            items: mockData
        });

        /*This is how to get data from a Json file*/
        /*var mockData = require('json-loader!./Mock.json');*/
    }



    private readItems(): void {
        this.setState({
            status: 'Loading all news items...',
            items: []
        });
        console.log(this.state.status);

        this.props.spHttpClient.get(`${this.props.siteUrl}/_api/web/lists/getbytitle('${this.props.listName}')/items?$select=Title,Id,Body`,
            SPHttpClient.configurations.v1,
            {
                headers: {
                    'Accept': 'application/json;odata=nometadata',
                    'odata-version': ''
                }
            })
            .then((response: SPHttpClientResponse): Promise<{ value: IListItem[] }> => {
                return response.json();
            })
            .then((response: { value: IListItem[] }): void => {
                this.setState({
                    status: `Successfully loaded ${response.value.length} news items`,
                    items: response.value
                });
                console.log(this.state.status);
            }, (error: any): void => {
                this.setState({
                    status: 'Loading all news items failed with error: ' + error,
                    items: [],
                    error: true
                });
            });
    }
}