import { IntroScreen } from "../../shared/IntroScreen/IntroScreen";
import { Comment } from "../../shared/Comment/Comment";
import { Loungewear } from "../../shared/Loungewear/Loungewear";

export function ProductPage() {
    return (
        <div>
            <IntroScreen />
            <Comment />
            <Loungewear />
        </div>
    )
}