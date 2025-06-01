import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './modal';
import './../button/button'; // if you're using ds-button to control modal

const meta: Meta = {
    title: 'Components/Modal',
    component: 'ds-modal',
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        open: { control: 'boolean' },
        title: { control: 'text' },
        content: { control: 'text' },
        closeOnOutsideClick: { control: 'boolean' },
        closeOnEscape: { control: 'boolean' },
    },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
    args: {
        open: true,
        title: 'Welcome!',
        content: 'This is a simple modal with props.',
        closeOnOutsideClick: true,
        closeOnEscape: true,
    },
    render: (args) => html`
        <ds-button event="open" target="#modal-slot">Open Modal</ds-button>
        <ds-modal
            ?open=${args.open}
            title=${args.title}
            content=${args.content}
            ?closeOnOutsideClick=${args.closeOnOutsideClick}
            ?closeOnEscape=${args.closeOnEscape}
        ></ds-modal>
    `,
};

export const WithSlotContent: Story = {
    render: () => html`
        <ds-button event="open" target="#modal-slot">Open Modal</ds-button>

        <ds-modal id="modal-slot" title="Slot Example">
            <div slot="body">
                <p>This body was passed through a slot.</p>
            </div>
            <div slot="footer">
                <ds-button
                    event="close"
                    target="#modal-slot"
                    variant="secondary"
                >
                    Close
                </ds-button>
            </div>
        </ds-modal>
    `,
};
