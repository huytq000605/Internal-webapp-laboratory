import React from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { cache } from 'App';

function customRender<T>(
    ui: React.ReactElement,
    mockData?: MockedResponse<T>[],
    options?: RenderOptions
): RenderResult {
    const AllTheProviders: React.FC = ({ children }) => {
        if (mockData) {
            return (
                <MockedProvider mocks={mockData}>
                    <MemoryRouter>{children}</MemoryRouter>
                </MockedProvider>
            );
        }

        return (
            <MockedProvider cache={cache}>
                <MemoryRouter>{children}</MemoryRouter>
            </MockedProvider>
        );
    };
    return render(ui, { wrapper: AllTheProviders, ...options });
}

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
