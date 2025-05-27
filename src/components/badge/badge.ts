import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit-html/directives/class-map.js';
import style from '@css/main.css';

@customElement('ds-badge')
export class DSBadge extends LitElement {
    @property({ type: String, reflect: true })
    variant:
        | 'primary'
        | 'secondary'
        | 'info'
        | 'success'
        | 'warning'
        | 'danger' = 'primary';

    render() {
        const { variant } = this;

        let classes = {
            'inline text-base px-2 py-1 rounded-full mx-1': true,
            [`bg-${variant}-default`]: true,
        };

        if (variant === 'warning' || variant === 'success') {
            classes = {
                ...classes,
                'text-black': true,
            };
        } else {
            classes = {
                ...classes,
                'text-white': true,
            };
        }
        return html`
            <div class=${classMap(classes)}>
                <slot></slot>
            </div>
        `;
    }

    static styles = unsafeCSS(style);
}
