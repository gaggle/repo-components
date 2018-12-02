import ReactMasonry from 'react-masonry-component'
import React, { Component } from 'react'

const masonryOptions = {
  itemSelector: '.grid-item',
  transitionDuration: 0,
}

class Masonry extends Component {
  render () {
    return <div className="repo-cards section">
      <div className="container">
        <ReactMasonry className={'grid columns is-gapless'}
                      options={masonryOptions}>
          {React.Children.map(this.props.children, (child, i) => {
            return <div key={child.key}
                        className="grid-item column is-3-fullhd is-4-desktop is-6-tablet is-12-mobile"
                        data-index={i}>
              {child}
            </div>
          })}
        </ReactMasonry>
      </div>
    </div>
  }
}

export default Masonry
