import React from "react";
import MoviePage from "../MoviePage/MoviePage";

export class SortMovie extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            sort: ''
        }
    }

    handleSort = (e) => {
        this.setState({ sort: e.target.value});
        console.log(e.target.value);
    }

    // sortMovies = () => {
    //     let getRate = props.movie.map(element => {
    //         return element.vote_average
    //     })


    //     let test = sortRating.sort((a,b)=>{
    //         return a - b
    //     })

    //     return (setSortRating(getRate))
    // }

    render() {
        return (
            <div className="search-area">
             <form action="">
                 <input type="text" />
                 <button type="submit">Search</button>
                 <select className="sorting" defaultValue="Sort" onChange={this.handleSort}>
                     <option disable value="Sort">Sort</option>
                     <option value="Rating">Rating</option>
                     <option value="Newest">Newest</option>
                     <option value="Oldest">Oldest</option>
                 </select>
             </form>
         </div>
        );
    }
}

