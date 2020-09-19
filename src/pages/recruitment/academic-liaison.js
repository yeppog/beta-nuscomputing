import React from 'react'
import BaseContainer from '../../components/base-container'
import SEO from '../../components/seo'
import { useStaticQuery, graphql } from 'gatsby';
import RecruitmentDetails from '../../components/recruitment-details'

const AcademicLiaison = () => {
  const props = {
    name: 'Academic Liaison',
    team: {
      people: [
        {
          name: 'Mengxi',
          position: 'Director',
        },
        {
          name: 'Shimin',
          position: 'Deputy Director',
        },
      ],
      query: useStaticQuery(graphql`
        query {
          Mengxi: file(relativePath: { eq: "mengxi.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 400, maxHeight: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          Shimin: file(relativePath: { eq: "shimin.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 400, maxHeight: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `),
    },
    sections: [
      {
        title: 'Overview',
        content: 'The Academic Liaison cell aims to promote the academic interests and facilitate the academic pursuits of the student body in the School of Computing (SoC). The cell seeks to be the bridge between the student population and the school with regards to academic matters. The cell initiates activities such as Mock Practical Examinations, Academic Day and Hackathons to ensure that students of SoC have enough resources to excel.        ',
      },
      {
        divider: true,
      },
      {
        title: 'Vision',
        bullets: [
          'If you are someone with event-planning experiences,To form an open community and a strong network of support for all Computing students',
          'To be a robust and encouraging platform for students to explore and experiment',
          'To instil a deep sense of life-long learning amongst students',
          'To prepare the student body to face the problems of tomorrow',
        ],
        content: 'We’d love for you to be a part of the Academic Liaison cell as Project Directors, Vice Project Directors, committee members and helpers. Scroll down to find out more about different roles within the Academic Liaison family! ',
      },

    ],
  }

  return <BaseContainer>
    <SEO title={props.name} />
    <RecruitmentDetails {...props}></RecruitmentDetails>
  </BaseContainer>
}

export default AcademicLiaison
