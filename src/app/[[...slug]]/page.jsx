import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../../index.css";
import { ClientOnly } from './client'

export function generateStaticParams() {
  return [{ slug: [""] }];
}

export default function Page() {
  return <ClientOnly />;
}
