/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$( () => {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', () => {
        /* This test makes sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('allFeeds variable is defined', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('urls are defined', () => {
            for(let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });  

        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('names are defined', () => {
            for(let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        });
    });
        /* This is a new test suite named "The menu" */

    describe('The menu', () => {
        const menu = document.querySelector('body');
         /* This test ensures the menu element is
         * hidden by default.
         */
        it('menu is hidden by default', () => {
            expect (menu.classList.contains('menu-hidden')).toBe(true);
        });
        /* This test ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * has two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('menu toggles on and off', () => {
            const menuIcon = document.querySelector('.menu-icon-link');

            menuIcon.click();
            expect (menu.classList.contains('menu-hidden')).toBe(false);

            menuIcon.click();
            expect(menu.classList.contains('menu-hidden')).toBe(true);
        });
    });
        /* This is a new test suite named "Initial Entries" */
      
    describe('Initial Entries', () => {
        beforeEach((done) => {
            loadFeed(0, done);
        });
        /* This test ensures that when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        it('ensures at least one entry is available', () => {
            const entries = document.querySelector('.feed').querySelectorAll;
            expect(entries.length > 0).toBe(true);
        });
    });
         /* This is a new test suite named "New Feed Selection" */

    describe('New Feed Selection', () => {
        let initURL;
        let nextURL;

        beforeEach((done) => {
            const feed = document.querySelector('.feed');
                loadFeed(0, () => {
                initURL = feed.querySelector('.entry-link');
                loadFeed(1, () => {
                nextURL = feed.querySelector('.entry-link');
                //From Udacity Classroom: "Callbacks should be used to ensure that feeds are loaded by 
                //the _loadFeed_ function that the content actually changes."
                done();
            });
        });
    });
        /* This test ensures that when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        it('content  has actually changed', () => {
            expect(initURL === nextURL).toBe(false);
        });
    });
});