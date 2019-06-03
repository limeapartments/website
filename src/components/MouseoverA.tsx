import React from 'react'

export default class MouseoverA extends React.Component<{
  href: string
  target?: string
  activeStyle?: any
  inactiveStyle?: any
  style?: any
}> {
  state = {
    active: false,
  }
  render() {
    return (
      <a
        onMouseEnter={() => this.setState({ active: true })}
        onMouseLeave={() => this.setState({ active: false })}
        style={{
          ...(this.state.active
            ? this.props.activeStyle
            : this.props.inactiveStyle),
          ...(this.props.style || {}),
        }}
        href={this.props.href}
        target={this.props.target}
      >
        {this.props.children}
      </a>
    )
  }
}
