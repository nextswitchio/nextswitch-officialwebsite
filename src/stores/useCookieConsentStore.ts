import { create } from "zustand"
import type { CookieConsentPreferences } from "@/lib/cookieConsent"
import { getCookieConsent, setCookieConsent } from "@/lib/cookieConsent"

interface CookieConsentState {
  showBanner: boolean
  showDetails: boolean
  preferences: CookieConsentPreferences | null
  init: () => void
  acceptAll: () => void
  acceptSelection: (analytics: boolean, marketing: boolean) => void
  rejectAll: () => void
  setShowDetails: (show: boolean) => void
}

export const useCookieConsentStore = create<CookieConsentState>((set) => ({
  showBanner: false,
  showDetails: false,
  preferences: null,

  init: () => {
    const existing = getCookieConsent()
    if (!existing) {
      set({ showBanner: true })
    } else {
      set({ preferences: existing })
    }
  },

  acceptAll: () => {
    const preferences = setCookieConsent(true, true)
    set({
      showBanner: false,
      showDetails: false,
      preferences,
    })
  },

  acceptSelection: (analytics: boolean, marketing: boolean) => {
    const preferences = setCookieConsent(analytics, marketing)
    set({
      showBanner: false,
      showDetails: false,
      preferences,
    })
  },

  rejectAll: () => {
    const preferences = setCookieConsent(false, false)
    set({
      showBanner: false,
      showDetails: false,
      preferences,
    })
  },

  setShowDetails: (show: boolean) => {
    set({ showDetails: show })
  },
}))
