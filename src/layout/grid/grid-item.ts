import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit-html/directives/class-map.js';
import style from '@css/main.css';

@customElement('ds-grid-item')
export class DSGridItem extends LitElement {
    @property({ type: String }) gap = '0'; // Default

    render() {
        const classes = {
            [`flex flex-col gap-y-${this.gap}`]: true,
        };

        return html`
            <div class=${classMap(classes)}>
                <slot></slot>
            </div>
        `;
    }

    static styles = unsafeCSS(style);
}
