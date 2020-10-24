import React from 'react'
const Scroll=(props)=>{
	return(

		<div class='scroll' style={{overflowY:'scroll',scrollbarWidth:'none', border:'2px solid black', margin:'5px' , height:'500px'}} >
		    {props.children}
		</div>
          

		);
}
export default Scroll;