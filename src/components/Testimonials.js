import React, { Component } from "react"
import Slider from "react-slick";
import { useStaticQuery, Link, graphql } from "gatsby"
import Layout from "../components/layout"
import '../components/testimonials.css'

export default function Testimonials() {
    const testimonialsData = useStaticQuery(
        graphql `
	      query {
	      		allWordpressPage(filter: {wordpress_id: {eq: 11}}) {
				    edges {
				      node {
				        acf {
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
    const homeTesti = testimonialsData.allWordpressPage.edges[0].node.acf;
    const testomonialBoxes = homeTesti.testimonials.testimonial_box;
    var slidersettings = {
    	arrows:false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div>
	  			<div className="homeTestimonials">
	  					<div className="testBox1">
		  					<div className="leftTestHeadings">
		  						<div dangerouslySetInnerHTML={{__html: homeTesti.testimonials.heading_content}}/>
		  					</div>
	  					</div>
	  					<div className="testBox2">
		  					<div className="leftTestContent">
		  					<Slider {...slidersettings}>
		  						{testomonialBoxes.map((testimonial) =>(
		  							<div className="singleTestimonialBox">
		  								<div dangerouslySetInnerHTML={{__html: testimonial.testimonial_content}}/>
		  								<p>{testimonial.author_name}</p>
		  							</div>
		  							)
		  						)}
		  					</Slider>
		  					</div>
		  				</div>
	  				</div>
		  	</div>
    )
}