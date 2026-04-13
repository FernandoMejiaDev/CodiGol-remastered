import { useEffect, useState } from "react";

export default function Preview({ code }) {
  return (
    <div
      className=" w-full h-full max-h-[75vh] overflow-y-auto p-1 bg-neutral-950/80 border rounded-2xl "
    >

      < iframe
        value={code}
        className="h-full"
        onChange={(e) => setCode(e.target.value)
        }
        srcDoc={`
            <html>
              <head>
                <script src="https://cdn.tailwindcss.com"></script>
              </head>
              <body class="p-4">
                ${code}
              </body>
            </html>
          `}
      ></ iframe>

    </div>
  );
}
