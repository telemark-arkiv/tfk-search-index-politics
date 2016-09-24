'use strict'

module.exports = function senecaGaKill (options) {
  const seneca = this

  seneca.add('role: info, info: job-done', (args, callback) => {
    const jobs = parseInt(args.jobs || 0, 10)

    if (jobs === 0) {
      console.log('All jobs done')
      seneca.close()
      process.exit(0)
    }
  })

  return options.tag || 'seneca-ga-kill'
}
