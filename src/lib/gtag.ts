export const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ""

type GaEventProps = {
  action: string
  category: string
  label: string
  value?: number
}


export const pageview = (path: string) => {
  window.gtag('config', GA_ID, {
    page_path: path,
  })
}

export const event = ({action, category, label, value}: GaEventProps) => {
  if (!GA_ID) {
    return
  }

  window.gtag('event', action, {
    event_category: category,
    event_label: JSON.stringify(label),
    value: value,
  })
}