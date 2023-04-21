import React from 'react';
import { Avatar } from '../components/avatar';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Example/Avatar',
  component: Avatar,
  tags: ['autodocs'],
};

export const Primary = {
  args: {
    name: 'Post title user name',
    picture: {
      url: "https://images.ctfassets.net/2qaygz6febxm/VZzAeJhA8pBVv1Qvbnipl/162dd0e1b206e13fdac8cb1a39358922/1789031.jpeg"
    },
  },
};
