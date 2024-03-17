import { useEffect, useState } from 'react'

type UseScrollYPayloadType = {
  /** この値以上スクロールされるとisShowがtrueになる */
  threshold?: number
}

type UseScrollYReturnType = {
  /** 対象のオブジェクトが表示されるか否かのフラグ */
  isShow: boolean
}

/** MEMO: 動作テストはDOM操作が必要なためToTopButtonコンポーネントのStoryで行っている */
export const useScrollY = ({
  threshold = 200,
}: UseScrollYPayloadType): UseScrollYReturnType => {
  const [scrollY, setScrollY] = useState(0)
  const [isShow, setIsShow] = useState(false)

  const handleScroll = () => {
    setScrollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (scrollY > threshold) {
      setIsShow(true)
    } else {
      setIsShow(false)
    }
  }, [scrollY])

  return {
    isShow,
  }
}
