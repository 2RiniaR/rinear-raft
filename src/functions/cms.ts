export function preprocessCmsBody(body: string): string {
  return body.replaceAll("\\</p><p>", "\n");
}
