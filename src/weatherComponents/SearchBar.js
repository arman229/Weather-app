import SearchIcon from "@mui/icons-material/Search";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import React, {useState} from "react";
import {lightGray} from "./WeatherApp";
import {LinearProgress, MenuItem} from "@mui/material";

const apiKey = '3aed1336391c477ea48154514230907';
const SearchBar = ({onDataFromChild}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [loading, setloading] = useState(false);
    const [suggestions, setSuggestions] = useState(null)

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };
    const handleInputChange = (event) => {
        let query = event.target.value
        setSearchValue(query);
        if (query.length > 2) {
            getSearchSuggestion(query)
        }
    };

    function getSearchSuggestion(query) {
        const apiUrl = `https://api.weatherapi.com/v1/search.json?q=${query}&key=${apiKey}`;
        setloading(true)
        fetch(apiUrl)
            .then(resp => resp.json())
            .then(resp => {
                setloading(false)
                setSuggestions(resp)
            }).catch(err => {
            setloading(false)
            setSuggestions(null)
            console.log("Net error:" + err)
        })
    }

    const onSeachClicked = () => {
        console.log("Search Value:", searchValue);
        onDataFromChild(searchValue)
        setSuggestions(null)
    };
    return (
        <>
            <div style={{position:"relative"}}>
                <div style={{display: "flex", alignItems: "center", columnGap: 8}}>

                    <SearchIcon fontSize={"small"} onClick={onSeachClicked}/>
                    <input type={"text"}
                           onFocus={handleFocus}
                           onBlur={handleBlur}
                           onChange={handleInputChange}
                           placeholder={"Search for places ..."}
                           value={searchValue}
                           style={{
                               borderWidth: 0,
                               height: 30,
                               margin: 0,
                               width: 136,
                               flexGrow: 1,
                               border: "none",
                               borderBottom: `2px solid ${isFocused ? lightGray : "#fff"}`,
                               padding: 0,
                               outline: "none",
                               fontWeight: "bold",
                               transition: "border-bottom-color 0.2s ease-in-out"
                           }}/>
                    <MyLocationIcon fontSize={"small"}/>
                </div>
                {loading && <LinearProgress style={{marginTop: 12}}/>}
                {suggestions && <Suggestions  suggestions={suggestions}
                                             onSelect={citySelected => {
                                                 setSearchValue(citySelected);
                                                 setSuggestions(null);
                                                 onDataFromChild(citySelected)
                                             }}
                />}
            </div>

        </>
    )
}
export {SearchBar}
const Suggestions = ({suggestions, onSelect}) => {
    return (<div style={{position: "absolute",backgroundColor:"white",width:"100%"}}>
        {suggestions.map(item => {
            return <MenuItem onClick={() => onSelect(item.name)} value={item.name}>{item.name}</MenuItem>
        })}
    </div>)
}
