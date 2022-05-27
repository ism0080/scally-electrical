/* eslint-disable camelcase */
/* global Gtag */
// ToDo: Add Tracking ID
export const GA_TRACKING_ID = 'UA-197582144-1'

export type EventActions = Gtag.EventNames

export const pageView = (url: URL) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url
  })
}

export const event = (action: EventActions, { event_category, event_label, value }: Gtag.EventParams) => {
  window.gtag('event', action, {
    event_category,
    event_label,
    value
  })
}
