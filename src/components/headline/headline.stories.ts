import { html } from 'lit-html';
import './headline';

export default {
    title: 'Components/Headline',
    component: 'ds-headline',
    argTypes: {
        level: {
            control: {
                type: 'select',
                options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
            },
        },
        size: {
            control: {
                type: 'select',
                options: ['small', 'medium', 'large'],
            },
        },
    },
};

export const HeadlineDefault = ({ level, size }: { level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'; size: 'small' | 'medium' | 'large' }) => {
    return html`
        <ds-headline level="${level}" size="${size}">Default headline</ds-headline>
    `;
};

HeadlineDefault.args = {
    level: 'h1',
    size: 'medium',
};