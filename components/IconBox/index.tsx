import withStyles from 'react-jss'
import { Tag, Flexbox } from '@occmundial/occ-atomic'

import styles from './styles'

function IconBox({ classes, icon }) {
  return (
    <Flexbox
      display="inline-flex"
      direction="col"
      alignItems="center"
      className={classes.iconBox}
    >
      <svg key={icon} className={classes.icon}>
        <use xlinkHref={`#atomic__${icon}`} />
      </svg>
      <Tag theme="white" className={classes.tag}>
        {icon}
      </Tag>
    </Flexbox>
  )
}

export default withStyles(styles)(IconBox)
