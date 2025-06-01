import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit-html/directives/class-map.js';
import style from '@css/main.css';

@customElement('ds-button')
export class DSButton extends LitElement {
    @property({ type: String, reflect: true }) variant:
        | 'primary'
        | 'secondary' = 'primary';

    @property({ type: String, reflect: true }) event = ''; // e.g., open, close, toggle
    @property({ type: String, reflect: true }) target = ''; // e.g., #myModal

    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('click', this._handleClick);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('click', this._handleClick);
    }

    private _handleClick = () => {
        const eventType = this.event;
        const targetSelector = this.target;

        if (!eventType || !targetSelector) return;

        const targetElement = document.querySelector(targetSelector);
        if (!targetElement) return;

        this._applyEventToTarget(eventType, targetElement);
    };

    private _applyEventToTarget(eventType: string, target: Element) {
        switch (eventType) {
            case 'open':
                target.setAttribute('open', 'true');
                break;
            case 'close':
                target.removeAttribute('open');
                break;
            case 'toggle':
                if (target.hasAttribute('open')) {
                    target.removeAttribute('open');
                } else {
                    target.setAttribute('open', 'true');
                }
                break;
            case 'show':
                target.classList.remove('hidden');
                break;
            case 'hide':
                target.classList.add('hidden');
                break;
            case 'toggle-class':
                target.classList.toggle('active');
                break;
            default:
                console.warn(`Unknown event type: ${eventType}`);
        }
    }

    render() {
        const buttonClasses = {
            'px-4 py-2 rounded text-white font-medium': true,
            'bg-blue-600 hover:bg-blue-700': this.variant === 'primary',
            'bg-gray-600 hover:bg-gray-700': this.variant === 'secondary',
        };

        return html`<button class=${classMap(buttonClasses)}>
            <slot></slot>
        </button>`;
    }

    static styles = unsafeCSS(style);
}
