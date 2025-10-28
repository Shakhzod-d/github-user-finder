const CACHE_EXPIRATION_MS = 1000 * 60 * 60;

export function setCache(key: string, data: unknown) {
  localStorage.setItem(key, JSON.stringify({ data, timestamp: Date.now() }));
}

export function getCache<T>(key: string): T | undefined {
  const cached = localStorage.getItem(key);
  if (!cached) return undefined;

  try {
    const { data, timestamp } = JSON.parse(cached);
    if (Date.now() - timestamp > CACHE_EXPIRATION_MS) {
      localStorage.removeItem(key);
      return undefined;
    }
    return data as T;
  } catch {
    return undefined;
  }
}
