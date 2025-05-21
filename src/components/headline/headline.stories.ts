import { html } from 'lit-html';
import './headline';

export default {
    title: 'Components/Headline',
    component: 'ds-headline',
};

export const Headline = () => {
    return html`
        <ds-headline level="h1">Headline h1</ds-headline>
        <ds-headline level="h2">Headline h2</ds-headline>
        <ds-headline level="h3">Headline h3</ds-headline>
        <ds-headline level="h4">Headline h4</ds-headline>
        <ds-headline level="h5">Headline h5</ds-headline>
        <ds-headline level="h6">Headline h6</ds-headline>
    `;
};
