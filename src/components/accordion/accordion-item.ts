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
                    class="w-full text-left px-4 py-3 font-medium bg-gray-100 hover:bg-gray-200 flex items-center justify-between"
                    aria-expanded=${this.open}
                >
                    <slot name="header"></slot>
                    <svg
                        class="w-4 h-4 transition-transform duration-300 transform ${this
                            .open
                            ? 'rotate-45'
                            : 'rotate-0'}"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 4v16m8-8H4"
                        ></path>
                    </svg>
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
