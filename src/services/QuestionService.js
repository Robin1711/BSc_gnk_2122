import Papa from "papaparse";
import csvFile from "../resources/vragen.csv"

/**
 * Service for question retrieval from vragen.csv
 */
export class QuestionService {

    constructor() {
        this.state = {}
        console.log("READING CSV")
    }

    async loadData() {}

    async getAll() {}

    async getQuestionById() {}
}
