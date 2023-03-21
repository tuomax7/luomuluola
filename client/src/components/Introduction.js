import React from 'react'
import { Box, Typography } from '@mui/material'

const style = {
  fontSize: 20,
  marginBottom: 15
}

const Introduction = () => {
  return (
    <Box width='50%'>
      <Typography variant='h3' marginBottom={5}>
        Tervetuloa LuomuLuolaan!
      </Typography>
      <Typography style={style}>
        Luomutuotetussa ruoassa on perinteiseen tuotantoon verrattuna huomattavasti vähemmän muun muassa
        torjunta-ainejäämiä eikä ollenkaan keinotekoisia väri-, makeutus- tai aromiaineita. Luomutuotanto kehittää myös
        luonnon monimuotoisuutta ja ylläpitää maan kasvukuntoa. Luomutuotetun ruoan terveyseduista perinteisesti
        tuottettuun ruokaan on risteävää näyttöä, mutta monelle olisi varmasti valaisevaa ainakin tutustua luomuruokaan
        vaihtoehtona.
      </Typography>
      <Typography style={style}>
        LuomuLuola onkin tähän tarkoitukseen suunniteltu jokamiehen opas luomuruokiin ja niiden löytämiseen!
      </Typography>
    </Box>
  )
}

export default Introduction
