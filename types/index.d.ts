// CREDITS: These types are based on the original work made by all the people who contributed to @types/react-native

import * as React from 'react';
import * as ReactNative from 'react-native';
import type {ViewPropTypes as ViewProps} from 'deprecated-react-native-prop-types';


interface MaskedViewProps extends ViewProps {
  maskElement: React.ReactElement;
  androidRenderingMode?: 'software' | 'hardware';
}
/**
 * @see https://github.com/react-native-masked-view/masked-view
 */
declare class MaskedViewComponent extends React.Component<MaskedViewProps> {}
declare const MaskedViewBase: ReactNative.Constructor<
  ReactNative.NativeMethods
> &
  typeof MaskedViewComponent;
export default class MaskedView extends MaskedViewBase {}
