var appData = require('../data.json')  
var books = appData.books  
  
var apiRoutes = express.Router()  
apiRoutes.get('/books', function(req, res){  
  res.json({  
    data: books  
  })  
})  
  
app.use('/api', apiRoutes)