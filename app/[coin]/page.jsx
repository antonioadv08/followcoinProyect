import React from 'react'


function getStaticProps(){
    return {
        props: {
        id: 'bitcoin'
        }
    }
}


function coin({id}) {
  return (
    <div>{id}asds</div>
  )
}

export default coin