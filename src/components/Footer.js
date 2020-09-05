import React from 'react'
import { useStaticQuery, Link, graphql } from "gatsby";
import Form from './Form';

export default function Footer() {

	const footerData = useStaticQuery(
        graphql `
	      query {
	      		allWordpressPage(filter: {wordpress_id: {eq: 405}}) {
				    edges {
				      node {
				        acf {
				          form {
				            footer_content
				            form_heading
				            form_shortcode
				            copyrights
				            social_media {
				              link {
				                media_name
				                media_url
				              }
				            }
				            footer_logo {
				              localFile {
				                childImageSharp {
				                  original {
				                    src
				                  }
				                }
				              }
				            }
				            small_image {
				              localFile {
				                childImageSharp {
				                  original {
				                    src
				                  }
				                }
				              }
				            }
				            large_image {
				              localFile {
				                childImageSharp {
				                  original {
				                    src
				                  }
				                }
				              }
				            }
				          }
				        }
				      }
				    }
				}
				allWordpressWpApiMenusMenusItems(filter: {name: {eq: "footer menu"}}) {
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
    const footerNodes = footerData.allWordpressPage.edges[0].node.acf.form;
    const footerMenu = footerData.allWordpressWpApiMenusMenusItems.nodes[0].items;
    const footerSocials = footerData.allWordpressPage.edges[0].node.acf.form.social_media.link;
    console.log(footerNodes);
    return (
  	<div className="mainFooter">
  		<div className="whitebg"></div>
	  	<div className="topFooter">
	  		<div className="container">
	  			<div className="leftsec">
	  				<div className="largeimg">
	  					<img src={footerNodes.large_image.localFile.childImageSharp.original.src} alt="large image"/>
	  				</div>
	  			</div>
	  			<div className="rightsec">
	  				<div className="formbox">
	  					<div dangerouslySetInnerHTML={{__html: footerNodes.form_heading}}/>
	  					<Form />
	  				</div>
	  				<div className="footerimgContent">
		  				<div className="smallimg">
		  					<img src={footerNodes.small_image.localFile.childImageSharp.original.src} alt="large image"/>
		  				</div>
		  				<div className="footerUpperContent" dangerouslySetInnerHTML={{__html: footerNodes.footer_content}}/>
	  				</div>
	  			</div>
	  		</div>
	  	</div>
	  	<div className="bottomFooter">
	  		<div className="container">
			  	<div className="footerLogo">
					<img src={footerNodes.footer_logo.localFile.childImageSharp.original.src} alt="large image"/>
				</div>
			  	<div className="menuSocial">
			  		<ul className="footerMainMenu">
				        {footerMenu.map((item) =>
				            <li key={item.object_slug}><Link to={"/"+item.url.substr(23)}>{item.title}</Link></li>
				        )}
					</ul>
					<ul className="foorterSocial">
						{footerSocials.map((item) =>
				            <li key={item.media_url}><Link to={`${item.media_url}`}><span dangerouslySetInnerHTML={{__html: item.media_name}}/></Link></li>
				        )}
					</ul>
				</div>
			</div>
	  	</div>
	  	<div className="copyrights">
	  		<div className="container">
	  			<div dangerouslySetInnerHTML={{__html: footerNodes.copyrights}}/>
	  		</div>
	  	</div>

    </div>
  )
}