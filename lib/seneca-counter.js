'use strict'

var jobs = 0

module.exports = function senecaCounter (options) {
  const seneca = this

  seneca.add('role: counter, cmd:add', (args, callback) => {
    const value = parseInt(args.value || 1, 10)
    jobs += value
    console.log(jobs)
  })

  seneca.add('role: counter, cmd:subtract', (args, callback) => {
    const value = parseInt(args.value || 1, 10)
    jobs -= value
    seneca.act('role: info, info:job-done', {jobs: jobs})
    console.log(jobs)
  })

  return options.tag || 'seneca-counter'
}
