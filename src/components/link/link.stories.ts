import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './link';

const meta: Meta = {
    title: 'Components/Link',
    component: 'ds-link',
    tags: ['autodocs'],
    argTypes: {
        href: {
            control: 'text',
            description: 'Destination URL for the link',
        },
        variant: {
            control: 'select',
            options: ['default', 'button'],
            description: 'Visual style of the link',
        },
    },
};

export default meta;
type Story = StoryObj;

export const InternalLink: Story = {
    args: {
        href: '/impressum',
        variant: 'default',
    },
    render: (args) =>
        html`<ds-link href=${args.href} variant=${args.variant}
            >Impressum</ds-link
        >`,
};

export const ExternalLink: Story = {
    args: {
        href: 'https://external.com',
        variant: 'default',
    },
    render: (args) =>
        html`<ds-link href=${args.href} variant=${args.variant}
            >External Site</ds-link
        >`,
};

export const ButtonLink: Story = {
    args: {
        href: '/contact',
        variant: 'button',
    },
    render: (args) =>
        html`<ds-link href=${args.href} variant=${args.variant}
            >Contact Us</ds-link
        >`,
};
