import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import css from "../pages/index.css"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}