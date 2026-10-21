'use client'

export default function AnalyticsPreferencesButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event('open-analytics-consent'))}
      className="mt-3 text-sm text-gray-400 underline underline-offset-4 hover:text-white"
    >
      Préférences de confidentialité
    </button>
  )
}
