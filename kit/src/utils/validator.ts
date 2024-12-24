/**
 * 校验手机号是否有效
 * @param phone 
 * @returns 
 */
export function validatePhone(phone: string) {
  return /^1[3-9]\d{9}$/.test(phone)
}

/**
 * 校验邮箱是否有效
 * @param email 
 * @returns 
 */
export function validateEmail(email: string) {
  return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(email)
}

/**
 * 校验身份证号是否有效
 * @param idCard 
 * @returns 
 */
export function validateIdCard(idCard: string) {
  return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(idCard)
}