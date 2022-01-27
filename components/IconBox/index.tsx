import { Tag, Flexbox, Icon } from '@occmundial/atomic/components'
import { colors, iconSizes } from '@occmundial/atomic/tokens'

import useStyles from './styles'

function IconBox({ icon }) {
  const classes = useStyles()
  return (
    <Flexbox
      display="inline-flex"
      direction="col"
      alignItems="center"
      className={classes.iconBox}
    >
      <Icon iconName={icon} color={colors.sec} size={iconSizes.large} />
      <Tag theme="basic" className={classes.tag}>
        {icon}
      </Tag>
    </Flexbox>
  )
}

export default IconBox
