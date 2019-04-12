# Heck Utilities -- Documentation 
## Table of Contents
- [Installation &amp; Usage](./usage.md)
- [File Architecture](./architecture.md)
- [Utility Classes](./utilities/readme.md)


## Using Heck Utilities
One of the goals of Heck Utilities is to be totally easy to integrate. For that reason, properties in the library have low specificity and no `!important` tags, so as to allow for code to be overwritten. To integrate, simply `<link>` in your HTML document's `<head>`, and use the available classes in your HTML! Style away!



## Classes
Now we're talking! This section has documentation for all the utility classes included in the library.

All utilities are, by default, prefixed with `.u-` (this can be changed in `settings/_config.scss`), a namespace that may prevent conflict with user classes.

### -Layout-

#### Display
One of the most essential utilities, display lets you choose if an element displays as a block, inline-block, inline, or whether it even displays at all. 
##### Syntax: 
<pre>.u-display-*value*</pre> or <pre>.u-dsp-*val*</pre>
where <pre>*value*</pre> is 
- `block`,
- `inline-block`,
- `inline`, or
- `none`.
or where <pre>*val*</pre> (abbreviated) is
- `blc`,
- `ilb`,
- `inl`, or
- `none`.



Display
  Flex
  Grid
Position
  z-position
Float
Spacing
  Margin
  Border
  Padding
Dimension
  width
  height

### -Visual Style-
color 
background-color
border-radius
box-shadow
opacity
outline
debug

### -Text Format-
f-style
f-variant
f-weight
f-size
l-height
f-family
t-align
t-decor
w-space
w-break
w-wrap
w-spacing