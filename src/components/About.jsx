import { Link } from "react-router-dom";

const About = () => {
    return(
        <div style={{color:"black", backgroundColor:"white", borderRadius:"10px", textAlign:"left", padding:"1rem"}}>
            <h2>About</h2>
            <p>Welcom to Maitre d'Hotel by Jules Desmet</p>

            <h3>Table overview and ordering Menu</h3>
            <p>on the <Link to={"/"}>home</Link> page there 's an overview of all tables, currently have no orders, red tables do, the initial state shows multiple examples of both of these cases</p>
            <p>Click on a table to see the ordering menu, there is the option to:</p>
            <ul>
                <li>add and remove products</li>
                <li>change quantity of these products</li>
                <li>clear all products with one button</li>
                <li>Make the final bill</li>
            </ul>
            <p>When going back to the floor plan by clicking "close ordering mode" the table color is being updated accordingly.</p>
            <h3>Reservations</h3>
            <p>On the <Link to={"/ReservationsPage"}>reservations</Link> page the user can add and remove reservations, a distinction is made in reservations that have an upcomming timestamp and  a passed timestamp</p>
        </div>
    )
}

export default About;

