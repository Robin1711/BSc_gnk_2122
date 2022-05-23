import Papa from "papaparse";
import csvFile from "../resources/vragen.csv"

/**
 * Service for question retrieval from vragen.csv
 */
export class QuestionService {

    constructor() {}

    async loadData() {
        return new Promise(resolve => {
            Papa.parse(csvFile, {
                delimiter: ',',
                download: true,
                header: true,
                dynamicTyping: true,
                complete: results => {
                    console.log(results.data)
                    resolve(results);
                }
            });
        });

        //     Papa.parsePromise = function (csvFile) {
        // return new Promise(function (complete, error) {
        //     Papa.parse(csvFile, {complete, error});
        // });
    }

    async getAllQuestions() {
        return this.loadData()
    }

    async getQuestionById() {}
}
