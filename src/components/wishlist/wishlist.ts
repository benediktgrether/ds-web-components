import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import style from './wishlist.css';

@customElement('wishlist-component')
export class WishlistComponent extends LitElement {
    @property({ type: Boolean }) liked = false;

    toggleLike() {
        this.liked = !this.liked;
    }

    render() {
        return html`
            <button class="wishlist-button" @click="${this.toggleLike}" aria-label="Toggle Wishlist">
                ${this.liked ? this.renderFilledHeart() : this.renderOutlinedHeart()}
            </button>
        `;
    }

    renderFilledHeart() {
        return html`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.02 14.73">
                <path
                    d="M7.83,2.66s2.28-3.35,5.34-1.71c1.9,1.02,2.42,2.78,2.34,4.44-.18,3.58-4.88,8.68-6.98,8.83S1.17,9.54.63,6.32,1.32,1.88,2.49,1.1s3.22-.29,5.34,1.56Z"
                    fill="#ed1c24"
                    stroke="#ed1c24"
                    stroke-miterlimit="10"
                />
            </svg>
        `;
    }

    renderOutlinedHeart() {
        return html`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.01 14.73">
                <path
                    fill="#fff"
                    stroke="#ed1c24"
                    stroke-miterlimit="10"
                    d="M7.82,2.66s2.28-3.35,5.34-1.71c1.9,1.02,2.42,2.78,2.34,4.44-.18,3.58-4.88,8.68-6.98,8.83S1.16,9.54.62,6.32,1.31,1.88,2.48,1.1s3.22-.29,5.34,1.56Z"
                />
            </svg>
        `;
    }

    static styles = unsafeCSS(style);
}