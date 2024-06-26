import { OwnJeansChoices } from "./OwnsJeans.js"
import { SaveSub } from "./SaveSubmissions.js"
import { SubmissionList } from "./Submissions.js"
import { LocationTypeChoices } from "./UrbanDweller.js"

const container = document.querySelector("#container")

const render = async() => {
    const jeanOwnershipHTML = OwnJeansChoices()
    const locationsHTML = await LocationTypeChoices()
    const buttonHTML = await SaveSub()
    const submissionListHTML = await SubmissionList()

    container.innerHTML = `
    ${jeanOwnershipHTML}
    ${locationsHTML}
    ${buttonHTML}
    ${submissionListHTML}
    `
}

document.addEventListener("newSubmissionCreated", render)

render()