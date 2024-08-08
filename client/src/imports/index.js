// script for imports all pages 

// dependences
import React, { useState, useEffect, useRef, useMemo, useCallback, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


// img
import Logo from "../assets/img/logo.png";
import Menu from "../assets/img/menu.png";
import Facebook from "../assets/img/facebook_1.png";
import Youtube from "../assets/img/youtube.png";
import Search from "../assets/img/search.png";
import Menu_Vertical from "../assets/img/menu-vertical.png";



// mp4
import Video_bg from "../assets/mp4/fondo_circuits.mp4";


// global context 
import Global_Context from "../components/global_context/context";
import { Provider_Context } from "../components/global_context/provider";

// pages
import DFC from "../pages/dfc/dfc";
import Revista from "../pages/revista/revista";
import Terms from "../pages/terms/terms";
import Lost from "../pages/lost";
import Home from "../pages/home/home";


// components 
import Button from "../components/elements/button";
import Footer_Home from "../pages/home/componets/footer";

// utils
import useScroll from "../components/custom_hooks/useScroll";
import useCarousel from "../components/custom_hooks/useCarousel";
import useFuntions from "../components/custom_hooks/useFuntions";

// exports
export { React, useState, useEffect, useRef, useMemo, useCallback, useContext, Router, Routes, Route, Link };
export { Global_Context, Provider_Context };
export { Logo, Menu, Facebook, Youtube, Search, Menu_Vertical };
export { Video_bg };
export { Terms, Revista, DFC, Lost, Home };
export { Button, Footer_Home };
export { useScroll, useCarousel, useFuntions };