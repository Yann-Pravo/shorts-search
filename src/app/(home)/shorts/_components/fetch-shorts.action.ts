"use server";

import { z } from "zod";
import { Short, ShortCategories } from "@/lib/types";
import { redirect } from "next/navigation";

const fetchShortsSchema = z.string().optional();

type ReturnType = {
  data?: Short[];
  errors?: Record<string, unknown>;
};

export async function fetchShortsAction(
  category?: string
): Promise<ReturnType> {
  const parsed = fetchShortsSchema.safeParse(category);

  if (!parsed.success) {
    return {
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  // If the category given in query params is not valid, redirect to /shorts
  if (
    category !== undefined &&
    !ShortCategories[category as keyof typeof ShortCategories]
  ) {
    redirect("/shorts");
  }

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "";
  const data = await fetch(
    `${API_URL}${category ? `?category=${category}` : ""}`,
    {
      mode: "no-cors", // Remove when API accepts cross origin
    }
  );

  const shorts: Short[] = await data.json();
  return { data: shorts };
}
