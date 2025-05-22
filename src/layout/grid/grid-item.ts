import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import style from '@css/main.css';

@customElement('ds-grid-item')
export class DSGridItem extends LitElement {
    render() {
        return html`
            <div class="">
                <slot></slot>
            </div>
        `;
    }

    static styles = unsafeCSS(style);
}
