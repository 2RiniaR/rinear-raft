import React from "react";

export type ClassedParams<T = {}> = T & { className?: string };

export function assignClasses(...values: string[]): string {
  return values.join(" ");
}

export function getComponentTemplate<T = {}>(
  body: (params: React.PropsWithChildren<T>) => JSX.Element
): React.FC<ClassedParams<T>> {
  return function Template({ className, ...params }: ClassedParams<React.PropsWithChildren<T>>): JSX.Element {
    const typeParams = params as React.PropsWithChildren<T>;
    return <div className={className}>{body(typeParams)}</div>;
  };
}
