import React from "react";
import "./card.css";
import { Arrow, Bgpattern, Women, Bgbox } from "./utils/svgs";

function Card(props) {
    const [state, setState] = React.useState(0);
    return (
        <div className="box">
            <div className="left-side">
                <div className="bg-pattern">
                    <Bgpattern />
                

                    <div className="bg-women">
                        <Women />
                    </div>
                    <div className="bg-box">
                        <Bgbox />
                    </div>

                </div>
            </div>

            <div className="right-side">

                <h1 className="heading"> FAQ</h1>

                <div className="para-1">
                    <div className="heading-1" onClick={()=> setState(0)} >
                        How many team members can I invite? <Arrow className={state==0?"arrow close":"arrow open"} />
                    </div>
                   {state==0 && <div className="sub-heading-1">
                        <p> You can invite up to 2 additional users on the Free plan. There is no limit on
                            team members for the Premium plan.</p>
                    </div> }
                </div>
                <hr />


                <div className="para-2">
                    <div  className={state==1? "heading-1 Bold":"heading-1"} onClick={()=> setState(1)}>
                        What is the maximum file upload size? <Arrow className={state==1?"arrow close":"arrow  open"}  /> 
                    </div>
                    {state==1 &&  <div className="sub-heading-1">
                        <p>No more than 2GB. All files in your account must fit your allotted storage space.</p>
                    </div>}
                </div>
                <hr />

                <div className="para-3">
                    <div className="heading-1" onClick={()=> setState(2)}>
                        How do I reset my password? <Arrow className={state==2?"arrow close":"arrow open"} />
                    </div>
                    {state==2 && <div className="sub-heading-1">
                        <p> Click “Forgot password” from the login page or “Change password” from your profile page.A reset link will be emailed to you.</p>
                    </div>}
                </div>
                <hr />

                <div className="para-4">
                    <div className="heading-1" onClick={()=> setState(3)}>
                        Can I cancel my subscription? <Arrow className={state==3?"arrow close":"arrow open"} />
                    </div>
                    {state==3 && <div className="sub-heading-1">
                        <p> Yes! Send us a message and we’ll process your request no questions asked.</p>
                    </div>}
                </div>
                <hr />

                <div className="para-5">
                    <div className="heading-1" onClick={()=> setState(4)}>
                        Do you provide additional support? <Arrow className= {state==4?"arrow close":"arrow open"} />
                    </div>
                    {state==4 &&  <div className="sub-heading-1">
                        <p>Chat and email support is available 24/7. Phone lines are open during normal business hours.</p>
                    </div>}
                </div>
                <hr />

            </div>

        </div>
    );
}
export default Card;