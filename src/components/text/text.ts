import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit-html/directives/class-map.js';
import style from '@css/main.css';

@customElement('ds-text')
export class DSText extends LitElement {
    @property({ type: String }) size = 'base';

    render() {
        switch (this.size) {
            case 'small':
                this.size = 'text-sm';
                break;
            case 'normal':
                this.size = 'text-base';
                break;
            case 'large':
                this.size = 'text-lg';
                break;
            case 'extra-large':
                this.size = 'text-xl';
                break;
        }

        const classes = {
            [`max-w-3xl ${this.size}`]: true,
        };

        return html`
            <p class=${classMap(classes)}>
                <slot></slot>
            </p>
        `;
    }

    static styles = unsafeCSS(style);
}
