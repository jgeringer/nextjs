import React from 'react';
import { PostHeader } from '../components/post-header';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Example/PostHeader',
  component: PostHeader,
  tags: ['autodocs'],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const PrimaryIn = {
  args: {
    title: 'Header text',
    date: '2023-04-17T00:00:00.000-05:00',
    author: { 
      name: 'test user',
      picture: {
        url: "https://images.ctfassets.net/2qaygz6febxm/VZzAeJhA8pBVv1Qvbnipl/162dd0e1b206e13fdac8cb1a39358922/1789031.jpeg"
      },
    },
    coverImage: {
      url: "https://images.ctfassets.net/2qaygz6febxm/VZzAeJhA8pBVv1Qvbnipl/162dd0e1b206e13fdac8cb1a39358922/1789031.jpeg"
    },
  },
};
