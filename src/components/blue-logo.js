import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const BlueLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "compclublogocolor.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.logo?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return <Img style={{objectFit: 'contain', maxWidth: '600px'}} fluid={data.logo.childImageSharp.fluid} />
}

export default BlueLogo