import { html, fixture, expect } from '@open-wc/testing';
import './button'; // Adjust path as needed

describe('<ds-button>', () => {
    it('renders with default variant (primary)', async () => {
        const el = await fixture<HTMLButtonElement>(
            html`<ds-button>Click me</ds-button>`
        );
        const button = el.shadowRoot!.querySelector('button');
        expect(button).to.exist;
        expect(button!.className).to.include('bg-blue-600');
        expect(button!.textContent).to.include('Click me');
    });

    it('renders with secondary variant', async () => {
        const el = await fixture<HTMLButtonElement>(
            html`<ds-button variant="secondary">Other</ds-button>`
        );
        const button = el.shadowRoot!.querySelector('button');
        expect(button!.className).to.include('bg-gray-600');
    });
});
