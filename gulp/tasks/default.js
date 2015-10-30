var gulp = require('gulp');
var taskName = 'default'

gulp.task(taskName,function(){
  return console.log('This is the ' + taskName +' task!')
})