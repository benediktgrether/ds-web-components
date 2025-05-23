import { html } from 'lit-html';
import './container';

export default {
    title: 'layout/container',
    component: 'ds-container',
    argTypes: {},
};

export const containerDefault = () => {
    return html` <ds-container>Default container</ds-container> `;
};
