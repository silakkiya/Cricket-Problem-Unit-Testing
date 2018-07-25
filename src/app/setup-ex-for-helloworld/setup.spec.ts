import { setup } from './setup';
describe('setup-function',()=>{
    let expected="";
    beforeEach(()=>{
        expected='Hello World';
    });
    afterEach(()=>{
        expected='!!!';
    });
it('All setup functions',()=>{
    expect(setup()).toEqual('Setup functions');
});
});