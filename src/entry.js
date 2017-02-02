import React, { PureComponent, PropTypes } from 'react'

export default class Lelao extends PureComponent {
  static propTypes = {
    plugins: PropTypes.objectOf(
      PropTypes.shape({
        Handler: PropTypes.func.isRequired,
        Input: PropTypes.func.isRequired,
        Preview: PropTypes.func.isRequired
      })
    )
  }

  render() {
    return (
      <div>
        Hello World
      </div>
    )
  }
}
