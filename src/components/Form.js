import React from 'react'

export default function Form() {
    return (
  	<div className="footerForm">
  		<form method="post" action="#">
		    <input type="text" name="name" id="name" placeholder="Full Name" />
		    <input type="email" name="email" id="email" placeholder="Email Address" />
		    <input type="text" name="phone" id="phone" placeholder="Phone Number" />
		    <input type="text" name="message" id="message" placeholder="Message / Querry" />
		  <button type="submit">Submit</button>
		</form>
    </div>
  )
}