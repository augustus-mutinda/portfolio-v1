export class ProfessionalRole {
    startDate: string = ""
    endDate: string = ""
    role: string = ""
    company: string = ""
    description: string = ""
    skills: string[] = []

    constructor(
        startDate: string = "",
        endDate: string = "",
        role: string = "",
        company: string = "",
        description: string = "",
        skills: string[] = []
    ) {
        this.startDate = startDate
        this.endDate = endDate
        this.role = role
        this.company = company
        this.description = description
        this.skills = skills
    }
}