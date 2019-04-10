<!--
What is this repo or project? (You can reuse the repo description you used earlier because this section doesn’t have to be long.)
How does it work?
Who will use this repo or project?
What is the goal of this project?
-->

# Heck Utilities -- Documentation
Heck Utilities is a CSS Utility library. It was created with the goal of accelerating front-end CSS development. It provides a framework for quick, responsive, mobile-first, utility-based designing.

## Table of Contents
- Usage
- File Architecture
- Utilities
  - Layout
    - Display
  - Visual Style
  - Text Format

## Using Heck Utilities
One of the goals of Heck Utilities is to be totally easy to integrate. For that reason, properties in the library have low specificity and no `!important` tags, so as to allow for code to be overwritten. To integrate, simply `\<link\>` in your HTML document's `\<head\>`, and use the available classes in your HTML! Style away!

## File Architecture
Heck Utilities' file architecture system takes inspiration from works such as Jonathan Snook's SMACSS and Harry Roberts' ITCSS. It is meant to prevent 'specificity wars' as well as keeping each selector organized.

The following is the file structure of the source scss directory:

<pre><code>
scss
├───settings
|   ├───_breakpoint.scss
|   ├───_color.scss
|   ├───_font.scss
|   ├───_spacing.scss
|   └───_variable.scss
├───tools
|   ├───_function.scss
|   └───_mixin.scss
├───utilities
|   ├───_layout.scss <!-- Split into individual files -->
|   ├───_text-format.scss
|   └───_visual-style.scss
|
heck-utilities.scss
</code></pre>

### Settings
All configuration files go here. These are totally customizable, including breakpoints, colors, fonts, and spacing sizes.
These files do not directly generate CSS on their own.
### Tools
SCSS tools such as mixins and functions can go here. Feel free to add your own!
### Utilities
Using `Settings` and `Tools`, Heck Utilities generates a customized utility library with all responsive classes. Pretty neat!


## Utilities
Now we're talking! This section has documentation for all the utilies included in the library.

All utilities are prefixed with `.u-`, a kind-of namespace that prevents interference with user classes.

### -Layout-

#### Display
One of the most essential utilities, display lets you choose if an element displays as a block, inline-block, inline, or whether it even displays at all. 
##### Syntax: 
`.u-display-*value*`, or `.u-dsp-*val*`, 
where `*value*` is 
- `block`,
- `inline-block`,
- `inline`, or
- `none`.
or where `*val*` (abbreviated) is
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