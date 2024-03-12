import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

// ______________________________________________________________________
export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // throw new Error("Loading Meals failed");

  return db.prepare("SELECT * FROM meals").all();
}

// ______________________________________________________________________
export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

// ______________________________________________________________________
export function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  return db
    .prepare("INSERT INTO meals VALUES (?, ?, ?, ?, ?, ?, ?, ?)")
    .run(
      meal.id,
      meal.slug,
      meal.title,
      meal.image,
      meal.summary,
      meal.instructions,
      meal.creator,
      meal.creator_email,
    );
}
