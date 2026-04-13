// Prove 
import React, { useState } from "react";
import AlertFeedback from "@/ui/AlertFeedback";

export default function Prove() {

  const [show, setShow] = useState(true);
  return (
    <div className="grid grid-cols-2 gap-4 p-4 bg-gray-100 h-dvh">

      {show && (
        <AlertFeedback
          message="lorem ipsum dolor sit amet!"
          onClose={() => setShow(false)}
        />
      )}

    </div>
  );
}
