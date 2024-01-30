/* eslint-disable no-console */
const fs = require('fs')

const path1 = './rerun.sh'
const path2 = 'retest/rerun.sh'
const path3 = 'results/rerun'
try {
  console.log('File removed111111111111111111:', path2)
  fs.unlinkSync(path2, { recursive: true, force: true })
  console.log('File removed:', path2)

  // fs.copyFileSync('rerun.sh', 'retest/rerun.sh',fs.constants.COPYFILE_EXCL, (err) => {
  //   if (err) throw err;
  //   console.log('rerun.sh was copied to retest/rerun.sh');
  // })

  // fs.unlinkSync(path1, { recursive: true, force: true })
  // console.log('File removed:', path1)
} catch (err) {
  console.error(err)
}

// File retest/rerun.sh will be created or overwritten by default.
try {
  console.log('File copy:', path2)
  fs.copyFileSync('rerun.sh', 'retest/rerun.sh',fs.constants.COPYFILE_EXCL, (err) => {
    if (err) throw err;
    console.log('rerun.sh was copied to retest/rerun.sh');
  })
} catch (err) {
  console.error(err)
}


try {
  console.log('File removed22222222222:', path1)
  fs.unlinkSync(path1, { recursive: true, force: true })
  console.log('File removed:', path1)
} catch (err) {
  console.error(err)
}

try {
  console.log('File 33333:', path3)
  fs.rmSync(path3, { recursive: true, force: true })
  console.log('File 3333:', path3)

  // fs.copyFileSync('rerun.sh', 'retest/rerun.sh',fs.constants.COPYFILE_EXCL, (err) => {
  //   if (err) throw err;
  //   console.log('rerun.sh was copied to retest/rerun.sh');
  // })

  // fs.unlinkSync(path1, { recursive: true, force: true })
  // console.log('File removed:', path1)
} catch (err) {
  console.error(err)
}