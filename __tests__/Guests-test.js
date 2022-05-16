import React from "react";
import { render, fireEvent } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import Guests from "../src/screens/Guests";

describe('<Guests/>', () => {
    it('adds and removes adults', () => {
        const { getByTestId } = render(<Guests />);
        const quantity = getByTestId('adultQuantity');

        const addButton = getByTestId('addAdult');
        fireEvent.press(addButton);
        expect(quantity).toHaveTextContent('1');

        const removeButton = getByTestId('removeAdult');
        fireEvent.press(removeButton);
        expect(quantity).toHaveTextContent('0');

        fireEvent.press(removeButton);
        expect(quantity).toHaveTextContent('0');
    });

    it('adds and removes children', () => {
        const { getByTestId } = render(<Guests />);
        const quantity = getByTestId('childQuantity');

        const addButton = getByTestId('addChild');
        fireEvent.press(addButton);
        expect(quantity).toHaveTextContent('1');

        const removeButton = getByTestId('removeChild');
        fireEvent.press(removeButton);
        expect(quantity).toHaveTextContent('0');

        fireEvent.press(removeButton);
        expect(quantity).toHaveTextContent('0');
    });

    it('adds and removes infants', () => {
        const { getByTestId } = render(<Guests />);
        const quantity = getByTestId('infantQuantity');

        const addButton = getByTestId('addInfant');
        fireEvent.press(addButton);
        expect(quantity).toHaveTextContent('1');

        const removeButton = getByTestId('removeInfant');
        fireEvent.press(removeButton);
        expect(quantity).toHaveTextContent('0');

        fireEvent.press(removeButton);
        expect(quantity).toHaveTextContent('0');
    });
});