import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import email from "@emailjs/browser";


import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { addSign } from "./signSlice";
import img1 from "../image/tv.png";
import img2 from "../image/download.jpg";
import img3 from "../image/create_profile.png";
import img4 from "../image/device.png";
import img5 from "../image/backNet.jpg";
import vid1 from "../video/vid1.mp4";
import vid2 from "../video/vid2.m4v";
import Dow from "../video/download-icon.gif";
import img6 from "../image/boxshot.png";
import "./mui-styles.css";
import Details from "./Details";
import Ready from "./Ready";
import Bottom from "./Bottom";
import Typography from '@mui/material/Typography'


export default function Home() {
    const [switchPage, setSwitchPage] = useState(true);
    const [num, setNum] = useState(0);
    const [formValues, setFormValues] = useState({ user_email: "", get_code: "" });
    const form = useRef();
    const dispatch = useDispatch();
    const data = [
        {
            title: "What is Netflix?",
            summary: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
        },
        {
            title: "How much does Netflix cost?",
            summary: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts."
        },
        {
            title: "Where can I watch?",
            summary: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
        },
        {
            title: "How do I cancel?",
            summary: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
        },
        {
            title: "What can I watch on Netflix?",
            summary: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
        },
        {
            title: "Is Netflix good for kids?",
            summary: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
        }
    ]

    useEffect(() => {
        randomClick();
    }, []);

    function randomNumberInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const randomClick = () => {
        setNum(randomNumberInRange(1565, 5546));
    };

    const sendEmail = (e) => {
        e.preventDefault();
        email
            .sendForm("service_3bw0bgl", "template_1a8v3iu", form.current, "9XxTjzieZLyjIsbLa")
            .then(
                (result) => {
                    console.log(result.text);
                    setSwitchPage(false);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const codeChecker = () => {
        if (num === parseInt(formValues.get_code, 10)) {
            setSwitchPage(true);
            alert("done");
        } else {
            alert("please enter a valid code");
        }
    };

    const handleSubmit = (event) => {
        // const { name, pass } = formValues;
        // checkUser(formValues);
        dispatch(addSign(formValues));
    };

    return (
        <>
            <div style={{ backgroundColor: "black", fontFamily: "Ubuntu" }}>
                {switchPage ? (
                    <section className="my_home">
                        {/* <div className="background">
                            <div className="top">
                                <Link to="./">
                                    <img className="logo" src="https://pngimg.com/uploads/netflix/netflix_PNG25.png" alt="no img" />
                                </Link>
                                <div className="navSS">
                                    <select className="selectlanguage">
                                        <option value="English">English</option>
                                        <option value="Hindi">Hindi</option>
                                    </select>
                                    <Link to="./signIn">
                                        <button className="signbutton">Sign In</button>
                                    </Link>
                                </div>
                            </div>

                            <div className="backdark1">
                                <div className="searchEmail">
                                    <div className="heading1">
                                        <h1>Unlimited Movies, TV<br /> &ensp; Shows and more.</h1><br /><h5>&ensp;&ensp; Watch anywhere. cancel anytime.</h5><h6>&ensp;&ensp;<br />Ready to watch? Enter your email to create or restart your membership.</h6>
                                    </div>
                                    <form ref={form} onSubmit={sendEmail}>
                                        <div className="searchEmail_base">
                                            <input type="email" name="user_email" placeholder="Email" required onChange={handleInputChange} value={formValues.user_email} className="inputsearch" />
                                            <button className="getstated" onClick={sendEmail}>
                                                Get Started <div className="arrow"><ArrowForwardIosIcon /></div>
                                            </button>
                                            <input type="text" value={num} name="code" className="hide_Input" readOnly />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="back">
                                <img src={img5} alt="no img" />
                            </div>
                        </div> */}



                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", paddingY: "24px", flexWrap: "wrap", alignItems: "center", width: "100%", zIndex: "9999" }}>
                                <div></div>
                                <Link to="./">
                                    <img  src="https://pngimg.com/uploads/netflix/netflix_PNG25.png" alt="no img" className="landingHeadingLogo"/>
                                </Link>
                                <div></div>
                                <div></div>
                                <div style={{ display: "flex", gap: "8px", }}>
                                    <select name="" id="" style={{ backgroundColor: "black", color: "white", width: "100px", height: "40px",cursor:"pointer" }}>
                                        <option value="English">English</option>
                                        <option value="Hindi">Hindi</option>
                                    </select>
                                    <Link to="./signIn"><button style={{ height: "40px", border: "none", borderRadius: "4px", width: "60px", backgroundColor: "red", color: "white",cursor:"pointer" }}>Sign In</button></Link>
                                </div>
                                <div></div>
                            </div>
                            <div style={{ width: "90%", maxWidth: "140vh", height: "70vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "8px", flexDirection: "column", zIndex: "9999" }}>
                                <Typography variant="h2" align="center" className="landingHeading">
                                    <b>
                                        The biggest Indian hits. The best Indian stories. All streaming here.
                                    </b>
                                </Typography>
                                <Typography variant="h6" align="center" style={{ color: "white", marginTop: "10px" }}>
                                    Watch anywhere. Cancel anytime.
                                </Typography>
                                <Typography variant="h6" align="center" style={{ color: "white" }} className="landingHeading1">
                                    Ready to watch? Enter your email to create or restart your membership.
                                </Typography>
                                <form ref={form} onSubmit={sendEmail} style={{display:"flex",gap:"8px",marginTop:"8px",width:"100%",flexWrap:"wrap",justifyContent:"center"}}>
                                    <input type='email' placeholder="Email address" style={{height:"40px", width:"80%",maxWidth:"54vh",borderRadius:"4px"}}  required/>
                                    <button style={{ border: "none", backgroundColor: "red", color: "white", fontWeight: "500", borderRadius: "4px", width: "24vh", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontSize: "20px",cursor:"pointer" }} className="landingHeadingButton" type="submit">Get Started <ArrowForwardIosIcon /></button>
                                    <input type="text" value={num} name="code" style={{display:"none"}} readOnly />
                                </form>
                            </div>
                            
                            <div
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    backgroundImage: `url(${img5})`,
                                    filter: "brightness(0.5)",

                                }}
                            ></div>
                        </div>
                        <hr className="my_hr" />

                        {/* home first look end */}
                        <div className="container">
                            <div className="imageFirsthead">
                                <div className="image1head_base">
                                    <h1>Enjoy on your TV.</h1> <h3>watch on smart TVs, PlayStation, Bbox, Chromecast, Apple TV, Blu-ray Players and more.</h3>
                                </div>
                            </div>
                            <div className="imvi">
                                <img className="firstimg_base" src={img1} alt="no img" />
                                <div className="vidfirst">
                                    <video className="firstvid" src={vid1} autoPlay loop></video>
                                </div>
                            </div>
                        </div>
                        <hr className="my_hr" />
                        <div className="container">
                            <div className="imgtwoparent">
                                <img className="imgtwo_base" src={img2} alt="no img" />
                                <div className="boxshot">
                                    <img className="boximg" src={img6} alt="no img" />
                                    <div className="conbox">
                                        <div>
                                            <h3>Stranger Things</h3>
                                            <h4 className="conboxH">Downloading...</h4>
                                        </div>
                                        <img className="myDownloading" src={Dow} alt="downloading" />
                                    </div>
                                </div>
                            </div>
                            <div className="imageFirsthead">
                                <div className="image1head_base">
                                    <h1 className="head1">Download your shows to watch offline.</h1> <h3 className="head1">save your favorites easily and always have something to watch.</h3>
                                </div>
                            </div>
                        </div>
                        <hr className="my_hr" />
                        <div className="container">
                            <div className="imageFirsthead_next">
                                <div className="image1head_base">
                                    <h1>Watch everywhere.</h1> <h3>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h3>
                                </div>
                            </div>
                            <div className="imvi_next">
                                <img className="firstimg_basenext" src={img4} alt="no img" />
                                <div className="vidfirst_next">
                                    <video className="firstvidnext" src={vid2} autoPlay loop></video>
                                </div>
                            </div>
                        </div>
                        <hr className="my_hr" />
                        <div className="container">
                            <div className="image4up">
                                <img className="firstimg_basenext" src={img3} alt="" />
                            </div>
                            <div className="imageFirsthead_next">
                                <div className="image1head_base">
                                    <h1 className="main1">Create profiles for children.</h1><h3 className="main2">Send children on adventures with their favorite characters in a space made just for them—free with your membership.</h3>
                                </div>
                            </div>
                        </div>
                        <hr className="my_hr" />
                        <div className="askQ"><h1>Frequently Asked Questions</h1></div>
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            {data.map(({ title, summary }) => (
                                <Details title={title} summary={summary} />
                            ))}

                        </div>
                    </section>
                ) : (
                    <div className="parent_signUp">
                        <div className="navigation_signUP">
                            <Link to="./">
                                <img className="logo" src="https://pngimg.com/uploads/netflix/netflix_PNG25.png" alt="no img" />
                            </Link>
                            <hr />
                            <div className="main_SignUp">
                                <div className="my_code_div">
                                    <h2>Enter Verification Code</h2>
                                    <div>
                                        <input type="password" placeholder="xxxx" name="get_code" required onChange={handleInputChange} />
                                        <button onClick={codeChecker}>Enter</button>
                                    </div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <Ready />
                <hr className="my_hr" />
                <Bottom />
            </div>
        </>
    );
}
