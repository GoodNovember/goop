import React from 'react'
// import { render } from 'react-dom'
import { App } from './App/components/App.jsx'
import { render } from 'react-pixi-fiber'
import { PIXI } from './App/utils/customPIXI'

const canvasElement = document.getElementById('screen')

const app = new PIXI.Application({
    backgroundColor: 'black',
    view: canvasElement
})

// render(<App />, document.getElementById('root'))

render( < App / > , app.stage)