/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('allFeeds variable is defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('urls are defined', function() {
            for(let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });  

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('names are defined', function() {
            for(let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        });
        
        /* TODO: Write a new test suite named "The menu" */

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
    describe('The menu', function() {
        it('menu is hidden by default', function() {
            const menu = document.querySelector('body');
            expect (menu.classList.contains('menu-hidden')).toBe(true);
        });

        it('menu toggles on and off', function() {
            const menu = document.querySelector('body');
            const menuIcon = document.querySelector('.menu-icon-link');

            menuIcon.click();
            expect (menu.classList.contains('menu-hidden')).toBe(false);

            menuIcon.click();
            expect(menu.classList.contains('menu-hidden')).toBe(true);
        });
        /* TODO: Write a new test suite named "Initial Entries" */
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('ensures at least one entry is available', function() {
            const entries = document.querySelector('.feed');
            expect(entries.children.length > 0).toBe(true);
        });

         /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
    })})})})
    describe('New Feed Selection', function() {
        let initURL;
        let nextURL;

        beforeEach(function(done) {
            const feed = document.querySelector('.feed');
            loadFeed(0, function() {
                initURL = document.querySelector('.entry-link');
                loadFeed(1, function() {
                nextURL = document.querySelector('.entry-link');
                //From Udacity Classroom: "Callbacks should be used to ensure that feeds are loaded by 
                //the _loadFeed_ function that the content actually changes."
                done();
                });
            });
        });
        it('content  has actually changed', function() {
            expect(initURL === nextURL).toBe(false);
        });
    })();