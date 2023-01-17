import { types } from 'react-bricks/frontend'
import website from 'react-bricks-ui/website'
import blog from 'react-bricks-ui/blog'
import HeroUnit from './MyHeroUnit'
import Banner from './Banner'
import MentorCard from './MentorCard'
import Mentors from './Mentors'
import Customer from './Tool'
import Tools from './Tools'
import Tool from './Tool'
import ModuleCard from './ModuleCard'
import ModuleListItem from './ModuleListitem'
import Modules from './Modules'

const bricks: types.Brick<any>[] = [
  ...website, // React Bricks UI
  ...blog,
  Mentors,
  MentorCard,
  HeroUnit,
  ModuleCard,
  Banner,
  ModuleListItem,
  Modules,
  
  
  Tool
   // Example custom brick
  // Put here your other bricks...
]

export default bricks
