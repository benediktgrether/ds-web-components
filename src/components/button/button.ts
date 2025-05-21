import { LitElement, html,unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit-html/directives/class-map.js';
import style from '../../css/main.css';

@customElement('ds-button')
export class DSButton extends LitElement {

    @property({ type: String, reflect: true })
    variant: 'primary' | 'secondary' = 'primary';

    render() {
        const { variant } = this;

        const buttonClasses = {
            'px-4 py-2 rounded text-white font-medium': true,
            'bg-blue-600 hover:bg-blue-700': variant === 'primary',
            'bg-gray-600 hover:bg-gray-700': variant === 'secondary',
        };

        return html`
            <button class=${classMap(buttonClasses)}>
                <slot></slot>
            </button>
        `;
    }
    static styles = unsafeCSS(style);
}