import { Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { DSButton } from './button';
import "./button";

export default {
    title: 'Components/Button',
    component: 'ds-button',
    argTypes: {
        variant: {
            control: {
                type: 'select',
                options: ['primary', 'secondary'],
            },
        },
    },
};