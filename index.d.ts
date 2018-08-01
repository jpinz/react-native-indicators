// Type definitions for react-native-indicators
// Project: items-view-mobile

declare module 'react-native-indicators' {
    import { Component } from 'react';

    interface BaseProps {
        animationEasing?: EasingFunction;
        animationDuration?: number;
        animating?: boolean;
        interaction?: boolean;
    }

    export class Indicator extends Component<BaseProps> { }

    export interface IBallIndicatorProps extends BaseProps {
        color?: string;
        count?: number;
        size?: number;
    }

    export class BallIndicator extends Component<IBallIndicatorProps> { }

    export interface IBarIndicatorProps extends BaseProps {
        color?: string;
        count?: number;
        size?: number;
    }

    export class BarIndicator extends Component<IBarIndicatorProps> { }

    export interface IDotIndicatorProps extends BaseProps {
        color?: string;
        count?: number;
        size?: number;
    }

    export class DotIndicator extends Component<IDotIndicatorProps> { }

    export interface IMaterialIndicatorProps extends BaseProps {
        color?: string;
        size?: number;
    }

    export class MaterialIndicator extends Component<IMaterialIndicatorProps> { }

    export interface IPacmanIndicatorProps extends BaseProps {
        color?: string;
        size?: number;
    }

    export class PacmanIndicator extends Component<IPacmanIndicatorProps> { }

    export interface IPulseIndicatorProps extends BaseProps {
        color?: string;
        size?: number;
    }

    export class PulseIndicator extends Component<IPulseIndicatorProps> { }

    export interface ISkypeIndicatorProps extends BaseProps {
        color?: string;
        count?: number;
        size?: number;
        minScale?: number;
        maxScale?: number;
    }

    export class SkypeIndicator extends Component<ISkypeIndicatorProps> { }

    export interface IUIActivityIndicatorProps extends BaseProps {
        color?: string;
        count?: number;
        size?: number;
    }
    export class UIActivityIndicator extends Component<IUIActivityIndicatorProps> { }

    export interface IWaveIndicatorProps extends BaseProps {
        color?: string;
        count?: number;
        size?: number;
        waveFactor?: number;
        waveMode?: 'fill' | 'outline';
    }

    export class WaveIndicator extends Component<IWaveIndicatorProps> { }

}
