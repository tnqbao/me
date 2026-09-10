"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <button type="button" className="button button-primary print-button" onClick={() => window.print()}>
      <Printer size={17} aria-hidden="true" /> Print / Save PDF
    </button>
  );
}
