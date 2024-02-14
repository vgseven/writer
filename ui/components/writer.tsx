"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import { Document } from "@tiptap/extension-document";
import { Paragraph } from "@tiptap/extension-paragraph";
import { Text } from "@tiptap/extension-text";

export function Writer() {
  const editor = useEditor({
    extensions: [StarterKit, Document, Paragraph, Text],
    content: "start typing Here..",
  });
  return <EditorContent className={"my-8"} editor={editor} />;
}
