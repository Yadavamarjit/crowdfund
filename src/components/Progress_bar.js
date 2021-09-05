import React from 'react'
  
const Progress_bar = ({bgcolor,progress}) => {
     
    const Parentdiv = {
        height: 10,
        width: '70%',
        backgroundColor: 'rgb(212, 209, 209)',
        borderRadius: 40,
        marginTop:50,
        marginLeft:40
      }
      
      const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
       borderRadius:40,
        textAlign: 'right'
      }
              
    return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        {/* <span style={progresstext}>{`${progress}%`}</span> */}
      </div>
    </div>
    )
}
  
export default Progress_bar;