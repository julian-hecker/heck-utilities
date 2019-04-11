# Heck Utilities -- Documentation
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

[Back to Documentation](./readme.md)
