import React from 'react';
import { PostHeader } from '../components/post-header';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Example/PostHeader',
  component: PostHeader,
  tags: ['autodocs'],
};

export const Primary = {
  args: {
    title: 'Post title text',
    date: '2023-04-17T00:00:00.000-05:00',
    author: { 
      name: 'Post title user name',
      picture: {
        url: "https://images.ctfassets.net/2qaygz6febxm/VZzAeJhA8pBVv1Qvbnipl/162dd0e1b206e13fdac8cb1a39358922/1789031.jpeg"
      },
    },
    coverImage: {
      url: "https://images.ctfassets.net/2qaygz6febxm/2VR9AHjmgwUTHimCy3BmdH/320251d1482f7539bc5d640a4665ef60/dinosaur-found-china.webp?w=2048&q=75"
    },
  },
};
