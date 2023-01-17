import React, { Children } from 'react'
import { Text, RichText, Image, types,Repeater } from 'react-bricks/frontend'
import { layoutType } from './MentorCard'
import classNames from 'classnames'

type Padding = 'big' | 'small'

interface HeroUnitProps {
  padding: Padding
  title: string
  text: string
  screenLayout: layoutType
}

export interface FeaturesProps {
  bg?: { color: string; className: string }
  
}
const getRepeaterWidht = (screenLayout: layoutType) => {
  switch (screenLayout) {
    case 'base':
      return 'w-full max-w-3xl'
    case 'small':
      return 'w-full max-w-2xl'
    case 'small-3cols':
      return 'md:w-full max-w-[72rem] md:-mx-8'
  }
}

//=============================
// Component to be rendered
//=============================
const Modules: types.Brick<HeroUnitProps> = ({ padding, screenLayout = 'base', }) => {
  return (
    <div >
      <div className='py-12 flex flex-wrap   justify-center items-center'>
          <Repeater
          propName="moduleCard"
          renderWrapper={(items) => (
            <div
              className={classNames(
                'flex flex-wrap justify-between  px-6 md:px-0',
                getRepeaterWidht(screenLayout)
              )}
            >
              {screenLayout === 'small-3cols' ? (
                <div className="grid lg:grid-cols-3 md:grid-cols-4">{items}</div>
              ) : (
               items
              )}
            </div>
          )}
          itemProps={{ screenLayout: screenLayout }}
        />
        
      </div>
    </div>
  )
}

//=============================
// Brick Schema
//=============================
Modules.schema = {
  name: 'modules',
  label: 'Modules',
  getDefaultProps: () => ({
    padding: 'big',
    title: 'This is a custom Unit',
    text: "We are a hi-tech web development company committed to deliver great products on time. We love to understand our customers' needs and exceed expectations.",
     'moduleCard': [
      {
        title: 'Front-end development',
        text: 'We are specialized in the development of React web applications. For public websites we use Next.js or Gatbsy, based on the type of project.',
        screenLayout: 'base',
        image: {
          src: 'https://st.depositphotos.com/2101611/3925/v/950/depositphotos_39258205-stock-illustration-businessman-avatar-profile-picture.jpg',
          placeholderSrc:
            'https://st.depositphotos.com/2101611/3925/v/950/depositphotos_39258205-stock-illustration-businessman-avatar-profile-picture.jpg',
          srcSet: '',
        },
        moduleListItem:[
              {
        color: "#000",
          text: "New item",
          title: "New Item"
      
      },
        ]
      },
     
    
    ],
  }),
    repeaterItems: [
    {
      name: 'moduleCard',
      itemType: 'moduleCard',
      itemLabel: 'Module Card',
      min: 0,
      max: 20,
    },
  ],
  sideEditProps: [
    {
      name: 'padding',
      label: 'Padding',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'big', label: 'Big Padding' },
          { value: 'small', label: 'Small Padding' },
        ],
      },
    },
     {
      groupName: 'Columns',
      defaultOpen: true,
      props: [
        {
          name: 'screenLayout',
          label: 'Screen Layout',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: 'base', label: 'Two columns' },
              { value: 'small', label: 'Small two columns' },
              { value: 'small-3cols', label: 'Three columns' },
            ],
          },
        },
      ],
    },
  ],
}

export default Modules
