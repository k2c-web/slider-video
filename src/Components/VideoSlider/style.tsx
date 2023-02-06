import styled from 'styled-components'

export const Root = styled.div`
  height: 100vh;
  .button-previous,
  .button-next {
    z-index: 2;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 20px;
    cursor: pointer;
  }

  .button-previous {
    left: 10px;
  }

  .button-next {
    right: 10px;
  }
`

export const SlidesUL = styled.ul`
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
`

export const ProgressBar = styled.div`
  box-sizing: border-box;
  height: 10px;
  background-color: green;
  width: 0;
  position: absolute;
  top: 0;
  margin: 0;
  transition: all 0.5s;
`
