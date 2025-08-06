//* description es un JSON estructurado específico para editores de texto enriquecido basados en ProseMirror (como Tiptap)
// 1 Supabase → Almacena JSON.
// 2 Tiptap → Convierte JSON → HTML.
// 3 Tailwind Typography → Estiliza el HTML automáticamente.

import { EditorContent, useEditor } from "@tiptap/react";
import type { JSONContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import type { Json } from "../../supabase/supabase";

interface Props {
  content: JSONContent | Json; //Json supabase
}

export const ProductDescription = ({ content }: Props) => {
  const editor = useEditor({
    extensions: [StarterKit], // Extensiones básicas (párrafos, headings, listas)
    content: content as JSONContent, // Contenido JSON a renderizar
    editable: false, // Solo lectura (no editable)
    editorProps: {
      attributes: {
        class: "prose prose-sm sm:prose-base max-w-none", // Clases de Tailwind Typography
      },
    },
  });

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-center mb-8 underline">
        Descripcion
      </h2>
      <EditorContent editor={editor} />
    </div>
  );
};
