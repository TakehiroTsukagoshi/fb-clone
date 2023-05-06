import React from 'react'
import "./Feed.css"
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      <Post 
        profilePic="./avatar.png"
        message="Do your best, you can do it."
        timestamp="This is a timestamp"
        username="Takehiro"
        image="https://i.insider.com/5c79a8cfeb3ce837863155f5?width=750&format=jpeg&auto=webp"
      />
      <Post 
        profilePic="./avatar.png"
        message="That's cute!"
        timestamp="This is a timestamp"
        username="Takehiro"
        image="https://images.unsplash.com/photo-1497752531616-c3afd9760a11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
      />
    </div>
  )
}

export default Feed
