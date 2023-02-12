import { Application, Router } from 'express';

import messagesRouter from '../modules/messages/messages.controller';

function routesApp(app: Application) {
  const router: Router = Router();

  app.use('/api/v1', router);
  router.use('/messages', messagesRouter);
}

export { routesApp };
