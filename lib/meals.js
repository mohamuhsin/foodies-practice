import sql from "better-sqlite3";

const db = sql("meals.db");

// fetch all meals from the database
export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    //throw new Error("loading meals failed");
    return db.prepare("SELECT * FROM meals").all();
}
