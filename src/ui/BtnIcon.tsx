import { Link, NavLink } from "react-router-dom"
import styled, { css } from "styled-components"

type ColorType = 'line' | 'warning' | 'blue' | 'transparent'

interface IBtnIcon<T> {
  classname?: string
  color?: ColorType
  handler?: React.Dispatch<React.SetStateAction<T>>
  rounded?: boolean
  areaLabel?: string
  to?: string
  type?: 'button' | 'link' | 'navlink'
}

// Styles
const IconStyles = css<{ $color: ColorType, $rounded: boolean }>`
  background-color: var(--color-${props => props.$color});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20px;
  border: 0;
  border-radius: ${props => props.$rounded ? '50%' : '6px'};
  cursor: pointer;
  outline: none;
  padding: 0;
  height: 40px;
  width: 40px;
`
const IconBtn = styled.button<{ $color: ColorType, $rounded: boolean }>`
  ${IconStyles}
`
const IconLink = styled(Link)<{ $color: ColorType, $rounded: boolean }>`
  ${IconStyles}
`
const IconNavLink = styled(NavLink)<{ $color: ColorType, $rounded: boolean }>`
  ${IconStyles}
`

const BtnIcon: React.FC<IBtnIcon<any>> = ({ areaLabel, classname, color = 'line', handler, rounded = false, to, type = 'button' }) => {
  return (
    <>
      {(type === 'button') && <IconBtn className={classname} onClick={handler} $color={color} $rounded={rounded} aria-label={areaLabel} />}
      {(type === 'link') && <IconLink className={classname} to={to!} $color={color} $rounded={rounded} aria-label={areaLabel} />}
      {(type === 'navlink') && <IconNavLink className={classname} to={to!} $color={color} $rounded={rounded} aria-label={areaLabel} />}
    </>
  )
}

export default BtnIcon
