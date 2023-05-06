import React from 'react'
import "./StoryReel.css"
import Story from "./Story"

function StoryReel() {
  return (
    <div className="storyReel">
      <Story image="./Avatar_image.png" profileSrc="./avatar.png" title="Takehiro"/>
      <Story image="./React_image.jpeg" profileSrc="./logo192.png" title="React"/>
      <Story image="./Facebook_image.png" profileSrc="./Facebook_Logo.png" title="Facebook"/>
      <Story image="./javascript_image.png" profileSrc="./js.png" title="JavaScript"/>
    </div>
  )
}

export default StoryReel
