import React from 'react'
import BaseContainer from '../../components/base-container'
import SEO from '../../components/seo'
import { useStaticQuery, graphql } from 'gatsby';
import RecruitmentDetails from '../../components/recruitment-details'

const CommunityService = () => {
  const props = {
    name: 'Community Service',
    team: {
      people: [
        {
          name: 'Gu Geng',
          position: 'Director',
        },
        {
          name: 'Zhao Wei',
          position: 'Director',
        },
      ],
      query: useStaticQuery(graphql`
        query {
          GuGeng: file(relativePath: { eq: "gugeng.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 400, maxHeight: 250) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ZhaoWei: file(relativePath: { eq: "zhaowei.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 400, maxHeight: 250) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `)
    },
    sections: [
      {
        title: 'Overview',
        content: 'Student relations is about creating a fun and inclusive environment in SOC. Join us to plan exciting events, like Angel & Mortal, and help build long lasting friendships among computing students.',
      },
      {
        title: 'Vision',
        content: 'Leave no one in SOC behind',
      },
      {
        title: 'Mission',
        content: 'To spread FUN and BUILD relationships in the SOC community through various events.',
      },
      {
        title: 'Who we are looking for',
        bullets: [
          'If you are someone with event-planning experiences,',
          'or someone with brilliant ideas to share and fun initiates that you want to implement for the rest of SOC students,',
          'or simply someone with passion to connect and to rejuvenate the community',
        ]
      },
      {
        title: 'Events',
        bullets: [
          'Computing Day - a SPECIAL day for ALL OF US, only the students of SOC!',
          'Meliorium - amazing and fun activities for you and your friends to make even MORE friends! (e.g. Amazing Race & Escape Room)',
          'X men - Facilitate small interest groups formation and provide funding for offline bondings (WOW!)',
          'Initiate your own new event! - And much more fun that you WISH to see and bring to the SOC!',
        ],
      },
      {
        title: 'Responsibilities',
        subsections: [
          {
            title: 'Project Director',
            bullets: [
              'to spearhead and oversee the planning for a major event',
              'coordinate work among the rest of project members',
            ],
          },
          {
            title: 'Vice Project Director',
            bullets: [
              'to assist project director in the planning of a major event',
              'be in charge of admin/manpower/finance/logistics aspects of the event',
            ],
          },
          {
            title: 'Project Manager',
            bullets: [
              'to be involved in some aspects of the event planning process',
              'assist in the management of admin/manpower/finance/logistics aspects of the event',
            ],
          },
          {
            title: 'Onsite Manager',
            bullets: [
              'to be involved in some aspects of the event planning process',
              'to ensure the smooth running of the actual events and make sure changes/needs are immediately attended to',
            ],
          },
        ],
      },
    ]
  }

  return <BaseContainer>
    <SEO title='Community Service' />
    <RecruitmentDetails {...props}></RecruitmentDetails>
  </BaseContainer>
}

export default CommunityService
