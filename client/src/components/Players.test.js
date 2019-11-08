import React from "react";
import Players from "./Players";
import { render } from '@testing-library/react';

test('renders properly', ()=>{
    render (<Players/>)
})

test('shows country', ()=> {
    const { getByText } = render(<Players/>);

    getByText(/country/i);
} )

test('shows searches', ()=> {
    const { getByText } = render(<Players/>);

    getByText(/searches/i);
} )

test('shows playerID', ()=> {
    const { getByText } = render(<Players/>);

    getByText(/id/i);
} )