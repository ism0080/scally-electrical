/* eslint-disable camelcase */
/* global Gtag */
import Router from 'next/router'
import React, { useEffect } from 'react'

import { EventActions } from '@/lib/google-analytics'
import * as gtag from '@/lib/google-analytics'

type ITrackingContext = {
  logEvent: (action: EventActions, { event_category, event_label, value }: Gtag.EventParams) => void
}

const TrackingContext = React.createContext<ITrackingContext>({
  logEvent: () => {}
})

const TrackingProvider = (props: any) => {
  const handleRouteChange = (url: URL) => {
    gtag.pageView(url)
  }

  // We'll define our logEvent function before useEffect
  const logEvent = (action: EventActions, { event_category, event_label, value }: Gtag.EventParams) => {
    gtag.event(action, { event_category, event_label, value })
  }

  // We only want to initialize GA on the client side
  // This will fail if you're trying to initialize server side
  // useEffect will help us handle this case as it only runs
  // client side

  useEffect(() => {
    // Handle all route changes
    Router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      // clean up
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [Router.events])

  return <TrackingContext.Provider value={{ logEvent }} {...props} />
}

const useTracking = () => React.useContext(TrackingContext)

export { TrackingProvider, useTracking }
