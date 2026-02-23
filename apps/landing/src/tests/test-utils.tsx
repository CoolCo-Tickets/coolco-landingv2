import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render as rtlRender, RenderOptions } from '@testing-library/react';
import { MemoryRouter, MemoryRouterProps } from 'react-router-dom';
import { ReactElement, ReactNode } from 'react';

const defaultQueryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: false },
  },
});

interface WrapperOptions {
  queryClient?: QueryClient;
  routerProps?: MemoryRouterProps;
}

function createWrapper(options: WrapperOptions = {}) {
  const { queryClient = defaultQueryClient, routerProps = {} } = options;

  return function Wrapper({ children }: { children: ReactNode }): ReactElement {
    return (
      <QueryClientProvider client={queryClient}>
        <MemoryRouter {...routerProps}>{children}</MemoryRouter>
      </QueryClientProvider>
    );
  };
}

export function render(
  ui: ReactElement,
  options: RenderOptions & WrapperOptions = {}
): ReturnType<typeof rtlRender> {
  const { queryClient, routerProps, ...renderOptions } = options;
  const Wrapper = createWrapper({ queryClient, routerProps });
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

