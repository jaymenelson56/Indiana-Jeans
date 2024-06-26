import { saveSurveySubmit } from "./TransientState.js"


const handleSurveyClick = (clickEvent) => {
    if (clickEvent.target.id === "saveSubmission") {
        saveSurveySubmit()
    }
}


export const SaveSub = () => {

    document.addEventListener("click", handleSurveyClick)

   return  "<div><button id='saveSubmission'>Save Submission</button></div>"
}

