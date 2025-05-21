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
            "text-4xl md:text-5xl lg:text-6xl font-bold" : this.level === 'h1',
            "text-3xl md:text-4xl lg:text-5xl font-bold" : this.level === 'h2',
            "text-2xl md:text-3xl lg:text-4xl font-semibold" : this.level === 'h3',
            "text-xl md:text-2xl lg:text-3xl font-semibold" : this.level === 'h4',
            "text-lg md:text-xl lg:text-2xl font-medium" : this.level === 'h5',
            "text-base md:text-lg lg:text-xl font-medium" : this.level === 'h6',
        }

        return staticHtml`<${tag} class=${classMap(
            classes
        )}><slot></slot></${tag}>`;
    }

    static styles = unsafeCSS(style);
}
