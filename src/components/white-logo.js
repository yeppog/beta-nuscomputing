import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const WhiteLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "compclublogo.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_noBase64
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

export default WhiteLogo