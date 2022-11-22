

## Before bundling final version to publish for production:

### in webpack.config.cjs

<!-- Time:  18:09 in /DevLearning/Training/Mentoring SPFx - Build npm package from ground up-20221114_140149-Meeting Recording   -->
change mode to production when pushing final version to minimize library and create single js or CDN

module.exports = {
  mode: 'development', // switch to production when you package for production - impacts final size of package you import