import { useSyncExternalStore } from 'react'

const STORAGE_KEY = 'audiris-cookie-consent'
const CONSENT_EVENT = 'audiris:consent'

export type Consent = 'accepted' | 'declined' | null

function subscribe(onChange: () => void) {
  window.addEventListener(CONSENT_EVENT, onChange)
  window.addEventListener('storage', onChange)
  return () => {
    window.removeEventListener(CONSENT_EVENT, onChange)
    window.removeEventListener('storage', onChange)
  }
}

const getSnapshot = () => localStorage.getItem(STORAGE_KEY) as Consent

// `undefined` = not known yet (server render / hydration), so nothing consent-dependent renders until the client reads storage.
const getServerSnapshot = () => undefined

export function useConsent(): Consent | undefined {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}

export function setConsent(value: Exclude<Consent, null>) {
  localStorage.setItem(STORAGE_KEY, value)
  window.dispatchEvent(new Event(CONSENT_EVENT))
}
