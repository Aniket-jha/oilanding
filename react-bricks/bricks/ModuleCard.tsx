import * as React from 'react'
import { Image, types, Text, RichText, Repeater } from 'react-bricks/frontend'
import classNames from 'classnames'


export type layoutType = 'base' | 'small' | 'small-3cols'

const getFontSize = (screenLayout: layoutType) => {
  switch (screenLayout) {
    case 'base':
      return 'text-lg md:text-xl md:leading-5 leading-5 text-gray-700 dark:text-gray-300 font-extrabold mb-2'
    default:
      return ' text-base leading-5 text-gray-700 dark:text-gray-400 font-extrabold mb-2'
  }
}

export interface FeatureItemProps {
  screenLayout: layoutType
  isTextCenter: boolean
}

const screen = (screenLayout: layoutType) => {
  switch (screenLayout) {
    case 'base':
      return 'md:w-80'
    case 'small':
      return 'md:w-72 md:-mx-2'
    case 'small-3cols':
      return 'md:px-8'
    default:
      return 'w-64'
  }
}
const ModuleCard: types.Brick<FeatureItemProps> = ({
  screenLayout,
  isTextCenter = false,

}) => {
  return (
    <div
      className={classNames(
        `flex w-[320px] px-8 py-8  bg-gray-200 shadow-md mx-6 rounded-md md:flex-col ${screen(screenLayout)} mb-16`,
        isTextCenter && 'text-center items-center' 
      )}
    >
   

      <div className="flex-1">
        <Text
          propName="moduleName"
          placeholder="Enter the Module..."
          renderBlock={(props) => (
            <h2 className={classNames(getFontSize(screenLayout))}>
              {props.children}
            </h2>
          )}
        />
       
        <RichText
          propName="text"
          placeholder="text..."
          renderBlock={(props) => (
            <p  className={classNames(
        `text-gray-500  text-[14px]  dark:text-gray-200  font-normal leading-6 text-base text`,
          
      )} >
              {props.children}
            </p>
          )}
        />
        <Repeater
          propName="moduleListItem"
          renderWrapper={(items) => (
            <div
              className={classNames(
                '',
                
              )}
            >
              {screenLayout === 'small-3cols' ? (
                <div className="">{items}</div>
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
ModuleCard.schema = {
  name: 'moduleCard',
  label: 'Module Card',
  category: 'rb-ui website',
  hideFromAddMenu: true,
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Features/FeatureItem.tsx',

  getDefaultProps: () => ({
    isTextCenter: false,
    title: 'Front-end development',
    text: 'We are specialized in the development of React web applications. For public websites we use Next.js or Gatbsy, based on the type of project.',
    screenLayout: 'base',
    image: {
      src: 'https://images.reactbricks.com/original/193ab040-1fc7-47b5-8ca0-c2176be578a6.svg',
      placeholderSrc:
        'https://images.reactbricks.com/original/193ab040-1fc7-47b5-8ca0-c2176be578a6.svg',
      srcSet: '',
    },
    'moduleListItem': [
      {
        title: 'New Item',
      
      },
     
    ],
  }),
  sideEditProps: [
    {
      name: 'isTextCenter',
      label: 'Center Feature',
      type: types.SideEditPropType.Boolean,
    },
  ],
    repeaterItems: [
    {
      name: 'moduleListItem',
      itemType: 'moduleListItem',
      itemLabel: 'Module List Item',
      min: 0,
      max: 100,
    },
  ],
}

export default ModuleCard