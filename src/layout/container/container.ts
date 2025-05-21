import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit-html/directives/class-map.js';
import style from '@css/main.css';

@customElement('ds-container')
export class DSContainer extends LitElement {
    render() {
        const classes = {
            'container mx-auto': true,
        };

        return html`
            <div class=${classMap(classes)}>
                <slot></slot>
            </div>
        `;
    }

    static styles = unsafeCSS(style);
}
