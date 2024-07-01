import React from 'react'
import WishlistComponent from './WishlistComponent'
import SuggestionComponent from './SuggestionComponent'

const UserDashboard=()=> {
  return (
    <div style={{minHeight:"1080px",maxHeight:"auto"}} >
              <WishlistComponent/>
              <SuggestionComponent/>
    </div>
  )
}

export default UserDashboard