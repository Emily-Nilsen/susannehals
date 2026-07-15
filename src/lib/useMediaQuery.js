import { useCallback, useSyncExternalStore } from 'react'

// Returns null until hydration completes, then true/false. The null pass
// matters: it keeps every video `src` out of the server-rendered HTML, so the
// browser cannot start fetching a video before we know which one it needs.
export function useMediaQuery(query) {
  const subscribe = useCallback(
    (onChange) => {
      const list = window.matchMedia(query)
      list.addEventListener('change', onChange)
      return () => list.removeEventListener('change', onChange)
    },
    [query]
  )

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => null
  )
}
