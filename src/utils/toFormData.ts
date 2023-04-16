export function toFormData(formObj) {
  const formData = new FormData()
  for (const d_key in formObj) {
    const value = formObj[d_key]
    if (Object.prototype.hasOwnProperty.call(formObj, d_key) && value !== undefined) {
      formData.append(d_key, formObj[d_key])
    }
  }
  return formData
}
