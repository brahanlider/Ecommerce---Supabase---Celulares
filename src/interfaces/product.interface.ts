// import type { JSONContent } from "@tiptap/react";
import type { Json } from "../supabase/supabase";

export interface Color {
  name: string;
  color: string;
  price: number;
}

export interface VariantProduct {
  id: string;
  stock: number;
  price: number;
  storage: string;
  color: string;
  color_name: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  // colors:{}[], /// nose puso
  slug: string;
  features: string[];
  description: Json; // SupaBase => Json __🔽TS JSONContent =>  @tiptap/react
  // price: number;  /// nose puso
  images: string[];
  created_at: string;
  variants: VariantProduct[];
}

export interface PreparedProducts {
  id: string;
  name: string;
  brand: string;
  slug: string;
  features: string[];
  description: Json; // SupaBase => Json __🔽TS JSONContent =>  @tiptap/react
  images: string[];
  created_at: string;
  price: number;
  colors: {
    name: string;
    color: string;
  }[];
  variants: VariantProduct[];
}
