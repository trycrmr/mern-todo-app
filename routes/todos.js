const router = require('express').Router()

router
// .checkout('/', (req, res) => {})
// .copy('/', (req, res) => {})
// .delete('/', (req, res) => {})
.get('/', (req, res) => {
  res.send('hello from todos get')
})
// .head('/', (req, res) => {})
// .lock('/', (req, res) => {})
// .merge('/', (req, res) => {})
// .mkactivity('/', (req, res) => {})
// .mkcol('/', (req, res) => {})
// .move('/', (req, res) => {})
// .m-search('/', (req, res) => {})
// .notify('/', (req, res) => {})
// .options('/', (req, res) => {})
// .patch('/', (req, res) => {})
// .post('/', (req, res) => {})
// .purge('/', (req, res) => {})
// .put('/', (req, res) => {})
// .report('/', (req, res) => {})
// .search('/', (req, res) => {})
// .subscribe('/', (req, res) => {})
// .trace('/', (req, res) => {})
// .unlock('/', (req, res) => {})
// .unsubscribe('/', (req, res) => {})


module.exports = router