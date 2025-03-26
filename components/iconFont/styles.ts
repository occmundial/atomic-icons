import { createUseStyles } from 'react-jss'
import { colors, spacing } from '@occmundial/atomic/tokens'

const styles = createUseStyles({
  iconFont: {
    border: `1px solid ${colors.grey200}`,
    padding: spacing.small,
    margin: spacing.tiny,
    borderRadius: spacing.radius,
    width: 150,
    '&:hover': {
      background: colors.bgGrey
    },
    '&:hover $icon': {
      fill: colors.secDarker
    }
  },
  tag: {
    marginTop: spacing.xTiny
  },
  icon: {
    fontFamily: 'Atomic-Icons',
    fontSize: 48,
    lineHeight: 1,
    display: 'block',
    color: colors.sec
  }
})

export default styles
