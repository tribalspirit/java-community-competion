import React, {Component} from 'react';

export default class Image extends Component {  
  render() {
    let {src} = this.props;
    let important = {
      backgroundImage: `url("${src}")`,
      backgroundSize: 'contain',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat'
    };

    return <div className='result-card-img' style={{...important}} />
  }
}