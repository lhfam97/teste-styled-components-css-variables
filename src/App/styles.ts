import styled from "styled-components"

export const Container = styled.div`
background-color: ${() => {
  const test = getComputedStyle(document.documentElement).getPropertyValue(
    '--container-color',
  )
  if (test === 'red') {
    return test
  } else return `blue`
}};

height:300px;
width:500px;

p  {
  color: var(--text-color);
}
`