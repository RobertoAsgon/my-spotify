import styled from 'styled-components'

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const StyledCheckbox = styled.div<{ checked: boolean }>`
  display: inline-block;
  width: 16px;
  height: 16px;
  transition: all 250ms;
  border-radius: 4px;
  box-shadow: 0 0 0 1px #c1c3c6;

  background-image: url(
    data:image/svg + xml;charset=utf-8,
    %3Csvgxmlns='http://www.w3.org/2000/svg'width='32'height='32'%3E%3Cpathd='M13.613 27.068l-7.94-7.28q-.285-.267-.442-.613t-.172-.7.11-.71.394-.638q.52-.583 1.3-.614T8.225 17l6.13 5.626 8.79-17q.363-.693 1.104-.93t1.433.118.93 1.103-.126 1.442L16.56 26.55q-.204.394-.558.654t-.78.34q-.063.015-.118.023t-.11.008-.102 0q-.74 0-1.276-.504z'fill='%23FFF'/%3E%3C/svg%3E
  );

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }

  &.variant-login {
    background-color: ${(props) => (props.checked ? '#15883e' : '#ffff')};

    ${HiddenCheckbox}:hover + & {
      background-color: ${(props) => (props.checked ? '#1ed760' : '#ffff')};
      box-shadow: 0 0 0 1px #1ed760;
      cursor: pointer;
    }
  }
`

export { CheckboxContainer, StyledCheckbox, HiddenCheckbox, Icon }
