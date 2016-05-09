// test/unit/foo_controller.spec.js

describe('Social', function(){

    var Social;
    /* On utilisera la fonction beforeEach qui
     nous permettra de lancer un code avant chaque test
     */

    beforeEach(function(){
        angular.mock.module('testApp')
        angular.mock.inject(function(_Social_){
            Social = _Social_
        })
    })

    it("Should have a getTwitterCount method", function(){
        expect(Social.getTwitterCount).to.be.a('function')
    })

});