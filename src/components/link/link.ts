import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import style from '@css/main.css';

@customElement('ds-link')
export class DSLink extends LitElement {
    @property({ type: String }) href = '';
    @property({ type: String }) variant: 'default' | 'button' = 'default';

    static styles = unsafeCSS(style);
    render() {
        const isExternal = this.href.startsWith('http');
        const rel = isExternal ? 'noopener noreferrer' : undefined;
        const target = isExternal ? '_blank' : undefined;

        const classes =
            this.variant === 'button'
                ? 'inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'
                : 'text-blue-600 underline hover:text-blue-800';

        return html`
            <a
                href=${this.href}
                target=${target ?? ''}
                rel=${rel ?? ''}
                class=${classes}
            >
                <slot></slot>
            </a>
        `;
    }
}
