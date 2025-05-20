import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit-html/directives/class-map.js";
import style from "./image.css";

@customElement("ds-image")
export class DSImage extends LitElement {
    @property({ type: String, reflect: true })
    src: string = "";

    @property({ type: String, reflect: true })
    alt: string = "";

    render() {
        const { src, alt } = this;

        const imageClasses = {
            "ds-image": true,
        };

        return html`
            <img class=${classMap(imageClasses)} src=${src} alt=${alt} />
        `;
    }
    static styles = unsafeCSS(style);
}