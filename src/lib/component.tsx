export type ClassedParams<T = {}> = T & { className?: string };

export function assignClasses(...values: string[]): string {
  return values.join(" ");
}

export function getComponentTemplate<T = {}>(
  children: (params: T) => JSX.Element
): (params: ClassedParams<T>) => JSX.Element {
  return function Template({ className, ...params }: ClassedParams<T>): JSX.Element {
    const typeParams = params as T;
    return <div className={className}>{children(typeParams)}</div>;
  };
}
