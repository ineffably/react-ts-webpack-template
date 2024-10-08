import React from 'react'
import { act, render, screen } from '@testing-library/react'
import { App } from '../src/components/app'
import { fetchMock } from './fetch-mock';
import '@testing-library/jest-dom'

// Link needs to be mocked
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Link: jest.fn().mockImplementation(({ children }) => children)
}));

describe('Basic tests', () => {
  const testData = {
    data: [{
      _id: '1',
      name: 'Mickey Mouse'
    }, {
      _id: '2',
      name: 'Donald Duck'
    }]
  };
  window.fetch = fetchMock({ json: {} });
  const state = { isLoaded: false };
  const dispatch = jest.fn();
  let realUseContext;
  let useContextMock;
  
  beforeEach(() => {
    realUseContext = React.useContext;
    useContextMock = React.useContext = jest.fn();
  });

  afterEach(() => {
    React.useContext = realUseContext;
    jest.resetAllMocks();
    window.fetch = fetchMock({ json: {} });
  });

  it('should render', async () => {
    useContextMock.mockReturnValue({ state, dispatch })
    window.fetch = fetchMock({ json: testData });

    await act( async () => render(<App/>));
    expect(screen.getByText('App Goes Here')).toBeInTheDocument();
  });

});
