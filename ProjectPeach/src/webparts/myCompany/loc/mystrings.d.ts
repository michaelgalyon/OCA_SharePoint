declare interface IMyCompanyWebPartStrings {
  PropertyPaneDescription: string;
  NewsGroupName: string;
  NewsLibraryFieldLabel: string;
  NewsSiteUrlFieldLabel: string;
  AnnoucementsGroupName: string;  
  AnnouncementsListFieldLabel: string;
  AnnouncementsSiteUrlFieldLabel: string;
  LinksGroupName: string;
  WeatherDefaultLocation: string;
  ComplianceLinkFieldLabel: string;
  CafeMenuLinkFieldLabel: string;
}

declare module 'MyCompanyWebPartStrings' {
  const strings: IMyCompanyWebPartStrings;
  export = strings;
}
