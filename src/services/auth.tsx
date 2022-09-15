const LOCAL_STORAGE_AUTH_KEY = '_TEST_'

/**
 *
 * @returns {boolean} weather the user is authenticated or not
 */

export const isAuth = (): boolean => {
  let isAuth = false

  const token = getAuthTokens()
  if (token) {
    isAuth = token !== null
  }
  return isAuth
}

/**
 * Clears auth tokens stored in local storage
 */
export const clearAuthTokens = (): void => {
  window.localStorage.removeItem(LOCAL_STORAGE_AUTH_KEY)
}

/**
 * Saves auth tokens in local storage
 * @param tokens Auth tokens
 */
export const persistAuthTokens = (tokens: string) => {
  localStorage.setItem(LOCAL_STORAGE_AUTH_KEY, JSON.stringify(tokens))
}

/**
 * Get the auth tokens from local storage
 * @returns auth tokens
 */
export const getAuthTokens = (): string | null => {
  const token = window.localStorage.getItem(LOCAL_STORAGE_AUTH_KEY)
  if (token) return JSON.parse(token as string)
  else return null
}
