export function createStoreManager(name: string) {
  return {
    persist(state: any) {
      localStorage.setItem(name, JSON.stringify(state))
    },
    load<S>(defaultData: S): S {
      const data = localStorage.getItem(name)
      if (data) return JSON.parse(data)
      return defaultData
    },
  }
}