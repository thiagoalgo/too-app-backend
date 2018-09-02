const express = require('express')

module.exports = function(server) {
  
  // API Router
  const router = express.Router()
  server.use('/api', router)

  // TODO Router
  const todoService = require('../api/todo/todoService')
  todoService.register(router, '/todos')
  
}