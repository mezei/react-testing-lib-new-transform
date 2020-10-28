// importing React here won't solve the issue
import { render } from '@testing-library/react'

import WithoutImport from './WithoutImport'

describe('WithoutImport', () => {
  it('should just render', () => {
    const { queryByText } = render(<WithoutImport />)

    expect(queryByText('Component without importing React!')).not.toBe(null)
  })
})
