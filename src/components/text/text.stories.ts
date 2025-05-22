import { html } from 'lit-html';
import './text';

export default {
    title: 'Components/Text',
    component: 'ds-text',
    argTypes: {},
};

export const Text = () => {
    return html` <ds-text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque quia doloribus similique fugiat
            voluptate nulla quaerat nesciunt illum nam delectus consequuntur illo, temporibus modi fugit saepe.
            Provident eaque vero dignissimos.</ds-text> `;
};
