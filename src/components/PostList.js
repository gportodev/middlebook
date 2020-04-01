import React, { Component } from 'react';

import Post from './Post';

import gandalf from '../assets/gandalf.jpg'
import frodo from '../assets/frodo.jpg'
import sam from '../assets/sam.jpg'
import bilbo from '../assets/bilbo.jpg'
import sauron from '../assets/sauron.jpg'
import gollum from '../assets/gollum.jpg'
import aragorn from '../assets/aragorn.jpg'
import elrond from '../assets/elrond.jpeg'
import theoden from '../assets/theoden.jpeg'
import saruman from '../assets/saruman.jpg'
import grima from '../assets/grima.png'
import eomer from '../assets/eomer.png'

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Gandalf',
          avatar: gandalf
        },
        date: '29 Jul 1954',
        content: 'Hey guys, who wanna go out for an adventure?',
        comments: [
          {
            id: 2,
            author: {
              name: 'Frodo Baggins',
              avatar: frodo
            },
            date: '29 Jul 1954',
            content:
              'Yeah, sure! Something in mind?'
          },
          {
            id: 3,
            author: {
            name: 'Samwise Gamgee',
            avatar: sam
          },
          date: '29 Jul 1954',
          content:
            'Wait for me Mr. Frodo!',
          },
          {
            id: 4,
            author: {
            name: 'Bilbo Baggins',
            avatar: bilbo
          },
          date: '29 Jul 1954',
          content:
            'Nah, i pass! Good lucky for you guys!',
          }
        ]
      },
      {
        id: 5,
        author: {
          name: 'Sauron',
          avatar: sauron
        },
        date: '29 Jul 1954',
        content: 'Guys i lost my ring in a battle, does anyone here know where could be?',
        comments: [
          {
            id: 6,
            author: {
              name: 'Gollum',
              avatar: gollum
            },
            date: '29 Jul 1954',
            content:
              'Nope, sorry, never heard about it! GOLLUM, GOLLUM!'
          },
          {
            id: 7,
            author: {
              name: 'Aragorn',
              avatar: aragorn
            },
            date: '29 Jul 1954',
            content:
              'Dont worry, finding the ring i will personally give to you at your door!'
          },
          {
            id: 8,
            author: {
              name: 'Elrond',
              avatar: elrond
            },
            date: '29 Jul 1954',
            content:
              'Nope, but i found a finger, might be yours?'
          }
        ]
      },
      {
        id: 9,
        author: {
          name: 'Theoden',
          avatar: theoden
        },
        date: '29 Jul 1954',
        content: 'Does anyone knows a good medication for headaches?',
        comments: [
          {
            id: 10,
            author: {
              name: 'Saruman',
              avatar: saruman
            },
            date: '29 Jul 1954',
            content:
              'Medication is for the weak! Nature provide all you need, just sit in throne and close your eyes, the pain should go soon enough!'
          },
          {
            id: 11,
            author: {
              name: 'Grima',
              avatar: grima
            },
            date: '29 Jul 1954',
            content:
              'Calm down my king, i have the right solution, but first do as saruman said, he is a wiseman!'
          },
          {
            id: 12,
            author: {
              name: 'Eomer',
              avatar: eomer
            },
            date: '29 Jul 1954',
            content:
              'My king, why dont you go out? Take some air, walk through the fields! This should clear your mind!'
          },
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;
  
    return (
      <div className="postlist">
        {posts.map(post => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;