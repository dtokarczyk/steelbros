"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const wrapperClasses =
  "markdown-content [&_p]:text-body-color [&_p]:mb-4 [&_h2]:text-white [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-6 [&_h2]:mb-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-body-color [&_ol]:list-decimal [&_ol]:pl-6 [&_a]:text-primary [&_a]:underline [&_strong]:text-white";

export default function Markdown({ children }: { children: string }) {
  return (
    <div className={wrapperClasses}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>
    </div>
  );
}
