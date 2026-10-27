/* Hesap API istemcisi. Oturum HttpOnly çerezde; bu dosya yalnız istek atar. */
export class ApiError extends Error { constructor(message: string, public status: number, public body?: unknown) { super(message); } }

async function call<T>(method: string, path: string, data?: unknown): Promise<T> {
  let res: Response;
  try {
    res = await fetch(`/api/${path}`, {
      method, credentials: 'same-origin',
      headers: data !== undefined ? { 'content-type': 'application/json', 'x-netlik': '1' } : { 'x-netlik': '1' },
      body: data !== undefined ? JSON.stringify(data) : undefined
    });
  } catch { throw new ApiError('Sunucuya ulaşılamadı. İnternet bağlantını kontrol et.', 0); }
  const body = await res.json().catch(() => ({}));
  if (!res.ok) throw new ApiError((body as { error?: string }).error ?? 'Bir şeyler ters gitti.', res.status, body);
  return body as T;
}

export const api = {
  me: () => call<{ username: string }>('GET', 'ben'),
  register: (username: string, password: string) => call<{ username: string; recoveryCode: string }>('POST', 'kayit', { username, password }),
  login: (username: string, password: string) => call<{ username: string }>('POST', 'giris', { username, password }),
  logout: () => call<{ ok: true }>('POST', 'cikis', {}),
  reset: (username: string, recoveryCode: string, password: string) => call<{ username: string; recoveryCode: string }>('POST', 'sifre-sifirla', { username, recoveryCode, password }),
  changePassword: (oldPassword: string, password: string) => call<{ ok: true }>('POST', 'sifre', { oldPassword, password }),
  deleteAccount: (password: string) => call<{ ok: true }>('DELETE', 'hesap', { password }),
  getData: () => call<{ version: number; updatedAt: string | null; data: unknown }>('GET', 'veri'),
  putData: (baseVersion: number, data: unknown, force = false) => call<{ version: number; updatedAt: string }>('PUT', 'veri', { baseVersion, data, force })
};
