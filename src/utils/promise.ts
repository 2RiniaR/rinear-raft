export async function mapAsync<T, U>(items: T[], mapper: (item: T) => Promise<U>) {
  return Promise.all(items.map((item) => mapper(item)));
}
