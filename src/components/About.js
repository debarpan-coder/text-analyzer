// import React,{useState} from 'react'

export default function About(props) {
  return (
    <div className='container'>
            <h3 style={{color:'gold'}}>About Us</h3>
            <p style={{color:props.mode==='dark'?'white':'black'}}>
                The main purpose of the website is to give a feture for the following
            </p>
                <ul style={{color:props.mode==='dark'?'white':'black'}}>
                    <li>Analyze The Text</li>
                    <li>Convert lowercase text to uppercase text</li>
                    <li>Convert uppercase text to lowercase text</li>
                    <li>Remove all extraspaces with 'Capitalize' button</li>
                    <li>Capitalize all the text</li>
                    <li>Count number of Words</li>
                    <li>Count number of characters</li>
                    <li>Preview the text in 'Preview' section</li>
                </ul>
    </div>
  )
}
