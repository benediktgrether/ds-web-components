import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import style from '@css/main.css';

@customElement('ds-accordion-item')
export class DSAccordionItem extends LitElement {
    @property({ type: String }) title = '';
    @property({ type: Boolean, reflect: true }) open = false;

    toggle() {
        this.dispatchEvent(
            new CustomEvent('accordion-toggle', {
                detail: { title: this.title },
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
                    ${this.title}
                </button>
                <div
                    class="transition-[max-height] duration-300 overflow-hidden"
                    style="max-height: ${this.open ? '500px' : '0'}"
                >
                    <div class="p-4 bg-white">
                        <slot></slot>
                    </div>
                </div>
            </div>
        `;
    }

    static styles = unsafeCSS(style);
}
