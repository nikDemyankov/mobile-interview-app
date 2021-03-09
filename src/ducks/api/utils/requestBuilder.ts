import base64 from 'base-64';

enum HTTP {
  GET = 'GET',
  POST = 'POST',
}

type Payload = string | Record<string, unknown> | undefined;
type Options = {
  session?: string;
  payload?: Payload;
};

type HeadersType = Record<string, string>;

const contentTypeHeader = (payload?: Payload) => {
  if (typeof payload === 'string') {
    return 'application/x-www-form-urlencoded; charset=utf-8';
  }
  return 'application/json';
};

const authorizationHeader = (session: string) => {
  const authString = base64.encode(`${session}:${session}`);

  return `Basic ${authString}`;
};

const requestHeaders = ({ session, payload }: Options) => {
  const headersObj: HeadersType = {
    Accept: 'application/json',
    'Accept-Language': 'sv',
    'Content-Type': contentTypeHeader(payload),
  };

  if (session) {
    headersObj.Authorization = authorizationHeader(session);
  }

  return new Headers(headersObj);
};

const requestBody = (payload: Payload) => {
  if (!payload) {
    return null;
  }

  if (typeof payload === 'string') {
    return payload;
  }

  return JSON.stringify(payload);
};

const constructRequest = (method: HTTP, options: Options) => {
  const headers = requestHeaders(options);
  const body = requestBody(options.payload);
  const request = body
    ? {
        method,
        body,
        headers,
      }
    : {
        method,
        headers,
      };

  return request;
};

export default {
  get: (options: Options) => constructRequest(HTTP.GET, options),
  post: (options: Options) => constructRequest(HTTP.POST, options),
};
