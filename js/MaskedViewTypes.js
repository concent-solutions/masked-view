// @flow
import { type Node, type Element } from 'react';
import type {ViewPropTypes as ViewProps} from 'deprecated-react-native-prop-types';

export type MaskedViewProps = $Shape<ViewProps> &
  $ReadOnly<{|
    children: Node,
    /**
     * Should be a React element to be rendered and applied as the
     * mask for the child element.
     */
    maskElement: Element<any>,
    /**
     * Opt into software rendering to enable animated masks.
     */
    androidRenderingMode?: 'software' | 'hardware',
  |}>;
