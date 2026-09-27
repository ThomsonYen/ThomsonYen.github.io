// Page-view counter backed by Abacus (abacus.jasoncameron.dev), a free counter API.
const API = 'https://abacus.jasoncameron.dev'
const NAMESPACE = 'thomsonyen-github-io'

const isLocal = ['localhost', '127.0.0.1'].includes(location.hostname)

// Adds one view for `key`. Skipped in local dev so testing doesn't inflate the count.
export function countView(key: string) {
  if (isLocal) return
  fetch(`${API}/hit/${NAMESPACE}/${key}`, { keepalive: true }).catch(() => {})
}

// Current view count for `key`; 0 if the page has never been counted.
export async function getViews(key: string): Promise<number> {
  const res = await fetch(`${API}/get/${NAMESPACE}/${key}`)
  if (res.status === 404) return 0
  if (!res.ok) throw new Error(`Abacus returned ${res.status}`)
  return (await res.json()).value
}
