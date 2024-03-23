export const generateUUID = () => {
  const uuid4 = crypto.randomUUID().replaceAll('-', '')
  return uuid4
}
