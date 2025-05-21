import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, queryAssignedElements } from 'lit/decorators.js';
import style from '@css/main.css';

@customElement('ds-accordion')
export class DSAccordion extends LitElement {
    @queryAssignedElements({ selector: 'ds-accordion-item' })
    items!: NodeListOf<HTMLElement>;

    firstUpdated() {
        const first = this.items[0] as any;
        if (first) first.open = true;

        this.addEventListener('accordion-toggle', (event: Event) => {
            const target = event.target as any;
            this.items.forEach((item: any) => {
                item.open = item === target;
            });
        });
    }

    render() {
        return html`<div class="border border-gray-300 rounded-md divide-y">
            <slot></slot>
        </div>`;
    }

    static styles = unsafeCSS(style);
}
