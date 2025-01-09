"use client";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Link from "next/link";
import React from "react";

const SearchFormReset = () => {
  const query = "Test";
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;
    if (form) form.reset();
  };
  return (
    <div className="flex gap-2">
      {query && (
        <Button type="reset" onClick={reset}>
          <Link href="/" className="search-btn text-white">
            <X className="size-5" />
          </Link>
        </Button>
      )}
    </div>
  );
};

export default SearchFormReset;
