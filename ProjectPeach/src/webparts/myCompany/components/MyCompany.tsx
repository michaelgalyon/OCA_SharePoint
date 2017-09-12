import * as React from 'react';
import styles from './MyCompany.module.scss';
import { IMyCompanyProps } from './IMyCompanyProps';
import { escape } from '@microsoft/sp-lodash-subset';

/**Import all Child Components */
import Announcements from './Announcements/Announcements';
import { IAnnouncementsProps } from './Announcements/IAnnouncementsProps';
import CafeMenu from './CafeMenu/CafeMenu';
import ComplianceLink from './ComplianceLink/ComplianceLink';
import NewsCrawl from './NewsCrawl/NewsCrawl';
import SimpleWeather from './SimpleWeather/SimpleWeather';

export default class MyCompany extends React.Component<IMyCompanyProps, {}> {
  public render(): React.ReactElement<IMyCompanyProps> {
    const styleFunction = (screenClass, props) => {
      let fontSize = 10;
      if (screenClass === 'sm') fontSize = 20;
      if (screenClass === 'md') fontSize = 30;
      if (screenClass === 'lg') fontSize = 40;
      if (screenClass === 'xl') fontSize = 50;
      return {
        fontSize: `${fontSize}px`,
        ...props.style,
      };
    };

    return (
      <div className={"WebPartContainer ms-Grid ms-bgColor-white"}>
        <div className={styles.myCompany}>
          <div className={styles.container}>
            <span className="ms-font-xl ms-fontColor-black">My Company</span>
            <div className={'my-row news-row ms-Grid-row ms-bgColor-white'}>
              <NewsCrawl domElement={this.props.domElement}
                listName={this.props.announcementsListName}
                spHttpClient={this.props.spHttpClient}
                siteUrl={this.props.siteUrl} />
            </div>
            <div className='my-row announcements-row ms-Grid-row' >
                <Announcements domElement={this.props.domElement}
                  listName={this.props.announcementsListName}
                  spHttpClient={this.props.spHttpClient}
                  siteUrl={this.props.siteUrl} />
            </div>
            <div className='my-row links-row ms-Grid-row '>
              <div className={'WeatherColumn ms-Grid-col ms-u-md6 ms-u-sm12 ms-bgColor-themePrimary'}>
                <SimpleWeather renderedOnce={this.props.renderedOnce}
                  defaultLocation={this.props.weatherDefaultLocation} />
              </div>
              <div className={'MenuColumn ms-Grid-col ms-u-md3 ms-u-sm12'}>
                <CafeMenu cafeMenuUrl={this.props.cafeMenuUrl} />
              </div>
              <div className={'ComplianceColumn ms-Grid-col ms-u-md3 ms-u-sm12'}>
                <ComplianceLink complianceUrl={this.props.complianceUrl} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}