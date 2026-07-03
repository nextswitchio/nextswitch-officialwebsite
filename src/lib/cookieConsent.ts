export type CookieCategory = "necessary" | "analytics" | "marketing"

export interface CookieConsentPreferences {
  necessary: true
  analytics: boolean
  marketing: boolean
  updatedAt: string
}

const STORAGE_KEY = "nextswitch-cookie-consent"

export function getCookieConsent(): CookieConsentPreferences | null {
  if (typeof window === "undefined") return null
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw) as CookieConsentPreferences
  } catch {
    return null
  }
}

export function setCookieConsent(
  analytics: boolean,
  marketing: boolean,
): CookieConsentPreferences {
  const preferences: CookieConsentPreferences = {
    necessary: true,
    analytics,
    marketing,
    updatedAt: new Date().toISOString(),
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences))
  applyConsent(preferences)
  return preferences
}

export function hasConsented(): boolean {
  return getCookieConsent() !== null
}

export function applyConsent(preferences: CookieConsentPreferences) {
  if (preferences.analytics) {
    enableAnalytics()
  } else {
    disableAnalytics()
  }
  if (preferences.marketing) {
    enableMarketing()
  } else {
    disableMarketing()
  }
}

function enableAnalytics() {
  document.cookie =
    "_ga=; path=/; max-age=31536000; SameSite=Lax"
}

function disableAnalytics() {
  document.cookie =
    "_ga=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax"
}

function enableMarketing() {
  document.cookie =
    "_gads=; path=/; max-age=31536000; SameSite=Lax"
}

function disableMarketing() {
  document.cookie =
    "_gads=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax"
}

export function getCookieCategories() {
  return [
    {
      id: "necessary" as const,
      title: "Necessary",
      description:
        "Essential for the website to function properly. These cannot be disabled.",
      required: true,
    },
    {
      id: "analytics" as const,
      title: "Analytics",
      description:
        "Help us understand how visitors interact with our website so we can improve it.",
      required: false,
    },
    {
      id: "marketing" as const,
      title: "Marketing",
      description:
        "Used to deliver relevant advertisements and track campaign effectiveness.",
      required: false,
    },
  ]
}
