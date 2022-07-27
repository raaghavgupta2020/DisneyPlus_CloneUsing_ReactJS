import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Recommends from "./Recommends";
import Viewers from "./Viewers";
import Originals from "./Originals";
import Trending from "./Trending";
import { useEffect } from "react";
import { useDispatch , useSelector} from "react-redux";
import db from "../firebase"
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";

const Home  = (props) => {

    const dispatch = useDispatch()
    const username = useSelector(selectUserName)
    let recommends = [];
    let originals = [];
    let newDisneys = [];
    let trendings = [];

    useEffect(()=>{
        db.collection('movies').onSnapshot((snapshot)=>{
            snapshot.docs.map((doc)=>{ //loops through everything in the database
                switch(doc.data().type){
                    case 'recommend':
                        recommends.push({id:doc.id,...doc.data()})
                        // recommends = [...recommends , {id:doc.id,...doc.data()}]
                        break;
                    case 'new':
                        newDisneys.push({id:doc.id,...doc.data()})
                        // newDisneys = [...newDisneys , {id:doc.id,...doc.data()}]

                        break;
                    case 'trending':
                        trendings.push({id:doc.id,...doc.data()})
                        // trendings = [...trendings , {id:doc.id,...doc.data()}]

                        break;
                    case 'original':
                        originals.push({id:doc.id,...doc.data()})
                        // originals = [...originals , {id:doc.id,...doc.data()}]

                        break;
                    }
                });
          
                dispatch(
                  setMovies({
                    recommend: recommends,
                    newDisney: newDisneys,
                    original: originals,
                    trending: trendings,
                  })
                );
              });
            }, [username]);
    //we want this to happen when the user name is updated
    //hence when user logs in , take these things from the redux store and store in store.js

    return (
    <Container>
        {/* //creating a new component fro image slider */}
        <ImgSlider/>
        <Viewers />
        <Recommends />
        <NewDisney/>
        <Originals/>
        <Trending/>
    </Container>
    )
};

const Container = styled.main`
    position:relative;
    background-image:url('images/home-background.png');
    min-height: calc(100vh - 250px);
    //min-hieght is equal to 100% of the viewport height - 250px everytime 
    overflow-x:hidden;
    display:block;
    top:72px;
    padding:0 calc(3.5vw + 5px);
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;

    // &:after {
    //     background: url("/images/home-background.png") center center / cover
    //       no-repeat fixed;
    //     content: "";
    //     position: absolute;
    //     inset: 0px;
    //     opacity: 1;
    //     z-index: -1;
    // }
`

export default Home;