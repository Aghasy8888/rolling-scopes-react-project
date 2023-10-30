export type ErrorBounderyState = {
  hasError: boolean;
};

export type ErrorBounderyProps = {
  fallback: string;
  children: React.ReactNode;
};
