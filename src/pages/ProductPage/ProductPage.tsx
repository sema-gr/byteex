import { IntroScreen } from "../../shared/IntroScreen/IntroScreen";
import { Comment } from "../../shared/Comment/Comment";
import { Loungewear } from "../../shared/Loungewear/Loungewear";
import { YourBest } from "../../shared/YourBest/YourBest";
import { Comfort } from "../../shared/Comfort/Comfort";
import { Reviews } from "../../shared/Reviews/Reviews";
import { Questions } from "../../shared/Questions/Questions";
import { Impact } from "../../shared/Impact/Impact";
import { Find } from "../../shared/Find/Find";

export function ProductPage() {
    return (
        <div style={{position: "relative"}}>
            <IntroScreen />
            <Comment />
            <Loungewear />
            <YourBest/>
            <Comfort/>
            <Reviews/>
            <Questions/>
            <Impact/>
            <Find/>
        </div>
    )
}