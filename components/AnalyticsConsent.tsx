'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'

const consentStorageKey = 'portfolio-analytics-consent'
const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
const validMeasurementId = measurementId && /^G-[A-Z0-9]+$/.test(measurementId)

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

export default function AnalyticsConsent() {
  const [consent, setConsent] = useState<'accepted' | 'declined' | null>(null)
  const [ready, setReady] = useState(false)
  const [showBanner, setShowBanner] = useState(false)
  const [storageWarning, setStorageWarning] = useState(false)

  useEffect(() => {
    try {
      const savedConsent = localStorage.getItem(consentStorageKey)
      if (savedConsent === 'accepted' || savedConsent === 'declined') {
        setConsent(savedConsent)
      } else {
        setShowBanner(true)
      }
    } catch {
      setStorageWarning(true)
      setShowBanner(true)
    }

    setReady(true)

    const openPreferences = () => setShowBanner(true)
    window.addEventListener('open-analytics-consent', openPreferences)
    return () => window.removeEventListener('open-analytics-consent', openPreferences)
  }, [])

  const saveConsent = (nextConsent: 'accepted' | 'declined') => {
    setConsent(nextConsent)
    setShowBanner(false)

    try {
      localStorage.setItem(consentStorageKey, nextConsent)
    } catch {
      setStorageWarning(true)
    }

    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: nextConsent === 'accepted' ? 'granted' : 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
      })
    }
  }

  return (
    <>
      {ready && consent === 'accepted' && (
        <>
          <Analytics />
          {validMeasurementId && (
            <>
              <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
                strategy="afterInteractive"
              />
              <Script id="google-analytics" strategy="afterInteractive">
                {`
                  window.dataLayer = window.dataLayer || [];
                  window.gtag = function(){window.dataLayer.push(arguments);};
                  window.gtag('js', new Date());
                  window.gtag('consent', 'default', {
                    analytics_storage: 'granted',
                    ad_storage: 'denied',
                    ad_user_data: 'denied',
                    ad_personalization: 'denied'
                  });
                  window.gtag('config', '${measurementId}', { anonymize_ip: true });
                `}
              </Script>
            </>
          )}
        </>
      )}

      {ready && showBanner && (
        <aside
          aria-label="Préférences de mesure d’audience"
          className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-3xl rounded-xl border border-gray-700 bg-gray-950 p-5 text-gray-100 shadow-2xl"
        >
          <p className="text-sm leading-6">
            Ce site utilise Vercel Analytics et, si configuré, Google Analytics
            pour mesurer son audience. Ces outils ne sont activés qu’après votre
            accord. Vous pouvez modifier votre choix depuis le pied de page.
          </p>
          {storageWarning && (
            <p role="status" className="mt-2 text-sm text-amber-300">
              Le navigateur ne permet pas d’enregistrer votre choix; il ne sera
              conservé que pendant cette visite.
            </p>
          )}
          <div className="mt-4 flex flex-wrap justify-end gap-3">
            <button
              type="button"
              onClick={() => saveConsent('declined')}
              className="rounded-lg border border-gray-600 px-4 py-2 text-sm hover:bg-gray-800"
            >
              Refuser
            </button>
            <button
              type="button"
              onClick={() => saveConsent('accepted')}
              className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-500"
            >
              Accepter
            </button>
          </div>
        </aside>
      )}

      {ready && storageWarning && !showBanner && (
        <p
          role="status"
          className="fixed bottom-4 right-4 z-50 max-w-sm rounded-lg border border-amber-700 bg-gray-950 p-3 text-sm text-amber-200 shadow-xl"
        >
          Le navigateur ne peut pas mémoriser votre choix; il ne vaut que pour
          cette visite.
        </p>
      )}
    </>
  )
}
