import styled from 'styled-components'

export const VideoContainer = styled.li`
  position: relative;
  transition: transform 0.5s;
  transform: ${({ activeIndex }) => `translateX(-${activeIndex * 100}vw)`};
  margin: 0;
  padding: 0;
`
export const Video = styled.video`
  display: block;
  object-fit: cover;
  width: 100vw;
  height: 100vh;
`

export const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${(props) => props.isActive && 'background:white; color: red'};

  h1 {
    color: inherit;
  }
`
