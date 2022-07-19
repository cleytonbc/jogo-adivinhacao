import React from 'react';
import {Adsense} from '@ctrl/react-adsense';
import { Container } from './styles';

export function GoogleAds(){
  return (
<>
<Container>
<Adsense
  client="ca-pub-8127041880040578"
  slot="1129966187"
  style={{ width: 350, height: 90, float: 'left' }}
  layout="in-article"
  format="auto"
/>
</Container>
</>
  )
}