import styled from "styled-components"

export const Container = styled.div`
background-color: ${() => {
  const variableContainerColor = getComputedStyle(document.documentElement).getPropertyValue(
    '--container-color',
  )
  if (variableContainerColor === 'red') {
    return variableContainerColor
  } else return `blue`
}};

height:300px;
width:500px;

p  {
  color: var(--text-color);
}
`