import { FC, useState } from 'react'
import Slide from './Slide'
import { Root, SlidesUL, ProgressBar } from './style'

type Item = {
  video: string
  title: string
}

type Props = {
  slides: Item[]
}

const VideoSlider: FC<Props> = ({ slides }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const max = slides.length - 1

  const isFirstSlide = activeIndex === 0
  const isLastSlide = activeIndex === max

  const increment = () => activeIndex < max && setActiveIndex(activeIndex + 1)

  const decrement = () => activeIndex > 0 && setActiveIndex(activeIndex - 1)

  return (
    <Root>
      {!isFirstSlide && (
        <button className="button-previous" onClick={decrement}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      )}
      {!isLastSlide && (
        <button className="button-next" onClick={increment}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      )}

      <SlidesUL>
        {slides?.map((item: Item, index: number) => {
          return (
            <Slide
              increment={increment}
              src={item.video}
              key={item.title}
              title={item.title}
              activeIndex={activeIndex}
              isActive={index === activeIndex}
            />
          )
        })}
      </SlidesUL>
      <ProgressBar className="progress-bar" />
    </Root>
  )
}

export default VideoSlider
