export function getRoute(pathname) {
  const cityMatch = pathname.match(/^\/properties\/([^/]+)\/?$/)

  if (cityMatch) {
    return {
      name: 'city-properties',
      citySlug: cityMatch[1]
    }
  }

  return {
    name: 'home'
  }
}
