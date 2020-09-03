import React, { useState, useEffect, useRef, useContext } from 'react'
import { Text, Sprite } from 'react-pixi-fiber'
import { ResponsiveStage } from './ResponsiveStage'
import { useApp } from './hooks/useApp'
import * as PIXI from "pixi.js"

const RED = 0xff0000
const GREEN = 0x00ff00
const BLUE = 0x0000ff

const Item = props => {
  const [tint, setTint] = useState(0xff00ff)
  const [scale, setScale] = useState(10)

  const [rotation, setRotation] = useState(0)

  const app = useApp()

  useEffect(()=>{
    console.log({ app })
    
    const tick = time => {
      // console.log({ time })
      setRotation(existing=>{
        return existing + 0.01 * time
      })
    }

    app.ticker.add(tick)
    
    return () => {
      app.ticker.remove(tick)
    }
  },[ ])

  return (
    <Sprite 
      pointerdown={()=>{
        setTint(RED);
        setScale(10)
      }} 
      pointerup={()=>{
        setTint(GREEN)
        setScale(5)
      }}
      pointerupoutside={()=>{
        setTint(GREEN)
        setScale(5)
      }}
      anchor={0.5}
      scale={scale}
      interactive={true}
      tint={tint} 
      texture={PIXI.Texture.WHITE}
      rotation={rotation}
      width={64}
      height={64}
      {...props} 
    />
  )
}

export const App = () => {
  return (
    <ResponsiveStage>
      <Text
        text='This is a Test 1234 from App.jsx!'
        x={20}
        y={20}
        style={{
          fill: 0xffff00,
          fontFamily: 'monospace',
          fontSize: 30
        }}
      />
      <Item x="100" y="150"/>
    </ResponsiveStage>
  )
}
