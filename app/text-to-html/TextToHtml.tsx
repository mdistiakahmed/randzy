"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css"; // Import Quill's styles

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import beautify from "js-beautify";

export default function TextToHtmlConverter() {
  const [editorHtml, setEditorHtml] = useState("");
  const [formattedHtml, setFormattedHtml] = useState("");

  // Format & highlight HTML
  useEffect(() => {
    const beautifiedHtml = beautify.html(editorHtml, {
      indent_size: 4,
      wrap_attributes: "auto",
      preserve_newlines: true,
    });
    

    const highlightedCode = hljs.highlight(beautifiedHtml, {
      language: "html",
    }).value;

    setFormattedHtml(highlightedCode);

    // setTimeout(() => {
    //   document
    //     .querySelectorAll("pre code")
    //     .forEach((el) => hljs.highlightElement(el as any));
    // }, 100);
  }, [editorHtml]);

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: [] }],
      ["blockquote", "code-block"],
      ["link", "image"],
    ],
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(formattedHtml);
      alert("HTML copied to clipboard!");
    } catch (error) {
      console.error("Failed to copy", error);
    }
  };

  const downloadHtmlFile = () => {
    const quillCss = `
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/quill@1.3.7/dist/quill.snow.css">
    <style>
      body { font-family: Arial, sans-serif; padding: 20px; line-height: 1.6; }
      .ql-editor { border: none !important; padding: 0 !important; }
    </style>
  `;

    const completeHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Generated HTML</title>
        ${quillCss}
      </head>
      <body>
        <div class="ql-editor">
          ${formattedHtml}
        </div>
      </body>
      </html>
    `;

    const blob = new Blob([completeHtml], { type: "text/html" });
    const url = URL.createObjectURL(blob);

    window.open(url, "_blank");

    const a = document.createElement("a");
    a.href = url;
    a.download = "generated.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col justify-between md:flex-row py-2 gap-2">
      {/* Left Side - Text Editor */}
      <div className="md:w-1/2 w-full flex flex-col">
        <h2 className="text-lg font-semibold mb-2 text-center">Rich Text Editor</h2>
          {/* Toolbar should stay fixed */}
          <div className=" bg-white p-2">
            <ReactQuill
              value={editorHtml}
              onChange={setEditorHtml}
              modules={modules}
              className="h-[400px] w-[370px] md:h-[450px] md:w-[400px] 2xl:w-[500px] 2xl:h-[500px] overflow-auto"
              placeholder="Write something..."
            />
          </div>
        </div>
      

      {/* Right Side - Generated HTML Code */}
      <div className="md:w-1/2 w-full flex flex-col border-l">
        <h2 className="text-lg font-semibold mb-2 text-center">Generated HTML Code</h2>
        <div className="md:self-end bg-white border h-[400px] w-[370px] md:h-[450px] md:w-[400px] 2xl:w-[500px] 2xl:h-[500px] overflow-auto p-3">
          <pre className="overflow-auto">
            <code className="language-html" dangerouslySetInnerHTML={{ __html: formattedHtml }} />
          </pre>
        </div>

        <div className="flex space-x-2 mt-2 items-center justify-center">
          <button
            onClick={copyToClipboard}
            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 text-sm rounded"
          >
            Copy HTML
          </button>
          <button
            onClick={downloadHtmlFile}
            className="bg-green-500 hover:bg-green-600 text-white text-sm px-3 py-1 rounded"
          >
            Download HTML
          </button>
        </div>
      </div>
    </div>
  );
}
