var copy = require('recursive-copy');

var src = 'src/scss/components';
var dest = 'src/build/buildTemplate/components-build';
var destDark = 'src/build/buildTemplate/components-build-dark';

var options={
  overwrite: true
};

copy(src, dest, options, function(error, results) {
	if (error) {
		console.error('Copy failed: ' + error);
	} else {
		console.info('Copied components to component-build. ' + results.length + ' files');
	}
});

copy(src, destDark, options, function(error, results) {
  if (error) {
    console.error('Copy failed: ' + error);
  } else {
    console.info('Copied components to component-build-dark. ' + results.length + ' files');
  }
});
