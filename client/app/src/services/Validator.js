export const is_user_valid = (user) => {
  const usernameValid = 'username' in user && user.username.length > 0
  const passwordValid = 'password' in user && user.password.length > 0
  return usernameValid === true && passwordValid === true
}