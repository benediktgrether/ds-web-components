import { html } from 'lit-html';
import './accordion';
import './accordion-item';

export default {
    title: 'Components/Accordion',
    component: 'ds-accordion',
};

export const Default = () => html`
    <ds-accordion>
        <ds-accordion-item>
            <div slot="header">Section 1</div>
            <div slot="body">This is the content of section 1.</div>
        </ds-accordion-item>
        <ds-accordion-item>
            <div slot="header">Section 2</div>
            <div slot="body">This is the content of section 2.</div>
        </ds-accordion-item>
        <ds-accordion-item>
            <div slot="header">Section 3</div>
            <div slot="body">This is the content of section 3.</div>
        </ds-accordion-item>
    </ds-accordion>
`;