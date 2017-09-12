import * as React from 'react';
import styles from './MySocial.module.scss';
import { IMySocialProps } from './IMySocialProps';
import { escape } from '@microsoft/sp-lodash-subset';

import FeaturedPost from './FeaturedPost/FeaturedPost';
import RecentDocuments from './RecentDocuments/RecentDocuments';
import SocialCollaborations from './SocialCollaborations/SocialCollaborations';
import SocialGroups from './SocialGroups/SocialGroups';
import SocialTopics from './SocialTopics/SocialTopics';
import TeamCollaborations from './TeamCollaborations/TeamCollaborations';

import {
  Button,
  Grid,
  Image,
  Label,
  Icon
} from 'semantic-ui-react';

export default class MySocial extends React.Component<IMySocialProps, {}> {
  public render(): React.ReactElement<IMySocialProps> {
    return (
      <div className={styles.mySocial}>
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"></link>
        <Grid stackable>
          {/* <Grid.Column className="SocialTiles" width={8}  > */}

          {/* <Grid.Row className="YammerRow" columns={2} equal > */}
          <Grid.Column className="SocialTopics" width={4}  >
            <SocialTopics domElement={this.props.domElement}
                  spHttpClient={this.props.spHttpClient} />
          </Grid.Column>
          <Grid.Column className="SocialGroups" width={4} >
            <SocialGroups domElement={this.props.domElement}
                  spHttpClient={this.props.spHttpClient} />
          </Grid.Column>
          {/* </Grid.Row>
          <Grid.Row className="CollabRow" columns={2} equal> */}
          <Grid.Column className="FeaturedPost" width={8} floated={'right'} >
            <FeaturedPost domElement={this.props.domElement}
                  spHttpClient={this.props.spHttpClient} />
          </Grid.Column>  
          <Grid.Column className="Delve" width={4} floated={'left'} >
            <SocialCollaborations domElement={this.props.domElement}
                  spHttpClient={this.props.spHttpClient} />
          </Grid.Column>
          <Grid.Column className="Teams" width={4} floated={'left'} >
            <TeamCollaborations domElement={this.props.domElement}
                  spHttpClient={this.props.spHttpClient} />
          </Grid.Column>
          {/* </Grid.Row> */}
          {/* </Grid.Column>  */}

          <Grid.Column className="Recent Documents" width={16}  >
            <RecentDocuments domElement={this.props.domElement}
                  spHttpClient={this.props.spHttpClient} />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
