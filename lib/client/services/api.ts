export class PostApiService {
  static async fetchFormulaById(id: string) {
    const response = await fetch("/api/formulas/save-formula", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    return {
      response,
    };
  }
}
