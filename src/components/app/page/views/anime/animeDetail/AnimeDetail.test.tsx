import { unmountComponentAtNode } from 'react-dom';

let container: Element | null = null
beforeEach(() => {
  jest.clearAllMocks()
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  // cleanup on exiting
  if (container) {
    unmountComponentAtNode(container)
    container.remove()
    container = null
  }
})


describe('AnimeDetail.tsx', () => {
  describe('initital state', () => {
    it('', () => {})
    
  })
})
