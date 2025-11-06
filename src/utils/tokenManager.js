export const saveToken = (token) => {
  // const encrypted = encrypt(token)

  localStorage.setItem('auth_token', token)
}

export const getToken = () => {
  const encrypted = localStorage.getItem('auth_token')

  // return encrypted ? decrypt(encrypted) : null
  return encrypted
}

export const clearToken = () => {
  localStorage.removeItem('auth_token')
}
