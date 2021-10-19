import { iconSizes, colors, spacing } from '@occmundial/occ-atomic'

const styles = {
  iconBox: {
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
  icon: {
    width: iconSizes.base,
    height: iconSizes.base,
    fill: colors.sec
  },
  tag: {
    marginTop: spacing.xTiny
  }
}

export default styles
