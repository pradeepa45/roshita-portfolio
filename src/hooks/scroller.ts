import { animateScroll, scroller } from 'react-scroll'

const to = (target: string, offset = 90, options = {}) => {
  scroller.scrollTo(target, {
    duration: 500,
    delay: 100,
    smooth: true,
    offset: -offset,
    ...options,
  })
}

const top = () => {
  animateScroll.scrollToTop({
    duration: 500,
    smooth: true,
  })
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  to, 
  top
}
