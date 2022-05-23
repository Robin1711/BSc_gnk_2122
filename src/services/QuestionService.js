import Papa from "papaparse";
import csvFile from "../resources/vragen.csv"

/**
 * Service for question retrieval from vragen.csv
 */
export class QuestionService {

    constructor() {}

    async loadQuestions() {
        return new Promise(resolve => {
            Papa.parse(csvFile, {
                delimiter: ',',
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
