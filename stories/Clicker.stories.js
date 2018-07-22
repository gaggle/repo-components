'use strict'
import React from 'react'
import { storiesOf } from '@storybook/react'

import Clicker from '../components/Clicker'

storiesOf('Clicker', module)
  .add('Simple', () => <Clicker/>)
  .add('Icons', () => <div>
    <span className="icon ion-md-information-circle mr-1"/>
    <span className="icon ion-md-git-pull-request mr-1"/>
  </div>)
