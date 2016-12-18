import { Grid } from 'semantic-ui-react'
import React from 'react'

function Home() {
  return (
    <Grid padded>
      <h1>Home</h1>
      <button class="ui circular icon button">
      <i aria-hidden="true" class="settings icon"></i> </button>
    </Grid>
  )
}

export default Home
