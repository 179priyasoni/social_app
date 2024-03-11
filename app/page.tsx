"use client";

import Stories from "./component/Stories";

export default function Home() {
  return (
    <div>
      <div className="max-w-fit w-fit overflow-x-auto">
        <Stories />
      </div>
    </div>
  );
}
