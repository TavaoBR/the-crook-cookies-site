import { computed, reactive } from 'vue'

const WHATSAPP_NUMBER = '5579998062898'

const state = reactive({
  items: [],
  isOpen: false,
})

function findIndex(productId) {
  return state.items.findIndex((item) => item.id === productId)
}

export function useCart() {
  const count = computed(() =>
    state.items.reduce((sum, item) => sum + item.qty, 0),
  )

  const subtotal = computed(() =>
    state.items.reduce((sum, item) => sum + item.priceValue * item.qty, 0),
  )

  const isEmpty = computed(() => state.items.length === 0)

  function open() {
    state.isOpen = true
    document.body.style.overflow = 'hidden'
  }

  function close() {
    state.isOpen = false
    document.body.style.overflow = ''
  }

  function toggle() {
    if (state.isOpen) close()
    else open()
  }

  function add(product, qty = 1) {
    if (product.soldOut) return
    const index = findIndex(product.id)
    if (index >= 0) {
      state.items[index].qty += qty
    } else {
      state.items.push({
        id: product.id,
        name: product.name,
        shortName: product.shortName,
        priceValue: product.priceValue,
        accent: product.accent,
        image: product.image || '',
        qty,
      })
    }
    open()
  }

  function remove(productId) {
    const index = findIndex(productId)
    if (index >= 0) state.items.splice(index, 1)
  }

  function setQty(productId, qty) {
    const index = findIndex(productId)
    if (index < 0) return
    if (qty <= 0) {
      state.items.splice(index, 1)
      return
    }
    state.items[index].qty = qty
  }

  function increment(productId) {
    const index = findIndex(productId)
    if (index >= 0) state.items[index].qty += 1
  }

  function decrement(productId) {
    const index = findIndex(productId)
    if (index < 0) return
    if (state.items[index].qty <= 1) {
      state.items.splice(index, 1)
      return
    }
    state.items[index].qty -= 1
  }

  function clear() {
    state.items.splice(0, state.items.length)
  }

  function formatMoney(value) {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
  }

  function buildWhatsAppUrl() {
    if (isEmpty.value) {
      return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Oi! Quero pedir cookies da THE CROOK.')}`
    }

    const lines = [
      '*Pedido THE CROOK.*',
      '',
      ...state.items.map(
        (item) =>
          `• ${item.qty}x ${item.name} — ${formatMoney(item.priceValue * item.qty)}`,
      ),
      '',
      `*Total: ${formatMoney(subtotal.value)}*`,
      '',
      'Pode confirmar disponibilidade e forma de entrega?',
    ]

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`
  }

  function checkoutWhatsApp() {
    const url = buildWhatsAppUrl()
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return {
    state,
    count,
    subtotal,
    isEmpty,
    open,
    close,
    toggle,
    add,
    remove,
    setQty,
    increment,
    decrement,
    clear,
    formatMoney,
    buildWhatsAppUrl,
    checkoutWhatsApp,
  }
}
