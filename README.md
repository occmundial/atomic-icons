# Atomic Icons
![Release](https://badge.fury.io/gh/occmundial%2Fatomic-icons-ct.svg)

**Atomic Icons** library. This project is part of the **Atomic UI**.

## How it works
Atomic Icons generates an SVG sprite with all the icons in the `/icons` folder.
To use the icons, you need to insert an inline SVG element like this:

```svg
<svg class="atomic-arrow-left"><use xlink:href="#atomic-arrow-left"></use></svg>
```

If you're using the SVG sprite from a CDN, you have to include the path to the sprite file in the `xlink:href` attribute:
```svg
<svg class="atomic-arrow-left"><use xlink:href="https://cdn-hosting-the-sprite.com/atomic-icons-ct.svg#atomic-arrow-left"></use></svg>
```

### Using it with Atomic
The Atomic UI library is designed to work with Atomic Icons. The `Icon` component is a wrapper for the SVG icon.
This is an example of how to use the `Icon` component:
```jsx
import { Icon } from '@occmundial/atomic';

function Component() {
    return (
        <Icon iconName="arrow-left" />
    )
}
```