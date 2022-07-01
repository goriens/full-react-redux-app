import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

export const FilterSort = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const urlCategory = searchParams.getAll("category");
  const urlSort = searchParams.getAll("sortBy");
  const [category, setCategory] = useState(urlCategory || []);
  const [sortBy, setSortBy] = useState(urlSort || "");

  const handleCheckBox = (e) => {
    const option = e.target.value;
    let newCategory = [...category];
    if (category.includes(option)) {
      //remove it
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      newCategory.push(option);
    }
    setCategory(newCategory);
  };

  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  useEffect(() => {
    if (category || sortBy) {
      let params = {};
      category && (params.category = category);
      sortBy && (params.sortBy = sortBy);
      setSearchParams(params);
    }
  }, [setSearchParams, category, dispatch, sortBy]);

  //console.log(sortBy);
  //  useEffect(() => {
  //    if (sortBy) {
  //      const params = {
  //        category: searchParams.getAll("category"),
  //        sortBy,
  //      };
  //
  //      setSearchParams(params);
  //    }
  //  }, [setSearchParams, sortBy, searchParams, dispatch]);

  return (
    <div>
      <h3>Filters</h3>
      <div>
        <div>
          <input
            type="checkbox"
            value="Novel"
            defaultChecked={category.includes("Novel")}
            onChange={handleCheckBox}
          />
          <label>Novel</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Science_fiction"
            defaultChecked={category.includes("Science_fiction")}
            onChange={handleCheckBox}
          />
          <label>Science_fiction</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Motivational"
            defaultChecked={category.includes("Motivational")}
            onChange={handleCheckBox}
          />
          <label>Motivational</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Thriller"
            defaultChecked={category.includes("Thriller")}
            onChange={handleCheckBox}
          />
          <label>Thriller</label>
        </div>
      </div>
      <h3>Sorting</h3>
      <div onChange={handleSort}>
        <input
          type="radio"
          value="asc"
          name="sortBy"
          defaultChecked={sortBy === "asc"}
        />
        Ascending
        <br />
        <input
          type="radio"
          value="desc"
          name="sortBy"
          defaultChecked={sortBy === "desc"}
        />
        Descending
      </div>
    </div>
  );
};
//01:31
