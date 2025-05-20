import { LitElement, html,unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit-html/directives/class-map.js';
import style from './button.css';

@customElement('ds-button')
export class DSButton extends LitElement {

    @property({ type: String, reflect: true })
    variant: 'primary' | 'secondary' = 'primary';

    render() {
        const { variant } = this;

        const buttonClasses = {
            'ds-button': true,
            'ds-button--primary': variant === 'primary',
            'ds-button--secondary': variant === 'secondary',
        };

        return html`
            <button class=${classMap(buttonClasses)}>
                <slot></slot>
            </button>
        `;
    }
    static styles = unsafeCSS(style);
}