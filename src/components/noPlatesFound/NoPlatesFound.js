import { Card } from 'semantic-ui-react'
import React from 'react'

function NoPlatesFound() {
  return (
    <Card fluid raised>
      <Card.Content>
        <Card.Header>
          No Plates Found
        </Card.Header>
        <Card.Meta>
          Grab a Plate to get started
        </Card.Meta>
        <Card.Description>
          Your Plate is Clean. Please Grab A New Plate to get started
        </Card.Description>
      </Card.Content>
    </Card>
  )
}

export default NoPlatesFound
