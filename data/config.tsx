import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'MitiGrater',
  
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        id: 'features',
        label: 'Features',
      },
      {
        id: 'faq',
        label: 'FAQ',
      },
      {
        label: 'Login',
        href: '/login',
      },
    ],
  },
  footer: {
    copyright: (
      <>
        Built by{' Spandan Mukherjee and Sparsh Kandpal '}
        <Link href="https://twitter.com/">Androiders</Link>
      </>
    ),
    links: [
      {
        href: 'mailto:Ksparsh443@gmail.com',
        label: 'Contact',
      },
      {
        href: 'https://twitter.com/spandan_twts',
        label: <FaTwitter size="14" />,
      },
      {
        href: 'https://github.com/Mitigrater',
        label: <FaGithub size="14" />,
      },
    ],
  },
  signup: {
    title: 'Start optimizing disaster response with MitiGrater',
    features: [
      {
        icon: FiCheck,
        title: 'AI-driven Insights',
        description: 'Leverage historical data and real-time updates for effective resource allocation.',
      },
      {
        icon: FiCheck,
        title: 'Efficient Coordination',
        description: 'Facilitate better communication and collaboration among response teams.',
      },
      {
        icon: FiCheck,
        title: 'Resilience Building',
        description: 'Iteratively refine response strategies based on feedback for improved resilience.',
      },
      {
        icon: FiCheck,
        title: 'User-friendly Interface',
        description: 'Intuitive UI for seamless navigation and ease of use during critical situations.',
      },
    ],
  },
}

export default siteConfig
