import { nextTick, onMounted, onUnmounted } from 'vue'

function isInView(el) {
  const rect = el.getBoundingClientRect()
  const vh = window.innerHeight || document.documentElement.clientHeight
  return rect.top < vh * 0.95 && rect.bottom > vh * 0.02
}

function revealInView() {
  document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => {
    if (isInView(el)) el.classList.add('is-visible')
  })
}

export function useReveal() {
  let observer
  let ticking = false

  function onScrollOrResize() {
    if (ticking) return
    ticking = true
    requestAnimationFrame(() => {
      revealInView()
      ticking = false
    })
  }

  onMounted(async () => {
    await nextTick()
    await nextTick()

    revealInView()

    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.05, rootMargin: '40px 0px 40px 0px' },
      )

      document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => {
        observer.observe(el)
      })
    }

    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize)

    // Rede de segurança final
    window.setTimeout(revealInView, 800)
    window.setTimeout(() => {
      document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => {
        el.classList.add('is-visible')
      })
    }, 4000)
  })

  onUnmounted(() => {
    observer?.disconnect()
    window.removeEventListener('scroll', onScrollOrResize)
    window.removeEventListener('resize', onScrollOrResize)
  })
}
