import { Suspense } from "react";
import Link from "next/link";

import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import classes from "./page.module.css";

// ______________________________ METADATA ___________________________
export const metadata = {
  title: "All Meals",
  description: "Browse the delicious meals share by our vibrant community.",
};

// ______________________________________________________________________
async function Meals() {
  // Fetch data
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

// ______________________________________________________________________
export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipes and cook it yourself.</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favorite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Loading...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
