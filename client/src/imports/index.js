// script for imports all pages 

// dependences
import React, { useState, useEffect, useRef, useMemo, useCallback, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


// img


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


// exports
export { React, useState, useEffect, useRef, useMemo, useCallback, useContext, Router, Routes, Route, Link };
export { Global_Context, Provider_Context };
export { Terms, Revista, DFC,Lost, Home };
export { Button };