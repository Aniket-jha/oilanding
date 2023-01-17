import * as React from 'react'
import classNames from 'classnames'
import { FiCheck } from 'react-icons/fi'
import { Text, types } from 'react-bricks/frontend'




export interface BulletListItemProps {
  color: { color: string; className: string; className2: string }
  className: string
  attributes: string
}

const ModuleListItem: types.Brick<BulletListItemProps> = ({
  color = '#000',
  className,
}) => {
  return (
    <div
      className={classNames(
        'flex justify-start items-center py-2 leading-tight',
        className
      )}
    >
      <div
        className={classNames(
          'flex justify-center items-center w-5 h-5 rounded-full mr-4 text-sm',
          
        )}
        style={{ minWidth: '1.25rem' }}
      >
        <FiCheck />
      </div>
      <Text
        propName="text"
        renderBlock={(props) => (
          <span
            className={classNames('dark:text-gray-100', )}
            {...props.attributes}
          >
            {props.children}
          </span>
        )}
        placeholder="Type..."
      />
    </div>
  )
}

ModuleListItem.schema = {
  name: 'moduleListItem',
  label: 'Module List item',
  category: 'rb-ui website',
  hideFromAddMenu: true,
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/shared/BulletListItem.tsx',

  getDefaultProps: () => ({
    color: '#000',
    text: 'New item',
  }),
  sideEditProps: [],
}

export default ModuleListItem