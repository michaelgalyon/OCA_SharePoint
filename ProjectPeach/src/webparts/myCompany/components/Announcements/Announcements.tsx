import * as React from 'react';
import { IAnnouncementsProps } from './IAnnouncementsProps';
import { IAnnouncementsState } from './IAnnouncementsState';
import { IListItem } from './IListItem';
import { escape } from '@microsoft/sp-lodash-subset';
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';
import { List } from 'office-ui-fabric-react/lib/List';
import { Modal } from 'office-ui-fabric-react/lib/Modal';
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Environment, EnvironmentType } from '@microsoft/sp-core-library';

import './Announcements.css';

export default class Announcements extends React.Component<IAnnouncementsProps, IAnnouncementsState> {
    constructor(props, state) {
        super(props);

        this.state = {
            status: 'Initializing Announcements',
            items: [],
            showModal: false,
            modalBody: '',
            modalTitle: '',
            error: false
        };
    }

    private listNotConfigured(props): boolean {
        return props.listName === undefined ||
            props.listName === null ||
            props.listName.length === 0;
    }

    public render(): React.ReactElement<IAnnouncementsProps> {
        const items: JSX.Element[] = this.state.items.map((item: IListItem, i: number): JSX.Element => {
            return (
                <div key={item.Id}
                    className={'AnnouncementItem ms-Grid-row'}
                    onClick={this._showModal.bind(this, item.Title, item.Body)}  >
                    <div className={'AnnouncementDate ms-Grid-col ms-u-sm4 ms-u-md3 ms-u-lg2'}>{item.Id}</div>
                    <div className={'AnnouncementTitle ms-Grid-col ms-u-sm8 ms-u-md9 ms-u-lg10'}>{item.Title}</div>
                </div>
            );
        });

        return (
            <div>
                <div className={`AnnouncementsWrapper ms-Grid ms-bgColor-yellow ms-fontColor-white`}>
                    <div className={'AnnouncementsTitleRow ms-Grid-row ms-fontsize-xl'}>
                        <div className={'ms-Grid-col ms-u-sm11'}>Announcements</div>
                        <div className={'AnnouncementIcon ms-Grid-col ms-u-sm1'}>
                            <i className="ms-Icon ms-Icon--Megaphone" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className='AnnouncmentsTable'>
                     {this.state.error &&
                        <h2>{this.state.status}</h2>
                     }
                        <div>
                            {items}
                        </div>
                    </div>
                </div>
                <Modal
                    isOpen={this.state.showModal}
                    onDismiss={this._closeModal.bind(this)}
                    isBlocking={false}
                    containerClassName='AnnouncementModalContainer'>
                    <div className={'AnnouncementModalHeader ms-bgColor-themePrimary ms-fontColor-white ms-font-xxl'}>
                        <span>{this.state.modalTitle}</span>
                    </div>
                    <div className={'AnnouncementModalBody ms-font-l'}>
                        <p>
                            {this.state.modalBody}
                        </p>
                    </div>
                </Modal>
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