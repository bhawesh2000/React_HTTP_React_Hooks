// fethching value from App Component to Component E using useContext Hook

import React, { useContext } from 'react'
import { UserContext , ChannelContext } from '../App'


function ComponentE() {

    //useContext Hook to consume value
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)

  return (
    <div>
      {user} - {channel}
    </div>
  )
}

export default ComponentE
