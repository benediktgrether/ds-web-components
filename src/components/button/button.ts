import { LitElement, html,unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import style from './button.css';

@customElement('ds-button')
export class DSButton extends LitElement {

    render() {
        return html`
            <button class="ds-button ds-button--primary">
                <slot></slot>
            </button>
        `;
    }
    static styles = unsafeCSS(style);
}