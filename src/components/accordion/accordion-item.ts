import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import style from '@css/main.css';

@customElement('ds-accordion-item')
export class DSAccordionItem extends LitElement {
    @property({ type: Boolean, reflect: true }) open = false;

    toggle() {
        this.dispatchEvent(
            new CustomEvent('accordion-toggle', {
                bubbles: true,
                composed: true,
            })
        );
    }

    render() {
        return html`
            <div class="border-b border-gray-300">
                <button
                    @click=${this.toggle}
                    class="w-full text-left px-4 py-3 font-medium bg-gray-100 hover:bg-gray-200"
                    aria-expanded=${this.open}
                >
                    <slot name="header"></slot>
                </button>
                <div
                    class="overflow-hidden"
                    style="max-height: ${this.open ? '500px' : '0'}; ${this.open
                        ? 'transition: max-height 0.3s ease-in-out'
                        : ''}"
                >
                    <div class="p-4 bg-white">
                        <slot name="body"></slot>
                    </div>
                </div>
            </div>
        `;
    }

    static styles = unsafeCSS(style);
}
