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
    /* a test suite just contains a related set of tests.
    * This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* Test to make sure that the allFeeds variable has been
         * defined and that it is not empty. 
         */
         it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Test that loops through each feed in the allFeeds object
         * and ensures it has a URL defined and that the URL is not empty.
         */
         it('has a URL defined and not empty', function() {
            allFeeds.forEach(function(feed){
                expect(feed).toBeDefined();
                expect(feed.length).not.toBe(0);
            });
        });

        /* Test that loops through each feed in the allFeeds object and 
         * ensures it has a name defined and that the name is not empty.
         */
         it('has a name and the name is not empty', function(){
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });

     });


    /* A new test suite named "The menu" */
    describe('The menu', function(){

        /* Test that ensures the menu element is hidden by default.
         * You'll have to analyze the HTML and the CSS to determine
         *  how we're performing the hiding/showing of the menu element.
         */

         it('is hidden by default', function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });


         /* Test that ensures the menu changes visibility when the menu icon is clicked.
          */

          it('changes visibility when the menu icon clicked', function(){
            var menuIcon = $('.menu-icon-link');
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);

        });

          /* TODO: Write a new test suite named "Initial Entries" */

          describe('Initial Entries', function(){

        /* Test that ensures when the loadFeed function is called and completes
         *  its work, there is at least
         * a single .entry element within the .feed container.
         */

         beforeEach(function(done){

            loadFeed(0, function(){
                done();
            });  
        });
         it('at least a single .entry exists within the .feed container', function(){

           expect($('.feed .entry').length).toBeGreaterThan(0);
       });

         /* Test suite named "New Feed Selection" */

         describe('New Feed Selection', function(){
            var currentFeed,
            newFeed;
            
            /* Test that ensures when a new feed is loaded by the loadFeed
         * function that the content actually changes.
         */

            beforeEach(function(done){
                loadFeed(0, function(){
                    currentFeed = $('.feed').html();
                    loadFeed(1, function(){
                        newFeed = $('.feed').html();
                        done();
                    });
                });

            });
            it('has new feed content loaded', function(){
                expect(currentFeed != newFeed).toBe(true);
            });
        });

     });

      });
}());
