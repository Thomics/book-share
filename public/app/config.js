/**
 * App Module
 */
require('./app.js');

/**
 * Services
 */
require('./common/services/authentication.service.js');
require('./common/services/data.service.js');

/**
 * Controllers
 */
require('./account/account.controller.js');
require('./authorization/login/login.controller.js');
require('./authorization/register/register.controller.js');
require('./bookDisplay/bookModal.controller.js');
require('./bookDisplay/displayBooks.controller.js');
require('./navigation/nav.controller.js');
require('./components/numBooks.controller.js');

/**
 * Directives
 */
require('./navigation/bsNavigation.js');
require('./navigation/menu/bsMenu.js');
require('./bookDisplay/search/bsSearchBook.js');
require('./bookDisplay/directive/bsDisplayBooks.js');
require('./components/bsMonthlyBooks.js');
require('./components/total-books/bsTotalBooks.js');
