// ds-badge.stories.ts
import { html } from 'lit-html';
import './badge';

export default {
    title: 'Components/Badge',
    component: 'ds-badge',
    argTypes: {
        variant: {
            control: {
                type: 'select',
                options: [
                    'primary',
                    'secondary',
                    'info',
                    'success',
                    'warning',
                    'danger',
                ],
            },
        },
        label: {
            control: 'text',
        },
    },
};

const Template = ({ variant, label }: { variant: string; label: string }) => {
    return html`<ds-badge variant=${variant}>${label}</ds-badge>`;
};

export const Primary = Template.bind({});
Primary.args = {
    variant: 'primary',
    label: 'New',
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: 'secondary',
    label: 'Updated',
};

export const Info = Template.bind({});
Info.args = {
    variant: 'info',
    label: 'Info',
};

export const Success = Template.bind({});
Success.args = {
    variant: 'success',
    label: 'Success',
};

export const Warning = Template.bind({});
Warning.args = {
    variant: 'warning',
    label: 'Warning',
};

export const Danger = Template.bind({});
Danger.args = {
    variant: 'danger',
    label: 'Danger',
};
