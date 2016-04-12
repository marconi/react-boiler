import React from 'react'
import classNames from 'classnames'
import '../styles/app.css'

export default class App extends React.Component {
  render() {
    return (
      <div className={classNames({app: true})}>
        <p>Hello World!</p>
      </div>
    )
  }
}
