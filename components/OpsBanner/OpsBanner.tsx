import assest from '@/json/assest'
import { Box, styled } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const OpsBannerStyled = styled(Box)`
    
`

const OpsBanner = () => {
  return (
    <OpsBannerStyled >
        <figure>
            <Image src={assest?.ops_banner} alt='ops banner' width={1920} height={1080}/>
        </figure>
    </OpsBannerStyled>
  )
}

export default OpsBanner