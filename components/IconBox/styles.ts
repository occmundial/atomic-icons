import { createUseStyles } from 'react-jss'
import { colors, spacing } from '@occmundial/atomic/tokens'

const styles = createUseStyles({
  iconBox: {
    border: `1px solid ${colors.grey200}`,
    padding: spacing.small,
    margin: spacing.tiny,
    borderRadius: spacing.radius,
    width: 150,
    '&:hover': {
      background: colors.bgGrey
    }
  },
  tag: {
    marginTop: spacing.xTiny
  }
})

export default styles
