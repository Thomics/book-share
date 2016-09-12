/**
 * App Module
 */
require('./app.js');

/**************
 * Services
 **************/
require('./common/services/authentication.service.js');
require('./common/services/data.service.js');

/**************
 * Controllers
 **************/
require('./account/account.controller.js');
require('./authorization/login/login.controller.js');
require('./authorization/register/register.controller.js');
require('./bookDisplay/search-modal/bookModal.controller.js');
require('./bookDisplay/sorting/sortOptions.controller.js');
require('./bookDisplay/displayBooks.controller.js');
require('./components/components.controller.js');
require('./group/group.controller.js');
require('./navigation/nav.controller.js');

/**************
 * Directives
 **************/
require('./bookDisplay/display/bsDisplayBooks.js');
require('./bookDisplay/search/bsSearchBook.js');
require('./bookDisplay/sorting/bsSortOptions.js');
require('./components/monthly-books/bsMonthlyBooks.js');
require('./components/num-users/bsNumUsers.js');
require('./components/total-books/bsTotalBooks.js');
require('./group/bsGroup.js');
require('./navigation/menu/bsMenu.js');
require('./navigation/bsNavigation.js');
