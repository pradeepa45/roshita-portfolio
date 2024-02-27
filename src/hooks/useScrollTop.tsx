'use client'

import React from 'react'

export default function useScroller() {

  const [showToTop, setShowToTop] = React.useState(false)

  React.useEffect(()=>{
    if(!window) return
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
          setShowToTop(true);
      } else {
          setShowToTop(false);
      }
  })
  },[])



  return {
    showToTop
  }
}