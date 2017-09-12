import * as React from 'react';
import { ISocialGroupsProps } from './ISocialGroupsProps';
import { ISocialGroupsState } from './ISocialGroupsState';
import { IListItem } from './IListItem';
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';
import { Environment, EnvironmentType } from '@microsoft/sp-core-library';
import { Image, Label } from 'semantic-react';



export default class SocialGroups extends React.Component<ISocialGroupsProps, ISocialGroupsState> {
    constructor(props, state) {
        super(props);

        this.state = {
            status: 'Initializing Announcements',
            items: [],
            error: false
        };
    }

    private listNotConfigured(props): boolean {
        return props.listName === undefined ||
            props.listName === null ||
            props.listName.length === 0;
    }

    public render(): React.ReactElement<ISocialGroupsProps> {

        return (
            <div>
                <Image src="http://semantic-ui.com/images/wireframe/image.png">
                    <Label color="red" corner="right" size="large">{this.state.items.length}</Label>
                </Image>
            </div>
        );
    }

    /*Call in a button with onClick={this._showModalNoParams.bind(this)} */
    /*private _showModalNoParams() {
        this.setState({
            status: 'Opening Dialog',
            showModal: true,
            modalTitle: 'Test Title',
            modalBody: 'Test Body'
        });
    }*/

    /*Call in a button with onClick={this._showModalOneParam.bind(this, 'This is the passed in body')} */
    /*NOTE:  Must call with a string or an array that's passed.  An object doesn't work.  Which means...*/
    /*onClick={this._showModal.bind(this, item.Body)}  -------->  This works*/
    /*onClick={this._showModal.bind(this, {body: item.Body})}  -------->  This does not since it returns as an object*/
    /*private _showModalOneParam(body) {
        this.setState({
            status: 'Opening Dialog',
            showModal: true,
            modalTitle: 'Test Title',
            modalBody: body
        });
    }*/

    private _showModal(title, body) {
        this.setState({
            status: 'Opening Dialog',
            showModal: true,
            modalTitle: title,
            modalBody: body
        });
    }

    private _closeModal() {
        this.setState({
            status: this.state.status,
            items: this.state.items,
            showModal: false
        });
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
            status: this.listNotConfigured(this.props) ? 'Please configure list in Web Part properties' : 'Ready',
            items: []
        });
    }

    private readMockItems(): void {

        this.setState({
            status: 'Loading Mock Items...',
            items: []
        });

        var mockData = require('json-loader!./Mock.json') as IListItem[];

        this.setState({
            status: 'Successfully Loaded Mock Data',
            items: mockData
        });

        /*This is how to get data from a Json file*/
        /*var mockData = require('json-loader!./Mock.json');*/
    }



    private readItems(): void {
        this.setState({
            status: 'Loading all items...',
            items: []
        });

        this.props.spHttpClient.get(`https://graph.microsoft.com/v1.0/me/`,
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
                    status: `Successfully loaded ${response.value.length} items`,
                    items: response.value
                });
            }, (error: any): void => {
                this.setState({
                    status: 'Loading all items failed with error: ' + error,
                    items: [],
                    error: true
                });
            });
    }


}