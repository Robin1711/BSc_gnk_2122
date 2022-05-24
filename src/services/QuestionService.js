import Papa from "papaparse";
import csvFile from "../resources/vragen.tsv"

/**
 * Service for question retrieval from vragen.tsv
 */
export class QuestionService {

    constructor() {}

    async loadQuestions() {
        return new Promise(resolve => {
            Papa.parse(csvFile, {
                delimiter: '\t',
                download: true,
                header: true,
                dynamicTyping: true,
                complete: results => {
                    resolve(results);
                }
            });
        });
    }

    async getAllQuestions() {
        return this.loadQuestions()
    }

    async getQuestionById(id) {
        return this.loadQuestions()
            .then((result) => {
                const questions = result.data;
                return questions.find((q) => q.Id === id)
            })
            .catch(err => console.log({ message:"ERROR", error: err }));
    }
}
