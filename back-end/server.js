const app = require('./index')
const {PORT} = require('./config')

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})