"use server";

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

  // console.log("🪚 meal:", JSON.stringify(meal));
  // console.log("🪚 meal:", meal);
}
