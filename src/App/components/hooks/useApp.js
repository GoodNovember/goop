import React, { useContext } from 'react'
import { AppContext } from 'react-pixi-fiber'

export const useApp = () => {
    return useContext(AppContext)
}