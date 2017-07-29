$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        it('Are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        /*test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL 's have some length.
         */
        it('Is URL Defined and Length is not Zero', function() {
            for (i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBeNull();
                expect(allFeeds[i].url).not.toBe("");
            }
        });

        it('Should Have Name Defined', function() {
                   for (i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBeNull();
                expect(allFeeds[i].name).not.toBe("");
            }
        });
    });

    /*test suite named "The Menu" */
    describe('The Menu', function() {
        
        it('By Default hidden', function() {
            expect($('body').hasClass("menu-hidden")).toEqual(true);
        });

        it('Visibility Of Menu icon', function() {
            $(".menu-icon-link").click();
            expect($('body').hasClass("menu-hidden")).toEqual(false);
            $(".menu-icon-link").click();
            expect($('body').hasClass("menu-hidden")).toEqual(true);
        });
    });

    /*test suite named "Initial Entries" */
    describe('Initial Entries', function() {
       
        beforeEach(function(done) {
            loadFeed(0, function() {
                done(); 
            });
        });
        it('Is Single Entry present in Feed', function(done) {
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });
    });
    /*test suite named "New Feed Selector" */
    describe('New Feed Selector', function() {
        var prevFeed,changedFeed;
        beforeEach(function(done) {
            loadFeed(0, function() {
                prevFeed = $(".feed").html(); 
                loadFeed(1, function() {
                    changedFeed = $(".feed").html();
                    done();
                });
            });
        });
        it('is Different From Prev Feed', function(done) {
            expect(changedFeed).not.toEqual(prevFeed);
            done();
        });
    });
}());