export function getDate(date) {
   let formated = new Date(date).toLocaleDateString()
   return formated
}

export function getDateForInput(date) {
   const formatted = new Date(date).toLocaleString('ru-RU', { year: 'numeric', month: 'numeric', day: 'numeric' })
   const result = formatted.split(".").reverse().join("-")
   return result
}

export function getUTCfromDate(date) {
   if (date === '') return ''
   const newDate = new Date(date).getTime()
   return newDate
}


