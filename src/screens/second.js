import React from "react";
import { Link } from "react-router-dom";

export default function SecondComponent() {
  return(
    <div>
      Second Component
      <Link to="/third">third</Link>
    </div>
  )
}