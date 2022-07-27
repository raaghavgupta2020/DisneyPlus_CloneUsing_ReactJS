import styled from "styled-components";
//we use this Link to move between the pages in  react applications without having the need to refresh 
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";
import { selectNewDisney} from "../features/movie/movieSlice";

const NewDisney = (props) => {
    const movies = useSelector(selectNewDisney);
    return (
        <Container>
            <h4>New to Disney+</h4>
            <Content>
            {movies && //if we have movies
                    movies.map((movie, key) => ( //then map through all the movies 
                        <Wrap key={key}>
                        {movie.id}
                        <Link to={`/detail/` + movie.id}>
                            <img src={movie.cardImg} alt={movie.title} />
                        </Link> 
                        </Wrap> //wrap each movie using the actual index key
                        //detail page has all the details of a particular movie 
            ))}
            </Content>
        </Container>
    )
  };

  const Container = styled.div`
  padding: 0 0 26px;
`

const Content = styled.div`
display: grid;
// grid-gap: 50px;
gap: 50px;
grid-template-columns: repeat(4, minmax(0, 1fr));
grid-template-rows:150px;
grid-auto-rows:150px;
@media (max-width: 768px) {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
`

const Wrap = styled.div`
padding-top:30%;
border-radius:10px;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,rgb(0 0 0 / 73%) 0px 16px 10px -10px;
cursor:pointer;
overflow:hidden;
position:relative;
transition:all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
border: 3px solid rgba(249, 249, 249, 0.1);
  img{
      position:absolute;
      display:block;
      object-fit: cover;
      inset:0px;
      width:100%;
      height:100%;
      z-index: 1;
      top: 0;
      opacity:1;
    }
    &:hover {
      box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,rgb(0 0 0 / 72%) 0px 30px 22px -10px;
      transform: scale(1.05);
      border-color: rgba(249, 249, 249, 0.8);
    }
`;

export default NewDisney;