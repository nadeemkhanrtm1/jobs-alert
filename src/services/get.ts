interface FetchOptions {
  endPoint: string;
  basePath?: string;
  queryParams?: Record<string, string>;
}

export const get = async <T>({
  basePath,
  endPoint,
  queryParams = {},
}: FetchOptions): Promise<T> => {
  const sanitizedEndpoint = endPoint.startsWith('/')
    ? endPoint.slice(1)
    : endPoint;
  const _basePath = basePath || process.env.NEXT_PUBLIC_BASE_URL;

  const queryString = new URLSearchParams(queryParams).toString();
  const url = `${_basePath}/${sanitizedEndpoint}${
    queryString ? `?${queryString}` : ''
  }`;

  try {
    const responseJson = await fetch(url);
    const response: T = await responseJson.json();
    return response;
  } catch (error) {
    throw new Error('Failed to fetch');
  }
};
