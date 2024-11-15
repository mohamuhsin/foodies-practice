import fs from "node:fs";

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

// fetch all meals from the database
export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    //throw new Error("loading meals failed");
    return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
    return db.prepare("SELECT * FROM meals WHERE slug=?").get(slug);
}

export async function saveMeal(meal) {
    meal.slug = slugify(meal.title, { lower: true });
    meal.instructions = xss(meal.instructions);

    const extension = meal.image.name.split(".").pop(); // popping out the image extension
    const fileName = `${meal.slug}.${extension}`;

    const stream = fs.createWriteStream(`public/images/${fileName}`); //creates a stream that allows us to write data to a certain file
    const bufferedImage = await meal.image.arrayBuffer();

    stream.write(Buffer.from(bufferedImage), (error) => {
        throw new Error("Saving image failed");
    });

    meal.image = `/image/${fileName}`;

    db.prepare(
        `
        INSERT INTO MEALS
        (title, summary, instructions, creator, creator_email, image, slug)
        VALUES(
            @title,
            @summary,
            @instructions,
            @creator,
            @creator_email,
            @image,
            @slug
        )`
    ).run(meal);
}
