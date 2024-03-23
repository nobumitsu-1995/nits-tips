import React, { type PropsWithChildren } from 'react'
import { Presenter } from './Presenter'

export const Container: React.FC<PropsWithChildren> = ({ children }) => (
  <Presenter>{children}</Presenter>
)
