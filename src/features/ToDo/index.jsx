import React from "react";
import PropTypes from "prop-types";
import { Route, Router, Routes } from "react-router-dom";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";
import NotFound from "../../components/NotFound";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  return (
    <div>

        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/:todoId" element={<DetailPage />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
 
    </div>
  );
}

export default TodoFeature;
