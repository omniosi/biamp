var gulp = require('gulp');
var gnr = require('gulp-nunjucks-render');
var data = require('gulp-data');

gulp.task('nunjucks', function(){
	gnr.nunjucks.configure(['src/templates/']);
	return gulp.src('src/pages/**/*.+(html|nunjucks)')
		.pipe(gnr())
		.pipe(gulp.dest('site'));
});