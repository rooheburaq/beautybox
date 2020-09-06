import React from 'react'
import { useStaticQuery, Link, graphql } from "gatsby"

export default function Header() {
	const data = useStaticQuery(
    graphql`
      query {
        allWordpressWpApiMenusMenusItems(filter: {name: {eq: "Main Menu"}}) {
		    nodes {
		      name
		      slug
		      items {
		        title
		        url
		        object_slug
		      }
		    }
		}
      }
    `
  	)
  const mainMenuItems = data.allWordpressWpApiMenusMenusItems.nodes[0].items
  return (
  	<div>
	  	<div className="topHeader">
	  		<div className="container">
	  			<div className="top-contacts">
	  				<a href="tel:+17059943811"><i className="fa fa-phone"></i>705-994-3811</a>
	  				<a href="/contact"><i className="fa fa-send"></i>Request An Estimate</a>
	  			</div>
	  		</div>
	  	</div>
	  	<div className="mainHeader">
		    <div className="container">
		      <nav>
		      	<div>
		      		<a href="/"><img src={`../../logo.png`} alt="logo"/></a>
		      	</div>
		        <ul>
		            {mainMenuItems.map((item) =>
		                <li key={item.object_slug}><Link to={"/"+item.url.substr(33)}>{item.title}</Link></li>
		            )}
		        </ul>
		      </nav>
		    </div>
	    </div>
    </div>
  )
}
