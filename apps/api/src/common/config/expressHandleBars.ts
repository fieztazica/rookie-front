import { join } from 'path';
import { helpers } from './handlebarsHelpers';
import { ExpressHandlebars } from 'express-handlebars';

export const expressHandleBars = new ExpressHandlebars({
  extname: '.hbs',
  defaultLayout: 'main',
  layoutsDir: join(process.cwd(), 'views', 'layouts'),
  helpers,
});
