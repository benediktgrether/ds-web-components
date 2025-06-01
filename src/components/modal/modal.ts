import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit-html/directives/class-map.js';
import style from '@css/main.css';

@customElement('ds-modal')
export class DSModal extends LitElement {
    @property({ type: String, reflect: true })
    title = '';

    @property({ type: String, reflect: true })
    content = '';

    @property({ type: Boolean, reflect: true })
    open = false;

    @property({ type: Boolean, reflect: true })
    closeOnOutsideClick = true;

    @property({ type: Boolean, reflect: true })
    closeOnEscape = true;

    private _boundEscapeHandler = this._handleEscapeKey.bind(this);

    connectedCallback() {
        super.connectedCallback();
        if (this.closeOnEscape) {
            document.addEventListener('keydown', this._boundEscapeHandler);
        }
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.closeOnEscape) {
            document.removeEventListener('keydown', this._boundEscapeHandler);
        }
    }

    private _closeModal() {
        this.open = false;
    }

    private _handleOverlayClick(event: MouseEvent) {
        if (this.closeOnOutsideClick && event.target === event.currentTarget) {
            this._closeModal();
        }
    }

    private _handleEscapeKey(event: KeyboardEvent) {
        if (this.open && event.key === 'Escape') {
            this._closeModal();
        }
    }

    render() {
        if (!this.open) {
            return html``;
        }

        return html`
            <div
                class="modal-overlay fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                @click=${this._handleOverlayClick}
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
                aria-describedby="modal-content"
            >
                <div
                    class="modal-content bg-white rounded shadow-lg max-w-lg w-full p-4 relative"
                >
                    <div
                        class="modal-header flex justify-between items-center mb-4"
                    >
                        <h2 id="modal-title" class="text-xl font-bold">
                            ${this.title}
                        </h2>
                        <button
                            class="close-button text-gray-500 hover:text-black text-2xl font-bold"
                            @click=${this._closeModal}
                            aria-label="Close modal"
                        >
                            ×
                        </button>
                    </div>
                    <div class="modal-body mb-4" id="modal-content">
                        <slot name="body">
                            <p>${this.content}</p>
                        </slot>
                    </div>
                    <div class="modal-footer text-right">
                        <slot name="footer">
                            <button
                                class="close-button bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
                                @click=${this._closeModal}
                            >
                                Close
                            </button>
                        </slot>
                    </div>
                </div>
            </div>
        `;
    }

    static styles = unsafeCSS(style);
}
