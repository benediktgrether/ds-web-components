// ds-grid.ts
import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit-html/directives/class-map.js';
import style from '@css/main.css';

@customElement('ds-grid')
export class DSGrid extends LitElement {
    @property({ type: String }) columns = '1'; // Default
    @property({ type: String }) gap = '4';

    render() {
        const classes = {
            [`grid gap-${this.gap} grid-cols-${this.columns}`]: true,
        };

        return html`
            <div class=${classMap(classes)}>
                <slot></slot>
            </div>
        `;
    }

    static styles = unsafeCSS(style);
}
