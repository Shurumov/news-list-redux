import React, { PureComponent } from "react";
import { Button as ButtonAnt } from 'antd'

export class Button extends PureComponent {
  render() {
    const { children, ...tailProps } = this.props;
    return(
      <ButtonAnt
        {...tailProps}
      >
        {children}
      </ButtonAnt>
    )
  }
}