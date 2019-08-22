import React from 'react'

export default class Input extends React.Component<{
  style?: any
  onChange?: (value: string) => void
  value?: string
}> {
  render() {
    const { onChange, style, value } = this.props
    return (
      <input
        type="text"
        style={{ ...(style || {}) }}
        onChange={(e: any) => {
          if (!onChange) return
          onChange(e.target.value)
        }}
        value={value}
      />
    )
  }
}
