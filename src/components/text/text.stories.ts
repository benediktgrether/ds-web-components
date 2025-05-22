import { html } from 'lit-html';
import './text';

export default {
    title: 'Components/Text',
    component: 'ds-text',
    argTypes: {},
};

export const Text = () => {
    return html` <ds-text variant="{variant}">Default text</ds-text> `;
};
