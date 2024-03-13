"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

// ______________________________________________________________________
function isInvalidText(text) {
  return !text || text.trim() === "";
}

// ______________________________________________________________________
export async function shareMeal(formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    throw new Error("Invalid meal data");
  }

  // console.log("🪚 meal:", JSON.stringify(meal));
  // console.log("🪚 meal:", meal);
  await saveMeal(meal);

  redirect("/meals");
}
