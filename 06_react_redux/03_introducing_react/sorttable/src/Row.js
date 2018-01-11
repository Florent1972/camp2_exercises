import React, { Component } from 'react';

class Row extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.product.decathlon_id}</td>
        <td>{this.props.product.title}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}

export default Row


// en mode fonction au lieu du mode class

function row(props) {
  return (
    <tr>
      <td>{props.product.decathlon_id}</td>
      <td>{props.product.title}</td>
      <td>{props.product.price}</td>
    </tr>
  );
}

export default Row
