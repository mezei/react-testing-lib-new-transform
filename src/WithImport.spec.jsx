import React from 'react'
import { render } from '@testing-library/react'

import WithImport from './WithImport'

describe('WithImport', () => {
  it('should just render', () => {
    const { queryByText } = render(<WithImport />)

    expect(queryByText('Component with importing React!')).not.toBeNull()
  })
})
