const middleware = {}

middleware['auth'] = require('@/middleware/auth.js');
middleware['auth'] = middleware['auth'].default || middleware['auth']

middleware['check-auth'] = require('@/middleware/check-auth.js');
middleware['check-auth'] = middleware['check-auth'].default || middleware['check-auth']

middleware['take-login'] = require('@/middleware/take-login.js');
middleware['take-login'] = middleware['take-login'].default || middleware['take-login']

export default middleware
