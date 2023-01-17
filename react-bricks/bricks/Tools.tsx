import React, { Children } from 'react'
import { Text, RichText, Image, types,Repeater } from 'react-bricks/frontend'

import classNames from 'classnames'

interface ToolsProps {
  bg?: { color: string; className: string }
//   borderTop?: Border
//   borderBottom?: Border
    title: string,
  size?: 'medium' | 'large'
//   width?: Size
  grayscale?: boolean
}

const Tools: types.Brick<ToolsProps> = ({
//   bg = bgColors.white.value,
//   width = 'lg',
  grayscale = false,
}) => {
  return (
    <div>
        <Text
            renderBlock={(props) => (
              <h1 className={` text-center text-4xl font-black text-gray-900 dark:text-white leading-tight mb-0`}>
                {props.children}
              </h1>
            )}
            placeholder="Type a title..."
            propName="title"
          />
      <div
       
        className={classNames(
          'py-6 flex flex-wrap justify-center items-center'
        )}
      >
       
        <Repeater  propName="tool" itemProps={{ grayscale }} />
      </div>
    </div>
  )
}

Tools.schema = {
  name: 'tools',
  label: 'Tools',
  
  getDefaultProps: () => ({
    bg: {
      color: '#f7fafc',
      className: 'bg-gray-100 dark:bg-gray-800',
    },
     title: 'This is a custom Hero Unit',
    borderTop: 'none',
    borderBottom: 'none',
    width: 'lg',
    grayscale: false,
    'tool': [
      {
        image: {
          src: 'https://images.reactbricks.com/original/55a585f2-0092-499a-88e7-6f6e72870382.svg',
          placeholderSrc:
            'https://images.reactbricks.com/original/55a585f2-0092-499a-88e7-6f6e72870382.svg',
          srcSet: '',
          alt: 'Airbnb',
          seoName: 'airbnb',
        },
      },
      {
        image: {
          src: 'https://images.reactbricks.com/original/df0214c6-7feb-4037-921f-985bdf584ed7.svg',
          placeholderSrc:
            'https://images.reactbricks.com/original/df0214c6-7feb-4037-921f-985bdf584ed7.svg',
          srcSet: '',
          alt: 'Dribble',
          seoName: 'dribble',
        },
      },
      {
        image: {
          src: 'https://images.reactbricks.com/original/44dd50bd-9401-47bb-a248-56192cb0da03.svg',
          placeholderSrc:
            'https://images.reactbricks.com/original/44dd50bd-9401-47bb-a248-56192cb0da03.svg',
          srcSet: '',
          alt: 'Netflix',
          seoName: 'netflix',
        },
      },
      {
        image: {
          src: 'https://images.reactbricks.com/original/5bea2f55-07ea-47fb-b638-bedaa6c2275f.svg',
          placeholderSrc:
            'https://images.reactbricks.com/original/5bea2f55-07ea-47fb-b638-bedaa6c2275f.svg',
          srcSet: '',
          alt: 'Pinterest',
          seoName: 'pinterest',
        },
      },
      {
        image: {
          src: 'https://images.reactbricks.com/original/52f81cf1-01bc-43d0-9428-995351146c2a.svg',
          placeholderSrc:
            'https://images.reactbricks.com/original/52f81cf1-01bc-43d0-9428-995351146c2a.svg',
          srcSet: '',
          alt: 'Next.js',
          seoName: 'next-js',
        },
      },
    ],
  }),
  repeaterItems: [
    {
      name: 'tool',
      itemType: 'tool',
      itemLabel: 'Tool',
      // addItemText: 'Add customer',
      // removeItemText: 'Remove customer',
      min: 0,
      max: 25,
    },
  ],
  sideEditProps: [
    
  ],
}

export default Tools