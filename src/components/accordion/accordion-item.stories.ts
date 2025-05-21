import { html } from 'lit-html';
import './accordion-item';

export default {
    title: 'Components/Accordion Item',
    component: 'ds-accordion-item',
};

export const Default = () => html`
    <ds-accordion-item open>
        <div slot="header">Sample Header</div>
        <div slot="body">This is the content of the accordion item.</div>
    </ds-accordion-item>
`;