import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit-html/directives/class-map.js';
import style from '@css/main.css';

@customElement('ds-text')
export class DSText extends LitElement {
    render() {
        const classes = {
            'text-base max-w-3xl': true,
        };

        return html`
            <p class=${classMap(classes)}>
                <slot></slot>
            </p>
        `;
    }

    static styles = unsafeCSS(style);
}
