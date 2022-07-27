import styled from "styled-components";

const Login = (props) => {
    return(
    <Container>
        <Content>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg" />
                <SignUp>GET ALL THERE</SignUp>
                <Description>© 2022 STAR. All Rights Reserved. HBO, Home Box Office and all related channel and programming logos are service marks of, and all related programming visuals and elements are the property of, Home Box Office, Inc. All rights reserved.</Description>
                <CTALogotTwo src="/images/cta-logo-two.png" />
            </CTA>
            <BgImage/>
        </Content>
    </Container>
    )
};

//basically what styled components do is-> like we have to add CSS to Login.js then we can write everything related to Login.js inside Login.js only.

const Container = styled.section`
    overflow:hidden;
    display:flex;
    flex-direction:column;
    height:100vh;
    text-align:center;
`;

const Content = styled.div`
    margin-bottom:10vw;
    width:100%;
    position:relative;
    min-height:100vh;
    box-sizing:border-box;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    height:100%;
    padding:80px 40px;
`;

const BgImage = styled.div`
    height:100%;
    background-size:cover;
    background-repeat:no-repeat;
    background-image: url('images/login-background.jpg');
    background-position:center;
    position: absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    z-index:-1;//to give background less priority
`;

const CTA = styled.div`
    margin-bottom:12px;
    max-width:650px;

    display:flex;
    flex-direction:column;
    justify-content:center;

    flex-wrap:wrap;

    align-items:center;
    text-align:center;
    margin-top:0;

    margin-left:auto;
    margin-right:auto;

    transition-timing-function:ease-out;
    transition:opacity 0.2s;
    width:100%
`;

const CTALogoOne = styled.img`
    margin-bottom:12px;
    max-width:600px;
    min-height:1px;
    display:block;
    width:100%;
`;

const SignUp = styled.a`
    font-weight:bold;
    color:#f9f9f9;
    background-color:#0065e5;
    width:100%;
    margin-bottom:12px;
    letter-spacing:1.5px;
    padding:16.5px 0;
    border:1px solid white;
    border-radius:4px;
    font-size:18px;

    :hover{
        background-color:#0483ee;
    }

`;

const Description = styled.p`
    font-size:11px;
    color:hsla(0 , 0%, 95.3% , 1);
    margin:0 0 24px;
    line-height:1.5;
    letter-spacing:1.3px
`;

const CTALogotTwo = styled.img`
    margin-bottom:12px;
    width:100%;
    max-width:600px;
    display:inline-block;
    vertical-align:bottom;
`;

export default Login;



