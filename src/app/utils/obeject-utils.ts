
export function isEquals(obj1: any, obj2: any) {
  if(JSON.stringify(obj1) === JSON.stringify(obj2)) return true
  return false
}
