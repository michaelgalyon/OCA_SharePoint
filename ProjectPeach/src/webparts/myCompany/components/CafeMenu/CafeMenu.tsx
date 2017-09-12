import * as React from 'react';
import { Image, IImageProps, ImageFit } from 'office-ui-fabric-react/lib/Image'
import { ICafeMenuProps } from './ICafeMenuProps';

export default class CafeMenu extends React.Component<ICafeMenuProps, {}> {
    public render(): React.ReactElement<ICafeMenuProps> {
        let imageProps: IImageProps = {
            src: 'https://image.ibb.co/gyQexk/Weekly_Menu_Image.png',
            imageFit: ImageFit.cover,

        }
        
        return (
            <a href={ this.props.cafeMenuUrl }>
                <Image { ...imageProps as any } />
            </a>
        )
    };
}