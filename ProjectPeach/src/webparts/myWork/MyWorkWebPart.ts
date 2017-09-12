import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'MyWorkWebPartStrings';
import MyWork from './components/MyWork';
import { IMyWorkProps } from './components/IMyWorkProps';
import { IMyWorkWebPartProps } from './IMyWorkWebPartProps';

export default class MyWorkWebPart extends BaseClientSideWebPart<IMyWorkWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IMyWorkProps > = React.createElement(
      MyWork, {
        description: this.properties.description,
        requestsListName: this.properties.requestsListName,
        requestsSiteUrl: this.properties.requestsSiteUrl,
        domElement: this.domElement,
        spHttpClient: this.context.spHttpClient,
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
              groupName: strings.RequestsGroupName,
              groupFields: [
                PropertyPaneTextField('requestsListName', {
                  label: strings.RequestsListFieldLabel,
                  value: "Request Center Library name"
                }),
                PropertyPaneTextField('requestsSiteUrl', {
                  label: strings.RequestsSiteUrlFieldLabel,
                  value: "Url goes here"
                }),
              ]
            }
          ]
        }
      ]
    };
  }
}
