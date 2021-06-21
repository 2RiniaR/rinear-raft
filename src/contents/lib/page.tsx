export const getPageFromString = (page: string): JSX.Element => <div dangerouslySetInnerHTML={{ __html: page }} />;
export const Fallback = (): JSX.Element => <></>;
