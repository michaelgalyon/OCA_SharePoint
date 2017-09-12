import * as React from 'react';
import styles from './MyWork.module.scss';
import { IMyWorkProps } from './IMyWorkProps';
import { escape } from '@microsoft/sp-lodash-subset';
import Timesheets from './Timesheets/Timesheets';
import Requisitions from './Requisitions/Requisitions';
import Expenses from './Expenses/Expenses';
import HRItems from './HRItems/HRItems';
import NewRequest from './NewRequest/NewRequest';
import MyRequests from './MyRequests/MyRequests';

import {
  Button,
  Grid,
  Image,
  Label,
  Icon
} from 'semantic-ui-react';

export default class MyWork extends React.Component<IMyWorkProps, {}> {
  public render(): React.ReactElement<IMyWorkProps> {
    return (
      <div className={styles.myWork}>
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"></link>
        <Grid stackable columns={2}>
          <Grid.Column className="Tasks" width={8}  >
            <Image src="http://semantic-ui.com/images/wireframe/image.png" >
              <Label corner="left">1</Label>
            </Image>
          </Grid.Column>
          <Grid.Column className="Calendar" width={8} >
            <Image src="http://semantic-ui.com/images/wireframe/image.png" >
              <Label corner="left">8</Label>
            </Image>
          </Grid.Column>
          <Grid.Column className="Timesheets" width={4} >
            <Timesheets domElement={this.props.domElement}
              listName={this.props.requestsListName}
              spHttpClient={this.props.spHttpClient}
              siteUrl={this.props.requestsSiteUrl} />
          </Grid.Column>
          <Grid.Column className="Requisitions" width={4} >
            <Requisitions domElement={this.props.domElement}
              listName={this.props.requestsListName}
              spHttpClient={this.props.spHttpClient}
              siteUrl={this.props.requestsSiteUrl} />
          </Grid.Column>
          <Grid.Column className="Expenses" width={4} >
            <Expenses domElement={this.props.domElement}
              listName={this.props.requestsListName}
              spHttpClient={this.props.spHttpClient}
              siteUrl={this.props.requestsSiteUrl} />
          </Grid.Column>
          <Grid.Column className="HRItems" width={4} >
            <HRItems domElement={this.props.domElement}
              listName={this.props.requestsListName}
              spHttpClient={this.props.spHttpClient}
              siteUrl={this.props.requestsSiteUrl} />
          </Grid.Column>
          <Grid.Column className="NewRequest" width={4} >
            <NewRequest domElement={this.props.domElement}
              listName={this.props.requestsListName}
              spHttpClient={this.props.spHttpClient}
              siteUrl={this.props.requestsSiteUrl} />
          </Grid.Column>
          <Grid.Column className="MyRequests" width={4} >
            <MyRequests domElement={this.props.domElement}
              listName={this.props.requestsListName}
              spHttpClient={this.props.spHttpClient}
              siteUrl={this.props.requestsSiteUrl} />
          </Grid.Column>
          <Grid.Column className="ReviewRequests" width={4} >
            <Image src="http://semantic-ui.com/images/wireframe/image.png" >
            </Image>
          </Grid.Column>
          <Grid.Column className="RequestApprovals" width={4} >
            <Image src="http://semantic-ui.com/images/wireframe/image.png" >
            </Image>
          </Grid.Column>
        </Grid>
      </div>
    );
  }

  private readItems(): void {

    this.context
    /* this.context.GraphHttpClient.get("v1.0/me?$select=office", GraphHttpClient.configurations.v1)
      .then((response: GraphClientResponse): Promise<any> => {
        return response.json();
      })
      .then((data: any): void => {
        // ...
      }); */
  }
}
