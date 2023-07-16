import { GOOGLE_ANALYTICS_ID } from './keys';

// Analytics
export const pageview = (url) => {
    window.gtag('config', GOOGLE_ANALYTICS_ID, {
      page_path: url,
    })
  }
  
  // https://developers.google.com/analytics/devguides/collection/gtagjs/events
  export const event = ({ action, category, label, value }) => {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
  