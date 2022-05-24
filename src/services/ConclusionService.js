import Papa from "papaparse";
import csvFile from "../resources/mock_conclusies.csv"

/**
 * Service for conclusion retrieval from conclusies.csv
 */
export class ConclusionService {

    constructor() {}

    async loadConclusions() {
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

    async getAllConclusions() {
        return this.loadConclusions()
    }

    async getConclusionById(id) {
        console.log("CONCLUSIONSERVICE")
        return this.loadConclusions()
            .then((result) => {
                console.log(result)
                const conclusions = result.data;
                return conclusions.find((q) => q.Id === id)
            })
            .catch(err => console.log({ message:"ERROR", error: err }));
    }
}
