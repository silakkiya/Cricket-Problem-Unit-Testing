import { VoteComponent } from "./vote.component";

describe('VoteComponent', () => {
    let component: VoteComponent;
    
    beforeEach(()=>{
        component = new VoteComponent();    
    });
    afterEach(()=>{
        component = new VoteComponent();        
    })
        it('should increment if upvoted',() => {
            // Arrange
            // let component = new VoteComponent();

            // Act
            component.upVote();
            // Assert
            expect(component.totalVotes).toBe(3);
        });
        it('should decrement if downvoted',() => {
            component.downVote();

            expect(component.totalVotes).toBe(1);
        });
    });