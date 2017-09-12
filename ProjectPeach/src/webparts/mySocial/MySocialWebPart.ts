import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'MySocialWebPartStrings';
import MySocial from './components/MySocial';
import { IMySocialProps } from './components/IMySocialProps';
import { IMySocialWebPartProps } from './IMySocialWebPartProps';

export default class MySocialWebPart extends BaseClientSideWebPart<IMySocialWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IMySocialProps > = React.createElement(
      MySocial,
      {
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
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
