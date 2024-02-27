'use client'

import classNames from 'classnames'
import { ArrowUp } from 'react-feather'

import scroller from '@/hooks/scroller'
import Button from '@/common/Form/Button'
import useScroller from '@/hooks/useScrollTop'

export default function ScrollToTop() {
  const {showToTop} = useScroller()
  return (
    <Button 
      className={classNames('rounded-full border-2 border-light text-light fixed bottom-6 right-6 flex items-center p-4', { 'hidden': !showToTop })}
      onClick={() => { scroller.top() }}
      >
      <ArrowUp className='' size={24} strokeWidth={2}/>
    </Button>
  );
}