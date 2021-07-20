import React from 'react'
import {render} from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';
//import { createRenderer } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';

test ('snapshot app', () => {
    const renderedComponent = renderer.create(<App />).toJSON()
    expect(renderedComponent).toMatchSnapshot();
})