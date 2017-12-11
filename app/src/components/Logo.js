import React from 'react'

import lums from '../images/logo.png'
import lumsT from '../images/logo_trans.png'

export default class Logo extends React.Component
{
  render()
  {
    const styles =
    {
      logo:
      {
        width: 140,
        height: 130
      },
      logoContainer:
      {
        marginLeft: 120,
        alignItem: 'center',
        justifyContent: 'center'
      }
    }
    return (
        <div>
          <img src = {lumsT} />
        </div>
    );
  }
}
