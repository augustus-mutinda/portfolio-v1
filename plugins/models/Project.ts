export class Project {
    startDate: string = ""
    endDate: string = ""
    name: string = ""
    image: string = ""
    description: string = ""
    link: string = ""
    skills: string[] = []

    constructor(
        startDate: string = "",
        endDate: string = "",
        name: string = "",
        image: string = "",
        description: string = "",
        link: string = "",
        skills: string[] = []
    ) {
        this.startDate = startDate
        this.endDate = endDate
        this.name = name
        this.image = image
        this.description = description
        this.link = link
        this.skills = skills
    }
}