import Paragraph, { ParagraphProps } from 'components/Paragraph'
import { HTMLMotionProps, motion } from 'framer-motion'

interface MotionParagraphProps extends HTMLMotionProps<'p'>, ParagraphProps {}

const MotionParagraph = ({ title, ..._props }: MotionParagraphProps) => {
  const props = { as: motion.p, ..._props }
  return <Paragraph {...props} />
}

export default MotionParagraph
