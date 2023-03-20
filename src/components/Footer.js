import React from 'react'
import { Box, Typography } from '@mui/material'
import ReferenceLink from './ReferenceLink'

const Footer = () => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      sx={{ marginTop: 'auto', background: '#926E50' }}
      width='100%'
    >
      <Typography variant='h3'>Esittelyvideon musiikki ja logomateriaali</Typography>
      <ReferenceLink
        url='https://pixabay.com/music/corporate-wake-up-to-the-renaissance-135540/'
        title='background music'
        label={`'Wake up to the renaissance' – Luonut Denys Kyshchuk (AudioCoffee) – Pixabay`}
      />

      <ReferenceLink
        url='https://www.flaticon.com/free-icons/cave'
        title='cave icons'
        label={`Luolaikoni – Luonut Freepik – Flaticon`}
      />
      <ReferenceLink
        url='https://www.flaticon.com/free-icons/seedling'
        title='seedling icons'
        label={`Kasvi-ikoni – Luonut Umeicon – Flaticon`}
      />
    </Box>
  )
}

export default Footer
