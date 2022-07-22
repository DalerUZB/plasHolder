import React from 'react'
import styled from 'styled-components'

const EllipsizSpinner = () => {
  return (
    <>
      <LdsFacebook>
        <div></div>
        <div></div>
        <div></div>
      </LdsFacebook>
    </>
  )
}

export default EllipsizSpinner

const LdsFacebook = styled.div`
  display: inline-block;
  position: relative;
  width: 0px;
  height: 0px;

div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 9px;
  background: #000000;
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  border-radius: 200px;
}

 div:nth-child(1) {
  left: 4px;
  animation-delay: -0.24s;
}
 div:nth-child(2) {
  left: 16px;
  animation-delay: -0.12s;
}
 div:nth-child(3) {
  left: 28px;
  animation-delay: 0;
}
@keyframes lds-facebook {
  0% {
    top: 8px;
    height: 24px;
  }
  50%, 100% {
    top: 24px;
    height: 16px;
  }
}
`