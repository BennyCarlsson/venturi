import Heading, { HeadingProps } from 'components/Heading'
import { HTMLMotionProps, motion } from 'framer-motion'

interface MotionHeadingProps extends HTMLMotionProps<'h1'>, HeadingProps {}

const MotionHeading = (_props: MotionHeadingProps) => {
  const getAs = () => {
    switch (_props.headingType) {
      case 'h1':
        return motion.h1
      case 'h2':
        return motion.h2
      case 'h3':
        return motion.h3
      case 'h4':
        return motion.h4
      case 'h5':
        return motion.h5
      case 'h6':
        return motion.h6
      default:
        return motion.h2
    }
  }

  const props = { as: getAs(), ..._props }
  return <Heading {...props} />
}

export default MotionHeading
