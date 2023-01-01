import * as React from 'react'
import { Image, types, Text, RichText } from 'react-bricks/frontend'
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
const MentorCard: types.Brick<FeatureItemProps> = ({
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
      <Image
        propName="image"
        alt="feature"
        imageClassName={
          screenLayout === 'base'

            ? 'w-[150px] md:w-auto  md:h-30 h-[150px] rounded-full'
            : 'w-[150px] md:w-auto  md:h-30 h-[150px] rounded-full'
        }
        renderWrapper={({ children }) => {
          return <div className="my-auto mr-6 md:mr-0 md:mb-5">{children}</div>
        }}
      />

      <div className="flex-1">
        <Text
          propName="title"
          placeholder="title..."
          renderBlock={(props) => (
            <h2 className={classNames(getFontSize(screenLayout))}>
              {props.children}
            </h2>
          )}
        />
        <Text
          propName="experience"
          placeholder="Enter your Experience..."
          renderBlock={(props) => (
            <h5 className={classNames(`text-gray-600 mb-3  text-[18px]  dark:text-gray-200  font-normal leading-6 text-base text`)}>
              {props.children}
            </h5>
          )}
        />
        <RichText
          propName="text"
          placeholder="text..."
          renderBlock={(props) => (
            <p  className={classNames(
        `text-gray-500  text-[18px]  dark:text-gray-200  font-normal leading-6 text-base text`,
          
      )} >
              {props.children}
            </p>
          )}
        />
      </div>
    </div>
  )
}
MentorCard.schema = {
  name: 'mentorCard',
  label: 'Mentor Card',
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
  }),
  sideEditProps: [
    {
      name: 'isTextCenter',
      label: 'Center Feature',
      type: types.SideEditPropType.Boolean,
    },
  ],
}

export default MentorCard