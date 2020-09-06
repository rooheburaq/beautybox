import React, { Component } from "react"
import Slider from "react-slick";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useStaticQuery, Link, graphql } from "gatsby"
import Layout from "../components/layout"
import '../components/index.css'
import Testimonials from "../components/Testimonials"

export default function Home() {
    const homeData = useStaticQuery(
        graphql `
	      query {
	      		allWordpressPage(filter: {wordpress_id: {eq: 11}}) {
				    edges {
				      node {
				        acf {
				          home_banner {
				          	background_banner{
				          		localFile {
				                    childImageSharp {
				                      original {
				                        src
				                      }
				                    }
				                }
				          	}
				            button
				            title
				          }
				          services_tabs {
				            heading
				            single_service {
				              tab_content
				              content_image {
				                localFile {
				                  childImageSharp {
				                    original {
				                      src
				                    }
				                  }
				                }
				              }
				              tab_title
				              tab_image {
				                id
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
				          booking_section {
					          booking_content
					          email_address
					          heading
					          phone_number
					          left_image {
					            localFile {
					              childImageSharp {
					                original {
					                  src
					                }
					              }
					            }
					          }
					          right_image {
					            localFile {
					              childImageSharp {
					                original {
					                  src
					                }
					              }
					            }
					          }
					       }
					       testimonials {
					          heading_content
					          testimonial_box {
					            author_name
					            testimonial_content
					          }
					        }
				        }
				        id
				        slug
				      }
				    }
				  }
			}
	    `
    )
    const homeACF = homeData.allWordpressPage.edges[0].node.acf;
    const homeServices = homeACF.services_tabs.single_service;
    const testomonialBoxes = homeACF.testimonials.testimonial_box;
    const homeBanner = homeACF.home_banner.background_banner.localFile.childImageSharp.original.src;
	console.log(homeBanner);
	var slidersettings = {
	      dots: true,
	      infinite: true,
	      speed: 500,
	      slidesToShow: 1,
	      slidesToScroll: 1
	};
    return (
        <div>
	  			<Layout>
	  				<div className="homeBanner" style={{background:`url(${homeBanner})`}}>
	  					<div className="container">
	  						<div dangerouslySetInnerHTML={{__html: homeACF.home_banner.title}}/>
	  						<Link to={homeACF.home_banner.button}>Check Our Services</Link>
	  					</div>
	  				</div>
	  				<div className="homeServices">
	  					<div className="container">
	  						<div className="servicesHeadings" dangerouslySetInnerHTML={{__html: homeACF.services_tabs.heading}}/>
	  						<Tabs className="homeTabs">
	  							<div className="servicesContent">
								    {homeServices.map((service)=>
								    	(
								    		<TabPanel>
								    			<div className="tabInnerContent">
								    				<img src={service.content_image.localFile.childImageSharp.original.src}/>
								    				<div className="tabText">
								    					<div dangerouslySetInnerHTML={{__html: service.tab_content}}/>
								    				</div>
								    			</div>
								    		</TabPanel>
								    	)
			  						)}
		  						</div>
							    <TabList className="servicesTabs">
							    	{homeServices.map((service)=>
					  					<Tab key={service.tab_title} style={{ background:`url(${service.tab_image.localFile.childImageSharp.original.src})` }}>{service.tab_title}</Tab>
			  						)}
							    </TabList>
							</Tabs>
	  					</div>
	  				</div>
	  				<div className="homeBookingtop">
	  					<div className="bluehalf">
	  						<div dangerouslySetInnerHTML={{__html: homeACF.booking_section.heading}}/>
	  					</div>
	  					<div className="greyhalf">
	  						<div dangerouslySetInnerHTML={{__html: homeACF.booking_section.booking_content}}/>
	  					</div>
	  				</div>
	  				<div className="homeBookingBottom">
	  					<div className="container">
		  					<div className="bookingLeftImg">
		  						<img src={homeACF.booking_section.left_image.localFile.childImageSharp.original.src} alt="leftimg"/>
		  						<div className="bookcontacts">
		  							<p><a href={`tel:+1${homeACF.booking_section.phone_number}`}><i className="fa fa-phone"></i> {homeACF.booking_section.phone_number}</a></p>
		  							<p><a href={`mailto:${homeACF.booking_section.email_address}`}><i className="fa fa-send"></i> {homeACF.booking_section.email_address}</a></p>
		  						</div>
		  					</div>
		  					<div className="bookingrightImg">
		  						<img src={homeACF.booking_section.right_image.localFile.childImageSharp.original.src} alt="leftimg"/>
		  					</div>
		  				</div>
	  				</div>
	  				<div className="homeTestimonialsMain">
	  					<div className="container">
	  						<Testimonials />
	  					</div>
	  				</div>
	  			</Layout>
		  	</div>
    )
}
