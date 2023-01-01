import React, { Children } from 'react'
import { Text, RichText, Image, types } from 'react-bricks/frontend'

//=============================
// Local Types
//=============================
type Padding = 'big' | 'small'
type BackgroundImage = ''
type ParaFontSize = 'lg' | 'md' | 'xl'
type TitleFontSize = 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl'
type ButtonColor = 'blue' | 'yellow'
type ButtonWidth = 'sm' | 'md' | 'lg' | 'xl'
interface BannerProps {
  padding: Padding,
  title: string,
  text: string,
  buttonText: string,
  buttonColor: ButtonColor,
  titleFontSize: TitleFontSize,
  paraFontSize: ParaFontSize,
  backgroundImage: BackgroundImage,
  buttonWidth: ButtonWidth,
}

//=============================
// Component to be rendered
//=============================
const Banner: types.Brick<BannerProps> = ({ padding, paraFontSize, titleFontSize, buttonColor,buttonWidth }) => {
  return (
    <div className={`px-6   ${padding === 'big' ? 'py-12' : 'py-6'}  `}>
      <div className='flex items-center justify-center'>

        <div className='px-12' >
          <Text
            renderBlock={(props) => (
              <h1 className={`${titleFontSize === 'xl' && 'text-xl'} ${titleFontSize === '2xl' && 'text-2xl'} ${titleFontSize === '3xl' && 'text-3xl'} ${titleFontSize === '4xl' && 'text-4xl'} ${titleFontSize === '5xl' && 'text-5xl'} ${titleFontSize === '6xl' && 'text-6xl'} text-left  font-black text-gray-900 dark:text-white leading-tight mb-3`}>
                {props.children}
              </h1>
            )}
            placeholder="Type a title..."
            propName="title"
          />
          <RichText
            renderBlock={(props) => (
              <p className={`${paraFontSize === 'lg' && 'text-lg'} ${paraFontSize === 'md' && 'text-base'} ${paraFontSize === 'xl' && 'text-xl'}  text-left lg:w-[500px] leading-relaxed text-gray-700 dark:text-gray-100`}>
                {props.children}
              </p>
            )}
            placeholder="Type a text..."
            propName="text"
            allowedFeatures={[
              types.RichTextFeatures.Bold,
              types.RichTextFeatures.Italic,
              types.RichTextFeatures.Highlight,
              types.RichTextFeatures.Code,
              types.RichTextFeatures.Link,
            ]}
            renderCode={(props) => (
              <code className={`${paraFontSize === 'lg' && 'text-lg'} ${paraFontSize === 'md' && 'text-sm'} ${paraFontSize === 'xl' && 'text-xl'} py-1 px-2 bg-gray-200 dark:bg-gray-700 rounded`}>
                {props.children}
              </code>
            )}
          />
          <button className={`${buttonColor === 'yellow' && 'bg-[#FFBA39]'} ${buttonColor === 'blue' && 'bg-[#7BAAFF]'} ${buttonWidth === 'xl' && 'w-[400px]'} ${buttonWidth === 'lg' && 'w-[300px]'} ${buttonWidth === 'md' && 'w-[220px]'} ${buttonWidth === 'md' && 'w-[250px]'} text-center rounded-md  px-2 py-2 my-6`}>
            <Text
              renderBlock={(props) => (
                <p className={`${paraFontSize === 'lg' && 'text-lg'}  text-white font-bold ${paraFontSize === 'md' && 'text-base'} ${paraFontSize === 'xl' && 'text-xl'}   leading-relaxed  dark:text-gray-100`}>
                  {props.children}
                </p>
              )}
              placeholder="Type a title..."
              propName="buttonTitle"
            />
          </button>
        </div>
        <div  >
          <Image
            propName="icon"
            alt="Icon"
            maxWidth={250}
            aspectRatio={1}
            imageClassName="w-[300px] mb-5 mx-auto"
          />
        </div>

      </div>
    </div>
  )
}

//=============================
// Brick Schema
//=============================
Banner.schema = {
  name: 'banner',
  label: 'Custom Banner',
  getDefaultProps: () => ({
    padding: 'big',
    backgroundColor: 'black',
    paraFontSize: 'lg',
    titleFontSize: '2xl',
    title: 'This is a custom Hero Unit',
    buttonTitle: 'Start Now',
    buttonColor: "yellow",
    buttonWidth:"lg",
    text: "We are a hi-tech web development company committed to deliver great products on time. We love to understand our customers' needs and exceed expectations.",
  }),
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
      name: 'titleFontSize',
      label: 'TitleFontSize',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: '6xl', label: '6XL' },
          { value: '5xl', label: '5XL' },
          { value: '4xl', label: '4XL' },
          { value: '3xl', label: '3XL' },
          { value: '2xl', label: '2XL' },
          { value: 'xL', label: 'XL' },
        ],
      },
    },
    {
      name: 'paraFontSize',
      label: 'ParaFontSize',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'xl', label: 'XL' },
          { value: 'lg', label: 'Large' },
          { value: 'sm', label: 'Medium' },
        ],
      },
    },
    {
      name: 'buttonColor',
      label: 'Button Color',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Color,
        options: [
          {
            label: 'Blue',
            value: 'blue',
          },
          {
            label: 'Yellow',
            value: 'yellow',
          },
        ],
      },
    },
    {
      name: 'buttonWidth',
      label: 'Button Width',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
       options: [
          { value: 'xl', label: 'XL' },
          { value: 'lg', label: 'Large' },
          { value: 'sm', label: 'Small' },
          { value: 'md', label: 'Medium' },
        ],
      },
    },
  ],
}

export default Banner
