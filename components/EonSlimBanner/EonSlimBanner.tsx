/* eslint-disable import/order */
import assest from '@/json/assest'
import { Box, Container, styled, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const EonSlimBannerStyled = styled(Box)`
    padding: 90px 0px 200px 0px;
    .eon_slim_wrapper{
        text-align: center;
    }
`

const EonSlimBanner = () => {
  return (
    <EonSlimBannerStyled sx={{
        backgroundImage: `url(${assest?.eonSlimBannerBg})`,
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover"
    }}>
        <Container fixed>

         <Box className='eon_slim_wrapper'>
            <figure>
                <Image src={assest?.eon_slim_banner} alt='eon_slim_banner' width={1100} height={500}/>
            </figure>
            <Typography>Accelerating Work with Micro Precision</Typography>
         </Box>
        </Container>
    </EonSlimBannerStyled>
  )
}

export default EonSlimBanner