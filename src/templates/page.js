import React, {Component} from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import MainMenu from '../components/MainMenu'

class PageTemplate extends Component {
    render() {
        const currentPage = this.props.data.wordpressPage;
        const ACFData = this.props.data.wordpressPage.acf;
        const innerBanner = ACFData.inner_banner;
        console.log(ACFData)
        return (
            <div>
            	<Layout>
            		<div className="innerBanner">
            			<div className="container">
            				<div className="bannerTitle">
				                <h1 dangerouslySetInnerHTML={{__html: currentPage.title}}/>
				                <Link to={`/contact/`} className="innerButton main-cta btn">Contact Us Today</Link>
			                </div>
			                {
			                	innerBanner !== null ?
			                	<div className="imgbox"><img src={innerBanner.localFile.childImageSharp.original.src} alt="innerBanner"/></div> : 
			                	<div className="imgbox"><img src={"/static/about-us-dc86448efd5c68b5b3fe9645e1356765.jpg"} alt="innerBanner"/></div>
			                }
		                </div>
	                </div>
	                <div className="container innerContent">
	                <div dangerouslySetInnerHTML={{__html: currentPage.content}}/>
	                </div>
	  			</Layout>
            </div>
        )
    }
}

export default PageTemplate

export const pageQuery = graphql`
    query currentPageQuery($id: String!) {
        wordpressPage(id: { eq: $id }) {
            title
		    content
		    slug
		    id
		    date(formatString: "MMMM DD, YYYY")
		    acf{
		        inner_banner{
			        localFile{
			            childImageSharp{
				            original{
				              src
				            }
				        }
			        }
		        }
		    }
		}
    }
`