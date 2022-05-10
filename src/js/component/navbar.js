import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Login</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact us!</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Add your own recipe</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Recipes per category
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Breakfast</a></li>
            <li><a class="dropdown-item" href="#">Beef</a></li>
            <li><a class="dropdown-item" href="#">Chicken</a></li>
			<li><a class="dropdown-item" href="#">Desserts</a></li>
			<li><a class="dropdown-item" href="#">Goat</a></li>
			<li><a class="dropdown-item" href="#">Lamb</a></li>
			<li><a class="dropdown-item" href="#">Pork</a></li>
			<li><a class="dropdown-item" href="#">Seafood</a></li>
			<li><a class="dropdown-item" href="#">Side</a></li>
			<li><a class="dropdown-item" href="#">Starter</a></li>
			<li><a class="dropdown-item" href="#">Vegetarian</a></li>
			<li><a class="dropdown-item" href="#">Vegan</a></li>
			<li><a class="dropdown-item" href="#">Miscellaneous</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

	);
};
