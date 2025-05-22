import { html } from 'lit-html';
import './grid'; // ds-grid
import './grid-item'; // ds-grid-item
import '@components/headline'; // ds-headline
import '@components/text'; // ds-text

export default {
    title: 'layout/Grid',
    component: 'ds-grid',
    argTypes: {
        columns: {
            control: 'select',
            options: ['1', '2', '3', '4', '6', '12'],
            description: 'Number of columns (e.g. grid-cols-4)',
            defaultValue: '4',
        },
        gap: {
            control: 'select',
            options: ['0', '1', '2', '4', '6', '8', '10'],
            description: 'Gap between items (e.g. gap-4)',
            defaultValue: '8',
        },
    },
    args: {
        columns: '4',
        gap: '8',
    },
};

type GridArgs = {
    columns: string;
    gap: string;
};

export const GridFourColumns = ({ columns, gap }: GridArgs) => html`
    <ds-grid columns=${columns} gap=${gap}>
        <ds-grid-item colSpan="col-span-1">
            <ds-headline level="h3">Headline</ds-headline>
            <ds-text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                quia doloribus similique fugiat voluptate nulla.
            </ds-text>
        </ds-grid-item>
        <ds-grid-item colSpan="col-span-1">
            <ds-headline level="h3">Headline</ds-headline>
            <ds-text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                quia doloribus similique fugiat voluptate nulla.
            </ds-text>
        </ds-grid-item>
        <ds-grid-item colSpan="col-span-1">
            <ds-headline level="h3">Headline</ds-headline>
            <ds-text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                quia doloribus similique fugiat voluptate nulla.
            </ds-text>
        </ds-grid-item>
        <ds-grid-item colSpan="col-span-1">
            <ds-headline level="h3">Headline</ds-headline>
            <ds-text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                quia doloribus similique fugiat voluptate nulla.
            </ds-text>
        </ds-grid-item>
    </ds-grid>
`;
