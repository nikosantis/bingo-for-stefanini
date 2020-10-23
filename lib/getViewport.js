const isClient = typeof window !== 'undefined'

export function getViewport () {
  if (!isClient) {
    return {}
  }

  return {
    height: window.innerHeight || document.documentElement.offsetHeight,
    width: window.innerWidth || document.documentElement.offsetWidth
  }
}
