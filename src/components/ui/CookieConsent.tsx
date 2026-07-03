"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { useCookieConsentStore } from "@/stores/useCookieConsentStore"
import { getCookieCategories } from "@/lib/cookieConsent"

export default function CookieConsent() {
  const {
    showBanner,
    showDetails,
    init,
    acceptAll,
    acceptSelection,
    rejectAll,
    setShowDetails,
  } = useCookieConsentStore()

  const [analytics, setAnalytics] = useState(false)
  const [marketing, setMarketing] = useState(false)

  useEffect(() => {
    init()
  }, [init])

  if (!showBanner) return null

  const categories = getCookieCategories()

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
      >
        <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-zinc-900/95 backdrop-blur-xl p-6 shadow-2xl">
          {!showDetails ? (
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex-1">
                <p className="text-sm text-white/80">
                  We use cookies to enhance your experience. By continuing, you agree to our{" "}
                  <a
                    href="/cookies"
                    className="underline underline-offset-2 hover:text-white transition-colors"
                  >
                    Cookie Policy
                  </a>
                  .
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => setShowDetails(true)}
                  className="text-xs text-white/50 hover:text-white/70 transition-colors"
                >
                  Customize
                </button>
                <button
                  onClick={rejectAll}
                  className="rounded-lg border border-white/10 px-4 py-2 text-xs font-medium text-white/70 hover:bg-white/5 transition-colors"
                >
                  Reject All
                </button>
                <button
                  onClick={acceptAll}
                  className="rounded-lg bg-white px-4 py-2 text-xs font-medium text-black hover:bg-zinc-200 transition-colors"
                >
                  Accept All
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-base font-semibold text-white">
                    Cookie Preferences
                  </h3>
                  <p className="mt-1 text-sm text-white/50">
                    Manage which cookies we use on this site.
                  </p>
                </div>
                <button
                  onClick={() => setShowDetails(false)}
                  className="text-white/30 hover:text-white/70 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="space-y-3">
                {categories.map((cat) => (
                  <label
                    key={cat.id}
                    className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4 cursor-pointer"
                  >
                    <div className="flex h-5 items-center">
                      {cat.required ? (
                        <div className="h-4 w-4 rounded-full bg-white/20 flex items-center justify-center">
                          <div className="h-2 w-2 rounded-full bg-white/50" />
                        </div>
                      ) : (
                        <input
                          type="checkbox"
                          checked={cat.id === "analytics" ? analytics : marketing}
                          onChange={() => {
                            if (cat.id === "analytics") setAnalytics(!analytics)
                            if (cat.id === "marketing") setMarketing(!marketing)
                          }}
                          className="h-4 w-4 rounded border-white/20 bg-white/5 accent-white"
                        />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-white">
                          {cat.title}
                        </span>
                        {cat.required && (
                          <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-white/40">
                            Required
                          </span>
                        )}
                      </div>
                      <p className="mt-0.5 text-xs text-white/40">
                        {cat.description}
                      </p>
                    </div>
                  </label>
                ))}
              </div>

              <div className="flex items-center justify-end gap-3">
                <button
                  onClick={rejectAll}
                  className="rounded-lg border border-white/10 px-4 py-2 text-xs font-medium text-white/70 hover:bg-white/5 transition-colors"
                >
                  Reject All
                </button>
                <button
                  onClick={() => acceptSelection(analytics, marketing)}
                  className="rounded-lg bg-white px-4 py-2 text-xs font-medium text-black hover:bg-zinc-200 transition-colors"
                >
                  Save Preferences
                </button>
                <button
                  onClick={acceptAll}
                  className="rounded-lg bg-white px-4 py-2 text-xs font-medium text-black hover:bg-zinc-200 transition-colors"
                >
                  Accept All
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
