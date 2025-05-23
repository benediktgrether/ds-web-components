import { html } from 'lit-html';
import './text';

export default {
    title: 'Components/Text',
    component: 'ds-text',
    argTypes: {},
};

export const TextDefault = () => {
    return html`
        <ds-text
            >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            quia doloribus similique fugiat voluptate nulla quaerat nesciunt
            illum nam delectus consequuntur illo, temporibus modi fugit saepe.
            Provident eaque vero dignissimos.</ds-text
        >
    `;
};

export const TextSmall = () => {
    return html`
        <ds-text size="small"
            >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            quia doloribus similique fugiat voluptate nulla quaerat nesciunt
            illum nam delectus consequuntur illo, temporibus modi fugit saepe.
            Provident eaque vero dignissimos.</ds-text
        >
    `;
};
export const TextNormal = () => {
    return html`
        <ds-text size="normal"
            >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            quia doloribus similique fugiat voluptate nulla quaerat nesciunt
            illum nam delectus consequuntur illo, temporibus modi fugit saepe.
            Provident eaque vero dignissimos.</ds-text
        >
    `;
};
export const TextLarge = () => {
    return html`
        <ds-text size="large"
            >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            quia doloribus similique fugiat voluptate nulla quaerat nesciunt
            illum nam delectus consequuntur illo, temporibus modi fugit saepe.
            Provident eaque vero dignissimos.</ds-text
        >
    `;
};
export const TextExtraLarge = () => {
    return html`
        <ds-text size="extra-large"
            >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            quia doloribus similique fugiat voluptate nulla quaerat nesciunt
            illum nam delectus consequuntur illo, temporibus modi fugit saepe.
            Provident eaque vero dignissimos.</ds-text
        >
    `;
};
