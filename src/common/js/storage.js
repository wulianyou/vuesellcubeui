import storage from 'good-storage'

const SELLER_KEY = '__seller__'

export function saveToLocal (id, key, val) { // 存储逻辑
  const seller = storage.get(SELLER_KEY, {})
  if (!seller[id]) { // 区分不同商家
    seller[id] = {}
  }
  seller[id][key] = val
  storage.set(SELLER_KEY, seller)
}

export function loadFromLocal (id, key, def) { // 读取逻辑
  const seller = storage.get(SELLER_KEY, {})
  if (!seller[id]) {
    return def
  }
  return seller[id][key] || def
}
