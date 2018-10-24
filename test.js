const validGitHubUsername = require('./index');
const assert = require('assert');

describe('removes illegal characters', () => {
   it('removes spaces', () => {
       let username = validGitHubUsername('kx chen');
       assert.equal(username, 'kxchen');
   });

   it('removes special characters', () => {
       let username = validGitHubUsername('kx/,.^[]{}<>!@#$%&*()_+=|?chen');
       assert.equal(username, 'kxchen');
   });
});

describe('length should not exceed 39', () => {
   it('does not accept length > 39', () => {
      let username = validGitHubUsername('k'.repeat(40));
      assert.equal(username, 'k'.repeat(39));
   });
});
