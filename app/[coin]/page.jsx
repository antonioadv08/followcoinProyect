import React from 'react'


function generateStaticParams(){
    return {
        params: {
        id: 'bitcoin'
        }
    }
}

function coin({id}) {
  return (
    <div>{id}</div>
  )
}

export default coin