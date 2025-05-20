import { html } from 'lit-html';
import './button';

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

export const ButtonDefault = ({ variant }: { variant: 'primary' | 'secondary' }) => {
    return html`
        <ds-button variant=${variant}>
            Default Button
        </ds-button>
    `;
};

ButtonDefault.args = {
    variant: 'primary',
};
