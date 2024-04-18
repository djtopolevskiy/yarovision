'use client'
import React from 'react'
import Layout from './_ui/layout'
import { Logo } from './_ui/logo'
import Navtop from './_ui/navtop'
import { ToggleTheme } from '@/features/theme/toggle-theme'
import Sheetnav from './_ui/sheet'



export default function Header({ variant }: {
  variant: 'auth' | 'private' | 'public'
}) {
  const isProfile = variant !== 'auth'
  return (
    <header>
      <Layout
        logo={<Logo />}
        navtop={<Navtop />}
        toggle={<ToggleTheme />}
        burger={<Sheetnav />}
      />
      
    </header>
  )
}
