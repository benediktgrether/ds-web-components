import { html } from "lit-html";
import "./image";

export default {
    title: "Components/Image",
    component: "ds-image",
    argTypes: {
        src: {
            control: {
                type: "text",
            },
        },
        alt: {
            control: {
                type: "text",
            },
        },
    },
};
export const ImageDefault = ({ src, alt }: { src: string; alt: string }) => {
    return html`
        <ds-image src=${src} alt=${alt}></ds-image>
    `;
}
ImageDefault.args = {
    src: "https://picsum.photos/200/300",
    alt: "Placeholder Image",
};
