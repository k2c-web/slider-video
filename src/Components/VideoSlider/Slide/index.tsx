import { useEffect, useRef } from 'react'
import { VideoContainer, Video, Text } from './style'

type Slide = {
  title: string
  src: string
  activeIndex: number
  isActive: boolean
  increment: Function
}

const Slide = ({ title, src, isActive, activeIndex, increment }: Slide) => {
  const playerRef = useRef(null)

  useEffect(() => {
    if (!playerRef.current) return
    const player = playerRef.current
    !!isActive ? player.play() : player.pause()
  }, [playerRef, isActive])

  const handleEnd = () => increment()
  const handleProgress = (e) => {
    const perc = Math.ceil(
      (playerRef.current.currentTime / playerRef.current.duration) * 100,
    )
    const pb = document.querySelector('.progress-bar')
    //console.log(pb.style.width)
    if (pb) pb.style.width = `${perc}%`
  }

  useEffect(() => {
    if (!playerRef.current) return

    isActive && playerRef?.current?.addEventListener('ended', handleEnd)

    !isActive && playerRef?.current?.removeEventListener('ended', handleEnd)

    return () => playerRef?.current?.removeEventListener('ended', handleEnd)
  }, [playerRef, isActive])

  useEffect(() => {
    if (!playerRef.current) return

    isActive &&
      playerRef?.current?.addEventListener('timeupdate', handleProgress)

    !isActive &&
      playerRef?.current?.removeEventListener('timeupdate', handleProgress)

    return () =>
      playerRef?.current?.removeEventListener('timeupdate', handleProgress)
  }, [playerRef, isActive])

  return (
    <VideoContainer activeIndex={activeIndex}>
      <Video ref={playerRef} src={src} type="video/mp4" muted playsInline />
      <Text isActive={!!isActive}>
        <h1>{title}</h1>
      </Text>
    </VideoContainer>
  )
}

export default Slide
