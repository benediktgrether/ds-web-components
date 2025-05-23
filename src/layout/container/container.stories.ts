import { html } from 'lit-html';
import './container';

export default {
    title: 'layout/Container',
    component: 'ds-container',
    argTypes: {},
};

export const containerDefault = () => {
    return html` <ds-container>Default container</ds-container> `;
};
