import React from 'react';

import Homepage from '../components/homepage/Homepage';
import BasicMeta from '../components/meta/BasicMeta';
import OpenGraphMeta from '../components/meta/OpenGraphMeta';
import TwitterCardMeta from '../components/meta/TwitterCardMeta';

export default function Index() {
  return (
    <>
      <BasicMeta url='/' />
      <OpenGraphMeta url='/' />
      <TwitterCardMeta url='/' />
      <Homepage />
    </>
  );
}
