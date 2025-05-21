import { LitElement, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit-html/directives/class-map.js';
import { unsafeStatic } from 'lit/static-html.js';
import { html as staticHtml } from 'lit/static-html.js';
import style from '@css/main.css';

@customElement('ds-headline')
export class DSHeadline extends LitElement {
    @property({ type: String, reflect: true })
    level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h1';

    @property({ type: String, reflect: true })
    size: 'small' | 'medium' | 'large' = 'medium';

    render() {
        const tag = unsafeStatic(this.level); // Converts string to static tag name
        const classes = {
            'ds-headline': true,
            [`ds-headline--${this.size}`]: true,
        };

        return staticHtml`<${tag} class=${classMap(
            classes
        )}><slot></slot></${tag}>`;
    }

    static styles = unsafeCSS(style);
}
