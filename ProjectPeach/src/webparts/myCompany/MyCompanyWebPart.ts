import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'MyCompanyWebPartStrings';
import MyCompany from './components/MyCompany';
import { IMyCompanyProps } from './components/IMyCompanyProps';
import { IMyCompanyWebPartProps } from './IMyCompanyWebPartProps';

export default class MyCompanyWebPart extends BaseClientSideWebPart<IMyCompanyWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IMyCompanyProps > = React.createElement(
      MyCompany,
      {
        newsLibraryName: this.properties.newsLibraryName,
        newsSiteUrl: this.properties.newsSiteUrl,
        announcementsListName: this.properties.announcementsListName,
        announcementsSiteUrl: this.properties.announcementsSiteUrl,
        weatherDefaultLocation: this.properties.weatherDefaultLocation,
        complianceUrl: this.properties.complianceUrl,
        cafeMenuUrl: this.properties.cafeMenuUrl,        
        spHttpClient: this.context.spHttpClient,
        siteUrl: this.context.pageContext.web.absoluteUrl,
        domElement: this.domElement,
        renderedOnce: this.renderedOnce
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.NewsGroupName,
              groupFields: [
                PropertyPaneTextField('newsLibraryName', {
                  label: strings.NewsLibraryFieldLabel,
                  value: "NewsPages"
                }),
                PropertyPaneTextField('newsSiteUrl', {
                  label: strings.NewsSiteUrlFieldLabel,
                  value: "Url goes Here"
                }),
              ]
            },
            {
              groupName: strings.AnnoucementsGroupName,
              groupFields:[
                PropertyPaneTextField('announcementsListName', {
                  label: strings.AnnouncementsListFieldLabel,
                  value: "Announcements"
                }),
                PropertyPaneTextField('announcementsSiteUrl', {
                  label: strings.AnnouncementsSiteUrlFieldLabel,
                  value: "Url goes here"
                }),
              ]
            },
            {
              groupName: strings.LinksGroupName,
              groupFields:[
                PropertyPaneTextField('weatherDefaultLocation', {
                  label: strings.WeatherDefaultLocation,
                  value: "Center Valley"
                }),
                PropertyPaneTextField('cafeMenuUrl', {
                  label: strings.CafeMenuLinkFieldLabel,
                  value: "https://fooda.com/olympus"
                }),
                PropertyPaneTextField('complianceUrl', {
                  label: strings.ComplianceLinkFieldLabel,
                  value: "https://one/EN/PublicProcedures/Forms/AllItems.aspx"
                }),
                
              ]
            }
          ]
        }
      ]
    };
  }
}