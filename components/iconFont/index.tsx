import { Tag, Flexbox } from '@occmundial/atomic/components'

import useStyles from './styles'

import glyphMap from '../../public/fonts/atomic-icons-ct-map.json'

function IconFont({ icon }) {
  const classes = useStyles()
  return (
    <Flexbox
      display="inline-flex"
      direction="col"
      alignItems="center"
      className={classes.iconFont}
    >
      <span className={classes.icon}>
        {String.fromCharCode(glyphMap[icon])}
      </span>
      <Tag theme="basic" className={classes.tag}>
        {icon}
      </Tag>
    </Flexbox>
  )
}

export default IconFont
