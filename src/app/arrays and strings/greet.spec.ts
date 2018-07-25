import {greet} from './greet';
// import { greet } from "./greet";

describe('greet', () => {
    it('should include the name from greet function',()=>{
        expect(greet('ilakkiya')).toContain('ilakkiya');
    })
});