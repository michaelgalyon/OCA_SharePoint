declare interface IMyWorkWebPartStrings {
  PropertyPaneDescription: string;
  RequestsGroupName: string;
  DescriptionFieldLabel: string;  
  RequestsListFieldLabel: string;
  RequestsSiteUrlFieldLabel: string;
  NewRequestURLFieldLabel: string;
}

declare module 'MyWorkWebPartStrings' {
  const strings: IMyWorkWebPartStrings;
  export = strings;
}
