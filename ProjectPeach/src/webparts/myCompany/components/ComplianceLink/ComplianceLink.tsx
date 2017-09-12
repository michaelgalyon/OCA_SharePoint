import * as React from 'react';
/* import { Image, IImageProps, ImageFit } from 'office-ui-fabric-react/lib/Image' */
import { IComplianceLinkProps } from './IComplianceLinkProps';
import './ComplianceLink.css';
import { Label, Image } from 'semantic-ui-react'
/**const complianceImg: any = require('./assets/ComplianceButtonImage.PNG');*/

export default class ComplianceLink extends React.Component<IComplianceLinkProps, {}> {
    public render(): React.ReactElement<IComplianceLinkProps> {       

        /* let imageProps: IImageProps = {
            src: 'https://image.ibb.co/jLozxk/Compliance_Button_Image.png',
            imageFit: ImageFit.cover,
            maximizeFrame: true,
        } */

        return (       
            /* <div className={'ms-bgColor-greenLight'}>
                <i className={'ms-Icon ms-Icon--Cafe'} aria-hidden='true'></i> */
            <a href={ this.props.complianceUrl }>
                <Image src='https://image.ibb.co/jLozxk/Compliance_Button_Image.png' 
                size='medium' 
                href={ this.props.complianceUrl} 
                centered />
            </a>
            /* </div> */
        )
    };
}