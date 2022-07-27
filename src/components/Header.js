import styled from "styled-components"
import { auth , provider} from "../firebase";
import {useDispatch , useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import { selectUserName , selectUserEmail , selectUserPhoto , setUserLoginDetails , setSignOutState } from "../features/user/userSlice";
import { useEffect } from "react";

const Header = (props) =>{

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const username = useSelector(selectUserName)
    const email = useSelector(selectUserEmail)
    const photo = useSelector(selectUserPhoto)

    //important function
    useEffect( () =>{
        auth.onAuthStateChanged(async (user) => {
            if(user){
                setUser(user);
                navigate("/home");
            }
        })
    }, [username] ); 
    //this function only runs when the variable username is updated

    //built in function for authentication
    const handleAuth = () => {

        if(!username){

            auth
            .signInWithPopup(provider)
            .then((result) => {
                setUser(result.user);
                //this will allow us to set a new user , we need to create this setUser function
            })
            .catch((error) => {
                alert(error.message);
            });
        }
        else if(username){
            auth
            .signOut()
            .then(()=>{
                dispatch(setSignOutState());
                navigate("/");
            })
            .catch((error) => {
                alert(error.message);
            });
        }
    };

    // takes user as argument 
    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name:user.displayName,
                email:user.email,
                photo:user.photoURL,
            })
        );
    };


    return(
        <Nav>
            <Logo>
                <img  src = "/images/logo.svg"/>
            </Logo>

            {/* //if the user is not signed in yet then show the button Login else */}
            {!username ? (
            <Login onClick={handleAuth}>Login</Login> 
            //else show everything written below
            ):( 
            <>
            

            <NavMenu>
                
                <a href="/home">
                    <img src="/images/home-icon.svg" alt="Home"/>
                    <span>HOME</span>
                </a>

                <a href="/search">
                    <img src="/images/search-icon.svg" alt="Search"/>
                    <span>SEARCH</span>
                </a>

                <a href="/watchlist">
                    <img src="/images/watchlist-icon.svg"/>
                    <span>WATCHLIST</span>
                </a>

                <a href="/originals">
                    <img src="/images/original-icon.svg"/>
                    <span>ORIGINALS</span>
                </a>
                
                <a href="/movies">
                    <img src="/images/movie-icon.svg"/>
                    <span>MOVIES</span>
                </a>

                <a href="/series">
                    <img src="/images/series-icon.svg"/>
                    <span>SERIES</span>
                </a>
                
            </NavMenu>

            <SignOut>
                <UserImg src = {photo} alt = {username}/>
                <DropDown>
                    <span onClick={handleAuth}>Sign Out</span>
                </DropDown>
            </SignOut>

            </>
           ) }

            {/* <Login onClick={handleAuth} >Login</Login>         */}

        </Nav>
    )
}

const Nav = styled.nav`
    position :fixed;
    // min-height: 70px;
    background-color:#090b13;
    left:0;
    right:0;
    top:0;
    height:70px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0 36px;
    letter-spacing:16px;
    z-index:3;
`;

const Logo = styled.a`
    width:80px;
    padding:0;
    margin-top:4px;
    max-height:70px;
    display:inline-block;
    img{
        width:100%;
        display:block;
    }
`
const NavMenu = styled.div`
    display:flex;
    align-items:center;
    flex-flow:row nowrap;
    height:100%;
    justify-content:flex-end;
    padding:0px;
    margin:0px;
    margin-right:auto;
    margin-left:25px;
    position:relative;

    @media (max-width: 768px){
        display:none;
    }

    a{
        display:flex;
        align-items:center;
        padding:0 12px;
    

    span{
        font-size:13px;
        letter-spacing:1.42px;
        padding:5px 0px 0px;
        position:relative;
        white-space:nowrap;

        //creating the underline thing 
        &:before{
            background-color:rgb(249,249,249);
            left:0px;
            right:0px;
            bottom:-6px;
            height:2px;
            opacity:0;
            position:absolute;
            visibility:hidden;
            border-radius:0px 0px 4px 4px;
            content: "";
            width:auto;
            transform-origin:left;
            transform:scaleX(0);
            transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
        }
    }

    &:hover{
        span:before{
            transform:scaleX(1);
            visibility:visible;
            opacity:1 !important;
        }
    }
}

    img{
        height:20px;
        min-width:20px;
        width:20px;
        z-index:auto;
    }

`;

const Login = styled.a`
    padding:8px 16px;
    background-color: rgba(0,0,0,0.6);
    text-transform:uppercase;
    letter-spacing:1.5px;
    border:1px solid white;
    border-radius:4px;
    transition: all 200ms ease 0s;

    &:hover{
        background-color:white;
        color:rgba(0,0,0,1);
        border-color:transparent;
    }
`;



const DropDown = styled.div`
    position:absolute;
    background: rgb(19,19,19);
    border:1px solid rgba(151,151,151,0.34);
    top:55px;
    right:0px;
    width:105px;
    // width:100%;
    border-radius : 4px;
    padding:10px;
    letter-spacing:3px;
    opacity:0;
    
`

const UserImg = styled.img`
    height:100%;
`;

const SignOut = styled.div`
    position:relative;
    height:48px;
    width:48px;
    display:flex;
    cursor:pointer;
    align-items:center;
    justify-content:center;

    ${UserImg}{
        border-radius:50%;
        width:100%;
        height:100%;
    }
    
    &:hover{
        ${DropDown}{
            opacity:1;
            transition-duration:1s;
        }
    }

`



export default Header;